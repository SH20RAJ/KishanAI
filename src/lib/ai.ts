import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function callAI(
  prompt: string,
  systemPrompt: string = 'You are KisanAI, an expert agricultural assistant for Indian farmers. Provide practical, actionable advice in simple language. Focus on crop management, disease prevention, weather-based recommendations, and sustainable farming practices suitable for Indian conditions.',
  model: string = 'gpt-4o-mini'
): Promise<string> {
  try {
    if (!OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not defined');
      return 'Sorry, I am not configured correctly. Please contact support.';
    }

    const { text } = await generateText({
      model: openai(model),
      system: systemPrompt,
      prompt: prompt,
    });

    return text;
  } catch (error) {
    console.error('AI API error:', error);
    return 'Sorry, I am experiencing technical difficulties. Please try again later.';
  }
}
