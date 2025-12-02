import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import OpenAI from 'openai';

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Direct OpenAI client for audio transcriptions (not yet fully supported in Vercel AI SDK core)
const openaiClient = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export async function transcribeAudio(audioFile: File | Blob): Promise<string> {
  try {
    const response = await openaiClient.audio.transcriptions.create({
      file: audioFile as any,
      model: 'whisper-1',
    });
    return response.text;
  } catch (error) {
    console.error('Transcription error:', error);
    throw new Error('Failed to transcribe audio');
  }
}

export async function callAI(
  prompt: string,
  options: {
    systemPrompt?: string;
    model?: string;
    imageUrl?: string;
    language?: string;
  } = {}
): Promise<string> {
  const {
    systemPrompt = 'You are KisanAI, an expert agricultural assistant for Indian farmers. Provide practical, actionable advice in simple language. Focus on crop management, disease prevention, weather-based recommendations, and sustainable farming practices suitable for Indian conditions.',
    model = 'gpt-4o',
    imageUrl,
    language = 'en'
  } = options;

  try {
    if (!OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not defined');
      return 'Sorry, I am not configured correctly. Please contact support.';
    }

    const languagePrompt = language !== 'en' ? `\nPlease reply in ${language} language.` : '';
    const finalSystemPrompt = systemPrompt + languagePrompt;

    const messages: any[] = [
      { role: 'system', content: finalSystemPrompt },
      {
        role: 'user',
        content: [
          { type: 'text', text: prompt },
          ...(imageUrl ? [{ type: 'image', image: imageUrl }] : [])
        ]
      }
    ];

    const { text } = await generateText({
      model: openai(model),
      messages: messages,
    });

    return text;
  } catch (error) {
    console.error('AI API error:', error);
    return 'Sorry, I am experiencing technical difficulties. Please try again later.';
  }
}
