import { NextRequest, NextResponse } from 'next/server';

const OPENROUTER_API_KEY = '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';

interface AIChatRequest {
  message: string;
  language?: string;
  context?: {
    cropType?: string;
    location?: string;
    season?: string;
    farmSize?: string;
  };
  conversationHistory?: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

interface AIChatResponse {
  response: string;
  confidence: number;
  category: string;
  relatedTopics: string[];
  followUpQuestions: string[];
  resources: Array<{
    title: string;
    description: string;
    type: 'article' | 'video' | 'guide' | 'scheme';
  }>;
}

// Agricultural knowledge categories
const AGRICULTURE_CATEGORIES = {
  'crop_management': 'Crop Management',
  'pest_control': 'Pest & Disease Control',
  'soil_health': 'Soil Health & Nutrition',
  'irrigation': 'Irrigation & Water Management',
  'weather': 'Weather & Climate',
  'market': 'Market & Pricing',
  'schemes': 'Government Schemes',
  'technology': 'Agricultural Technology',
  'organic_farming': 'Organic Farming',
  'livestock': 'Livestock Management'
};

// Common agricultural keywords for categorization
const CATEGORY_KEYWORDS = {
  'crop_management': ['crop', 'seed', 'planting', 'sowing', 'harvest', 'yield', 'variety', 'cultivation'],
  'pest_control': ['pest', 'disease', 'insect', 'fungus', 'spray', 'pesticide', 'treatment', 'infection'],
  'soil_health': ['soil', 'fertilizer', 'nutrition', 'compost', 'pH', 'nutrients', 'organic matter'],
  'irrigation': ['water', 'irrigation', 'drip', 'sprinkler', 'drought', 'watering', 'moisture'],
  'weather': ['weather', 'rain', 'temperature', 'climate', 'season', 'monsoon', 'frost'],
  'market': ['price', 'market', 'selling', 'profit', 'cost', 'mandi', 'trade'],
  'schemes': ['scheme', 'subsidy', 'government', 'loan', 'insurance', 'PM-KISAN', 'support'],
  'technology': ['technology', 'machine', 'equipment', 'drone', 'sensor', 'automation'],
  'organic_farming': ['organic', 'natural', 'bio', 'sustainable', 'chemical-free', 'eco-friendly'],
  'livestock': ['cattle', 'cow', 'buffalo', 'goat', 'poultry', 'chicken', 'dairy', 'animal']
};

function categorizeQuery(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return category;
    }
  }
  
  return 'crop_management'; // default category
}

function generateSystemPrompt(category: string, context?: any): string {
  const basePrompt = `You are KisanAI, an expert agricultural assistant specifically designed for Indian farmers. You have deep knowledge of:

- Indian crops, varieties, and growing conditions
- Regional farming practices across different states
- Seasonal patterns and monsoon-dependent agriculture
- Traditional and modern farming techniques
- Government schemes and subsidies for farmers
- Market trends and pricing in Indian agriculture
- Pest and disease management for Indian conditions
- Soil types and nutrition management
- Water management and irrigation techniques

Always provide:
1. Practical, actionable advice
2. Cost-effective solutions suitable for small and medium farmers
3. Locally relevant recommendations
4. Safety precautions when using chemicals
5. Alternative organic/natural solutions when possible

Keep responses concise but comprehensive, using simple language that farmers can easily understand.`;

  const categorySpecific = {
    'crop_management': 'Focus on crop selection, planting techniques, growth stages, and yield optimization.',
    'pest_control': 'Emphasize integrated pest management, early detection, and both chemical and organic treatment options.',
    'soil_health': 'Discuss soil testing, nutrient management, organic matter, and sustainable soil practices.',
    'irrigation': 'Cover water-efficient techniques, scheduling, and drought management strategies.',
    'weather': 'Provide weather-based farming advice and climate adaptation strategies.',
    'market': 'Include market timing, price trends, and value addition opportunities.',
    'schemes': 'Detail eligibility criteria, application processes, and required documentation.',
    'technology': 'Explain cost-benefit analysis and practical implementation for small farmers.',
    'organic_farming': 'Focus on certification processes, organic inputs, and market premiums.',
    'livestock': 'Cover animal health, breeding, feeding, and dairy management.'
  };

  return `${basePrompt}\n\nSpecific focus: ${categorySpecific[category as keyof typeof categorySpecific] || categorySpecific.crop_management}`;
}

function generateFollowUpQuestions(category: string): string[] {
  const questions = {
    'crop_management': [
      'What is your current crop and growth stage?',
      'What is your farm size and location?',
      'Are you facing any specific yield issues?'
    ],
    'pest_control': [
      'Can you describe the symptoms you\'re seeing?',
      'Have you tried any treatments already?',
      'What crop is affected and how widespread is the problem?'
    ],
    'soil_health': [
      'Have you done a soil test recently?',
      'What crops do you usually grow?',
      'Are you interested in organic farming methods?'
    ],
    'irrigation': [
      'What is your current irrigation method?',
      'How is the water availability in your area?',
      'What is your farm size and crop type?'
    ],
    'weather': [
      'What is your location and current season?',
      'Which crops are you planning to grow?',
      'Do you have weather protection measures?'
    ],
    'market': [
      'What crops are you planning to sell?',
      'What is your nearest market location?',
      'Are you interested in direct marketing?'
    ],
    'schemes': [
      'What is your land holding size?',
      'Do you have all required documents?',
      'Which specific scheme interests you?'
    ]
  };

  return questions[category as keyof typeof questions] || questions.crop_management;
}

function generateRelatedTopics(category: string): string[] {
  const topics = {
    'crop_management': ['Seed selection', 'Planting density', 'Growth monitoring', 'Harvest timing'],
    'pest_control': ['IPM practices', 'Beneficial insects', 'Organic pesticides', 'Disease prevention'],
    'soil_health': ['Soil testing', 'Composting', 'Green manuring', 'Micronutrients'],
    'irrigation': ['Drip irrigation', 'Water conservation', 'Mulching', 'Rainwater harvesting'],
    'weather': ['Crop insurance', 'Protected cultivation', 'Climate-smart agriculture'],
    'market': ['Value addition', 'Storage techniques', 'Transportation', 'Price forecasting'],
    'schemes': ['Crop insurance', 'Equipment subsidies', 'Training programs', 'Credit facilities']
  };

  return topics[category as keyof typeof topics] || topics.crop_management;
}

function generateResources(category: string): Array<{title: string; description: string; type: 'article' | 'video' | 'guide' | 'scheme'}> {
  const resources = {
    'crop_management': [
      {
        title: 'Crop Production Guidelines',
        description: 'Comprehensive guide for major Indian crops',
        type: 'guide' as const
      },
      {
        title: 'Variety Selection Tool',
        description: 'Choose the best varieties for your region',
        type: 'article' as const
      }
    ],
    'pest_control': [
      {
        title: 'IPM Training Videos',
        description: 'Learn integrated pest management techniques',
        type: 'video' as const
      },
      {
        title: 'Pest Identification Guide',
        description: 'Identify common pests and diseases',
        type: 'guide' as const
      }
    ],
    'schemes': [
      {
        title: 'PM-KISAN Scheme',
        description: 'Direct income support for farmers',
        type: 'scheme' as const
      },
      {
        title: 'Crop Insurance Scheme',
        description: 'Protect your crops from natural calamities',
        type: 'scheme' as const
      }
    ]
  };

  return resources[category as keyof typeof resources] || resources.crop_management;
}

export async function POST(request: NextRequest) {
  try {
    const body: AIChatRequest = await request.json();
    const { message, language = 'en', context, conversationHistory = [] } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Categorize the query
    const category = categorizeQuery(message);
    
    // Generate system prompt based on category and context
    const systemPrompt = generateSystemPrompt(category, context);
    
    // Prepare conversation messages
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    // Call OpenRouter API
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://kisanai.in',
        'X-Title': 'KisanAI Agricultural Assistant'
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3.5-sonnet',
        messages: messages,
        max_tokens: 1500,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json() as any;
    const aiResponse = data.choices?.[0]?.message?.content || 'Sorry, I could not process your request.';

    // Generate additional helpful information
    const followUpQuestions = generateFollowUpQuestions(category);
    const relatedTopics = generateRelatedTopics(category);
    const resources = generateResources(category);

    const chatResponse: AIChatResponse = {
      response: aiResponse,
      confidence: 0.85, // Mock confidence score
      category: AGRICULTURE_CATEGORIES[category as keyof typeof AGRICULTURE_CATEGORIES],
      relatedTopics,
      followUpQuestions,
      resources
    };

    return NextResponse.json(chatResponse);
  } catch (error) {
    console.error('AI Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'AI Chat API Active',
    supportedLanguages: ['en', 'hi', 'bn', 'te', 'ta', 'ml', 'kn', 'gu', 'mr', 'pa'],
    categories: Object.values(AGRICULTURE_CATEGORIES),
    features: [
      'Multi-language support',
      'Context-aware responses',
      'Agricultural expertise',
      'Follow-up suggestions',
      'Resource recommendations'
    ],
    timestamp: new Date().toISOString()
  });
}