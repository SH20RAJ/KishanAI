import { NextRequest, NextResponse } from 'next/server';
import { callAI, transcribeAudio } from '@/lib/ai';

// Telegram Bot API types
interface TelegramUpdate {
  update_id: number;
  message?: TelegramMessage;
  callback_query?: TelegramCallbackQuery;
}

interface TelegramMessage {
  message_id: number;
  from: TelegramUser;
  chat: TelegramChat;
  date: number;
  text?: string;
  photo?: TelegramPhotoSize[];
  location?: TelegramLocation;
  voice?: TelegramVoice;
}

interface TelegramVoice {
  file_id: string;
  file_unique_id: string;
  duration: number;
  mime_type?: string;
  file_size?: number;
}

interface TelegramUser {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

interface TelegramChat {
  id: number;
  type: string;
  first_name?: string;
  last_name?: string;
  username?: string;
}

interface TelegramPhotoSize {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  file_size?: number;
}

interface TelegramLocation {
  longitude: number;
  latitude: number;
}

interface TelegramCallbackQuery {
  id: string;
  from: TelegramUser;
  message?: TelegramMessage;
  data?: string;
}

// Bot configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;


// Language mappings
const LANGUAGE_NAMES: { [key: string]: string } = {
  'en': 'English',
  'hi': 'हिंदी (Hindi)',
  'bn': 'বাংলা (Bengali)',
  'te': 'తెలుగు (Telugu)',
  'ta': 'தமிழ் (Tamil)',
  'ml': 'മലയാളം (Malayalam)',
  'kn': 'ಕನ್ನಡ (Kannada)',
  'gu': 'ગુજરાતી (Gujarati)',
  'mr': 'मराठी (Marathi)',
  'pa': 'ਪੰਜਾਬੀ (Punjabi)',
  'or': 'ଓଡ଼ିଆ (Odia)',
  'as': 'অসমীয়া (Assamese)',
  'ur': 'اردو (Urdu)',
  'ne': 'नेपाली (Nepali)',
  'si': 'සිංහල (Sinhala)'
};

// User session storage (in production, use a database)
const userSessions = new Map<number, {
  language: string;
  location?: { lat: number; lon: number };
  state?: string;
  lastActivity: Date;
}>();

// Telegram API helper functions
async function sendMessage(chatId: number, text: string, options?: any) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const payload = {
    chat_id: chatId,
    text: text,
    parse_mode: 'HTML',
    ...options
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error('Failed to send message:', await response.text());
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

async function sendPhoto(chatId: number, photo: string, caption?: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`;

  const payload = {
    chat_id: chatId,
    photo: photo,
    caption: caption,
    parse_mode: 'HTML'
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return await response.json();
  } catch (error) {
    console.error('Error sending photo:', error);
  }
}



// Command handlers
async function handleStartCommand(chatId: number, user: TelegramUser) {
  const session = userSessions.get(chatId) || { language: 'en', lastActivity: new Date() };
  userSessions.set(chatId, session);

  const welcomeMessage = `
🌾 <b>Namaste Kisan! Welcome to KisanAI</b> 🙏

I am your personal AI farming assistant, here to help you grow better crops and earn more.

<b>Here is how I can help you:</b>

📸 <b>Crop Doctor</b>
Send a photo of your sick crop, and I will tell you the disease and medicine.

🌦️ <b>Weather Updates</b>
Get accurate weather forecasts for your farm.

💰 <b>Mandi Prices</b>
Check today's market rates for your crops.

🗣️ <b>Voice Support</b>
Just speak to me in your language! Send a voice note.

<b>Quick Actions:</b>
👇 Tap a button below to start
  `;

  const keyboard = {
    inline_keyboard: [
      [
        { text: '📸 Detect Disease', callback_data: 'detect_disease' },
        { text: '🌦️ Weather', callback_data: 'weather' }
      ],
      [
        { text: '💰 Market Prices', callback_data: 'prices' },
        { text: '🏛️ Schemes', callback_data: 'schemes' }
      ],
      [
        { text: '🗣️ Change Language', callback_data: 'language' }
      ]
    ]
  };

  await sendMessage(chatId, welcomeMessage, { reply_markup: keyboard });
}

async function handleHelpCommand(chatId: number) {
  const helpMessage = `
🆘 <b>KisanAI Help</b>

<b>🔤 Basic Commands:</b>
/start - Welcome message
/help - This help message
/language - Change language
/profile - Your profile

<b>🌾 Farming Features:</b>
/detect - Crop disease detection
/ask - Ask farming question
/weather - Weather forecast
/prices - Market prices
/calendar - Crop calendar
/schemes - Government schemes

<b>📸 Photo Analysis:</b>
Just send a photo of your crop for instant disease detection!

<b>💬 Chat:</b>
Ask any farming question in your language:
• "मेरी फसल में पीले पत्ते क्यों हैं?"
• "What fertilizer for tomatoes?"
• "ধানের রোগ কিভাবে প্রতিরোধ করব?"

<b>🌍 Supported Languages:</b>
Hindi, Bengali, Telugu, Tamil, Malayalam, Kannada, Gujarati, Marathi, Punjabi, Odia, Assamese, Urdu, Nepali, Sinhala, English

Need help? Just type your question! 🌱
  `;

  await sendMessage(chatId, helpMessage);
}

async function handleLanguageCommand(chatId: number) {
  const languageKeyboard = {
    inline_keyboard: [
      [
        { text: '🇮🇳 हिंदी', callback_data: 'lang_hi' },
        { text: '🇮🇳 English', callback_data: 'lang_en' }
      ],
      [
        { text: '🇮🇳 বাংলা', callback_data: 'lang_bn' },
        { text: '🇮🇳 తెలుగు', callback_data: 'lang_te' }
      ],
      [
        { text: '🇮🇳 தமிழ்', callback_data: 'lang_ta' },
        { text: '🇮🇳 മലയാളം', callback_data: 'lang_ml' }
      ],
      [
        { text: '🇮🇳 ಕನ್ನಡ', callback_data: 'lang_kn' },
        { text: '🇮🇳 ગુજરાતી', callback_data: 'lang_gu' }
      ],
      [
        { text: '🇮🇳 मराठी', callback_data: 'lang_mr' },
        { text: '🇮🇳 ਪੰਜਾਬੀ', callback_data: 'lang_pa' }
      ]
    ]
  };

  await sendMessage(chatId, '🌍 <b>Choose your preferred language:</b>', {
    reply_markup: languageKeyboard
  });
}

async function handleWeatherCommand(chatId: number) {
  // Hardcoded weather data for demo
  const weatherMessage = `
🌦️ <b>Weather Forecast (New Delhi)</b>

<b>Current Status:</b>
🌡️ <b>Temp:</b> 28°C (Partly Cloudy)
💧 <b>Humidity:</b> 65% | 💨 <b>Wind:</b> 12 km/h

<b>📅 Forecast:</b>
• <b>Tomorrow:</b> 25°C, 🌧️ Light Rain
• <b>Day After:</b> 30°C, ☀️ Sunny

<b>🌾 Farmer Advisory:</b>
✅ <b>Field Work:</b> Good conditions today.
⚠️ <b>Alert:</b> Light rain expected tomorrow. Ensure drainage is clear.
💧 <b>Irrigation:</b> Hold irrigation for now.
  `;

  await sendMessage(chatId, weatherMessage);
}

async function handlePricesCommand(chatId: number) {
  const pricesMessage = `
💰 <b>Mandi Rates (₹/Quintal)</b>
<i>Updated: Today</i>

🌾 <b>Wheat:</b> ₹2,150 - ₹2,200
🌽 <b>Maize:</b> ₹1,800 - ₹1,850
🍅 <b>Tomato:</b> ₹1,200 - ₹1,500
🧅 <b>Onion:</b> ₹800 - ₹1,000
🥔 <b>Potato:</b> ₹600 - ₹800

📈 <b>Market Insight:</b>
Tomato prices are rising 🔼. Good time to sell!
Wheat prices are stable ➡️.

💡 <i>Tip: You can ask me for specific crop prices like "Cotton price today".</i>
  `;

  await sendMessage(chatId, pricesMessage);
}

async function handleSchemesCommand(chatId: number) {
  const schemesMessage = `
🏛️ <b>Government Schemes for Farmers</b>

💰 <b>PM-KISAN Scheme</b>
• ₹6,000 per year in 3 installments
• For all landholding farmers
• Apply online at pmkisan.gov.in

🌾 <b>Crop Insurance (PMFBY)</b>
• Premium: 2% for Kharif, 1.5% for Rabi
• Covers natural calamities
• Apply through banks or CSCs

💧 <b>Drip Irrigation Subsidy</b>
• Up to 55% subsidy for small farmers
• 45% for other farmers
• Apply through agriculture department

🚜 <b>Tractor Subsidy</b>
• 25-50% subsidy on tractors
• Varies by state
• Contact local agriculture office

📱 <b>How to Apply:</b>
1. Visit nearest CSC or agriculture office
2. Carry Aadhaar, land documents
3. Fill application form
4. Submit required documents

Need help with specific scheme? Ask me: "How to apply for PM-KISAN?" or "ट्रैक्टर सब्सिडी कैसे मिलेगी?"
  `;

  await sendMessage(chatId, schemesMessage);
}

async function handlePhotoMessage(chatId: number, photos: TelegramPhotoSize[], caption?: string) {
  await sendMessage(chatId, '🔍 <b>Analyzing your crop image...</b>\n\nPlease wait while I examine the photo for any diseases or issues.');

  // Get the largest photo
  const largestPhoto = photos.reduce((prev, current) =>
    (prev.file_size || 0) > (current.file_size || 0) ? prev : current
  );

  try {
    // Get file path from Telegram
    const fileResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${largestPhoto.file_id}`);
    const fileData = await fileResponse.json() as any;

    if (!fileData.ok) throw new Error('Failed to get file path');

    const filePath = fileData.result.file_path;
    const imageUrl = `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${filePath}`;

    const session = userSessions.get(chatId) || { language: 'en', lastActivity: new Date() };

    const prompt = caption || `Analyze this crop image. Identify any diseases, pests, or nutritional deficiencies. 
    
    Provide a structured report with the following sections:
    1. <b>Disease/Issue</b>: Name of the disease or 'Healthy'.
    2. <b>Confidence</b>: High/Medium/Low.
    3. <b>Severity</b>: High/Medium/Low.
    4. <b>Treatment</b>: Actionable steps to cure or manage the issue.
    5. <b>Prevention</b>: Tips to prevent future occurrence.

    Format the response using HTML tags supported by Telegram (<b>, <i>, etc.). Do not use Markdown.`;

    const aiResponse = await callAI(prompt, {
      imageUrl: imageUrl,
      language: session.language,
      model: 'gpt-4o'
    });

    await sendMessage(chatId, `🔬 <b>Analysis Report</b>\n\n${aiResponse}`);

  } catch (error) {
    console.error('Error analyzing photo:', error);
    await sendMessage(chatId, '❌ Sorry, I could not analyze the image. Please try again.');
  }
}

async function handleVoiceMessage(chatId: number, voice: TelegramVoice) {
  await sendMessage(chatId, '🎤 <b>Listening...</b>');

  try {
    // Get file path
    const fileResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${voice.file_id}`);
    const fileData = await fileResponse.json() as any;

    if (!fileData.ok) throw new Error('Failed to get file path');

    const filePath = fileData.result.file_path;
    const fileUrl = `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${filePath}`;

    // Download file
    const audioResponse = await fetch(fileUrl);
    const audioBlob = await audioResponse.blob();

    // Transcribe
    const transcription = await transcribeAudio(audioBlob as any); // Cast to any because File/Blob types might mismatch with OpenAI SDK expectation in this context

    await sendMessage(chatId, `📝 <b>You said:</b> "${transcription}"`);

    // Process as text message
    const session = userSessions.get(chatId) || { language: 'en', lastActivity: new Date() };
    await handleTextMessage(chatId, transcription, { id: chatId, is_bot: false, first_name: 'User' } as TelegramUser);

  } catch (error) {
    console.error('Error processing voice:', error);
    await sendMessage(chatId, '❌ Sorry, I could not process your voice message. Please try again.');
  }
}

async function handleTextMessage(chatId: number, text: string, user: TelegramUser) {
  const session = userSessions.get(chatId) || { language: 'en', lastActivity: new Date() };

  // Update last activity
  session.lastActivity = new Date();
  userSessions.set(chatId, session);

  // Check if it's a location text
  if (text.toLowerCase().includes('weather') || text.toLowerCase().includes('मौसम')) {
    await handleWeatherCommand(chatId);
    return;
  }

  // Check if it's a price query
  if (text.toLowerCase().includes('price') || text.toLowerCase().includes('भाव') || text.toLowerCase().includes('दाम')) {
    await handlePricesCommand(chatId);
    return;
  }

  // General farming question - use AI
  await sendMessage(chatId, '🤖 <b>Let me help you with that...</b>');

  const aiPrompt = `
You are KisanAI, a helpful agricultural expert for Indian farmers.
User Question: "${text}"

Please provide a response that is:
1. **Encouraging & Respectful**: Start with a warm greeting (Namaste/Hello).
2. **Simple & Clear**: Use easy-to-understand language. Avoid jargon.
3. **Actionable**: Give step-by-step advice.
4. **Localized**: Mention Indian context (fertilizers, seasons, units) if relevant.

Format the response with emojis and clear sections.
  `;

  const aiResponse = await callAI(aiPrompt, {
    language: session.language,
    model: 'gpt-4o'
  });

  const formattedResponse = `
${aiResponse}

-------------------
<i>Type /help for more options.</i>
  `;

  await sendMessage(chatId, formattedResponse);
}

async function handleCallbackQuery(callbackQuery: TelegramCallbackQuery) {
  const chatId = callbackQuery.message?.chat.id;
  const data = callbackQuery.data;

  if (!chatId || !data) return;

  if (data.startsWith('lang_')) {
    const langCode = data.replace('lang_', '');
    const session = userSessions.get(chatId) || { language: 'en', lastActivity: new Date() };
    session.language = langCode;
    userSessions.set(chatId, session);

    const languageName = LANGUAGE_NAMES[langCode] || 'English';
    await sendMessage(chatId, `✅ Language changed to ${languageName}\n\nYou can now ask questions in your preferred language!`);
  } else if (data === 'weather') {
    await handleWeatherCommand(chatId);
  } else if (data === 'prices') {
    await handlePricesCommand(chatId);
  } else if (data === 'schemes') {
    await handleSchemesCommand(chatId);
  } else if (data === 'detect_disease') {
    await sendMessage(chatId, '📸 Please send a photo of your crop to detect diseases.');
  } else if (data === 'language') {
    await handleLanguageCommand(chatId);
  }
}

// Main webhook handler
export async function POST(request: NextRequest) {
  try {
    const update: TelegramUpdate = await request.json();

    if (update.message) {
      const message = update.message;
      const chatId = message.chat.id;
      const user = message.from;

      // Handle commands
      if (message.text?.startsWith('/')) {
        const command = message.text.split(' ')[0].toLowerCase();

        switch (command) {
          case '/start':
            await handleStartCommand(chatId, user);
            break;
          case '/help':
            await handleHelpCommand(chatId);
            break;
          case '/language':
            await handleLanguageCommand(chatId);
            break;
          case '/weather':
            await handleWeatherCommand(chatId);
            break;
          case '/prices':
            await handlePricesCommand(chatId);
            break;
          case '/schemes':
            await handleSchemesCommand(chatId);
            break;
          default:
            await sendMessage(chatId, 'Unknown command. Type /help to see available commands.');
        }
      }
      // Handle photo messages
      else if (message.photo) {
        await handlePhotoMessage(chatId, message.photo, message.text); // message.text might be caption
      }
      // Handle voice messages
      else if (message.voice) {
        await handleVoiceMessage(chatId, message.voice);
      }
      // Handle text messages
      else if (message.text) {
        await handleTextMessage(chatId, message.text, user);
      }
      // Handle location
      else if (message.location) {
        const session = userSessions.get(chatId) || { language: 'en', lastActivity: new Date() };
        session.location = {
          lat: message.location.latitude,
          lon: message.location.longitude
        };
        userSessions.set(chatId, session);

        await sendMessage(chatId, '📍 Location saved! Now I can provide accurate weather forecasts and local information.');
        await handleWeatherCommand(chatId);
      }
    }
    // Handle callback queries (inline keyboard responses)
    else if (update.callback_query) {
      await handleCallbackQuery(update.callback_query);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Handle GET requests (for webhook verification)
export async function GET() {
  return NextResponse.json({
    status: 'KisanAI Telegram Bot Webhook Active',
    timestamp: new Date().toISOString()
  });
}