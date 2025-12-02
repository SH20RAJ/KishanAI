export const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

export interface OpenRouterResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export async function callOpenRouterAPI(
  prompt: string,
  systemPrompt: string = 'You are KisanAI, an expert agricultural assistant for Indian farmers. Provide practical, actionable advice in simple language. Focus on crop management, disease prevention, weather-based recommendations, and sustainable farming practices suitable for Indian conditions.',
  model: string = 'x-ai/grok-4.1-fast:free'
): Promise<string> {
  try {
    if (!OPENROUTER_API_KEY) {
      console.error('OPENROUTER_API_KEY is not defined');
      return 'Sorry, I am not configured correctly. Please contact support.';
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://kisanai.in',
        'X-Title': 'KisanAI'
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        reasoning: {
          enabled: false
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json() as OpenRouterResponse;
    return data.choices?.[0]?.message?.content || 'Sorry, I could not process your request.';
  } catch (error) {
    console.error('OpenRouter API error:', error);
    return 'Sorry, I am experiencing technical difficulties. Please try again later.';
  }
}
