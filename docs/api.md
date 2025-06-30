# 🌐 KisanAI API Documentation

> **Complete API reference for integrating with KisanAI services**

---

## 🚀 **API Overview**

The KisanAI API provides programmatic access to our agricultural intelligence platform, enabling third-party developers, agricultural organizations, and government bodies to integrate our AI-powered services into their applications.

### **Base URL**
```
Production: https://api.kisanai.in/v1/
Staging: https://staging-api.kisanai.in/v1/
```

### **Authentication**
```javascript
// API Key Authentication
headers: {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}
```

---

## 📸 **Disease Detection API**

### **POST /detect/disease**

Upload an image for crop disease detection and receive AI-powered diagnosis.

#### **Request**
```javascript
// Multipart form data
const formData = new FormData();
formData.append('image', imageFile);
formData.append('crop_type', 'tomato'); // Optional
formData.append('location', 'Punjab, India'); // Optional
formData.append('language', 'hi'); // Optional, default: 'en'

fetch('https://api.kisanai.in/v1/detect/disease', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: formData
});
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "disease": {
      "name": "Early Blight",
      "scientific_name": "Alternaria solani",
      "hindi_name": "अर्ली ब्लाइट",
      "confidence": 0.94,
      "severity": "moderate",
      "type": "fungal"
    },
    "crop": {
      "detected_crop": "tomato",
      "confidence": 0.98
    },
    "treatment": {
      "immediate_action": "Apply Mancozeb 75% WP @ 2g/L water",
      "dosage": "2g per liter of water",
      "frequency": "Every 7-10 days",
      "timing": "Early morning or evening",
      "cost_estimate": "₹200-250 per acre"
    },
    "prevention": [
      "Avoid overhead watering",
      "Ensure proper plant spacing",
      "Remove infected leaves immediately",
      "Rotate with non-solanaceous crops"
    ],
    "local_dealers": [
      {
        "name": "Ram Agro Store",
        "distance": "2.1 km",
        "phone": "+91-9876543210"
      }
    ]
  },
  "metadata": {
    "processing_time": "1.2s",
    "image_quality": "good",
    "request_id": "req_123456789"
  }
}
```

#### **Error Response**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_IMAGE",
    "message": "Unable to detect crop in the provided image",
    "details": "Please ensure the image shows clear crop leaves or symptoms"
  }
}
```

---

## 🤖 **Chat Assistant API**

### **POST /chat/ask**

Send a question to the KisanAI chatbot and receive intelligent responses.

#### **Request**
```javascript
{
  "message": "धान की फसल में कौन सा खाद डालना चाहिए?",
  "language": "hi",
  "location": {
    "state": "Punjab",
    "district": "Ludhiana",
    "coordinates": {
      "latitude": 30.9010,
      "longitude": 75.8573
    }
  },
  "farmer_profile": {
    "crops": ["rice", "wheat"],
    "farm_size": "2.5 acres",
    "experience": "5 years"
  },
  "conversation_id": "conv_123456789" // Optional, for context
}
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "response": {
      "text": "🌾 **धान के लिए उर्वरक योजना**:\n\n🌱 **बुवाई के समय** (Base Dose):\n• यूरिया: 100 kg/हेक्टेयर\n• DAP: 100 kg/हेक्टेयर\n• MOP: 50 kg/हेक्टेयर\n\n🌿 **टिलरिंग स्टेज** (25-30 दिन बाद):\n• यूरिया: 50 kg/हेक्टेयर\n\n💰 **लागत**: लगभग ₹8,000-10,000 प्रति हेक्टेयर",
      "language": "hi",
      "audio_url": "https://cdn.kisanai.in/audio/response_123.mp3" // If TTS enabled
    },
    "intent": "fertilizer_recommendation",
    "confidence": 0.92,
    "sources": [
      "ICAR Guidelines for Rice Cultivation",
      "Punjab Agricultural University Recommendations"
    ],
    "related_questions": [
      "धान की बुवाई का सही समय क्या है?",
      "धान में कीट नियंत्रण कैसे करें?",
      "धान की सिंचाई कब करनी चाहिए?"
    ]
  },
  "metadata": {
    "conversation_id": "conv_123456789",
    "response_time": "0.8s",
    "request_id": "req_987654321"
  }
}
```

### **POST /chat/voice**

Process voice messages for speech-to-text and intelligent responses.

#### **Request**
```javascript
// Multipart form data
const formData = new FormData();
formData.append('audio', audioFile); // WAV, MP3, or M4A
formData.append('language', 'hi'); // Optional
formData.append('location', 'Punjab, India'); // Optional
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "transcription": {
      "text": "धान की फसल में कौन सा खाद डालना चाहिए",
      "language": "hi",
      "confidence": 0.96
    },
    "response": {
      "text": "🌾 धान के लिए उर्वरक योजना...",
      "audio_url": "https://cdn.kisanai.in/audio/response_456.mp3"
    }
  }
}
```

---

## 🌦️ **Weather API**

### **GET /weather/forecast**

Get weather forecast and agricultural recommendations.

#### **Request**
```javascript
GET /weather/forecast?location=Punjab,India&days=7&language=hi
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "location": {
      "name": "Punjab, India",
      "coordinates": {
        "latitude": 30.9010,
        "longitude": 75.8573
      }
    },
    "current": {
      "temperature": 32,
      "humidity": 65,
      "rainfall": 0,
      "wind_speed": 12,
      "uv_index": 8,
      "description": "Partly cloudy"
    },
    "forecast": [
      {
        "date": "2025-07-01",
        "temperature": {
          "min": 26,
          "max": 34
        },
        "rainfall": {
          "probability": 80,
          "amount": "15-25mm"
        },
        "humidity": 72,
        "wind_speed": 18,
        "farming_advice": {
          "recommended": [
            "Check drainage systems",
            "Postpone pesticide spraying",
            "Secure loose structures"
          ],
          "avoid": [
            "Field operations",
            "Fertilizer application",
            "Harvesting activities"
          ]
        }
      }
    ],
    "agricultural_alerts": [
      {
        "type": "rainfall_warning",
        "severity": "moderate",
        "message": "Heavy rainfall expected. Ensure proper drainage.",
        "crops_affected": ["rice", "cotton", "maize"]
      }
    ]
  }
}
```

---

## 💰 **Market Prices API**

### **GET /market/prices**

Get real-time mandi prices and market trends.

#### **Request**
```javascript
GET /market/prices?commodity=tomato&market=Delhi&days=7&language=hi
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "commodity": {
      "name": "Tomato",
      "hindi_name": "टमाटर",
      "category": "Vegetable"
    },
    "current_price": {
      "market": "Delhi",
      "date": "2025-07-01",
      "price": {
        "min": 15,
        "max": 25,
        "average": 20,
        "unit": "₹/kg"
      },
      "volume": "245 tons",
      "quality": "Grade A"
    },
    "price_trend": [
      {
        "date": "2025-06-30",
        "average_price": 18,
        "change_percent": 11.1
      },
      {
        "date": "2025-06-29",
        "average_price": 16,
        "change_percent": -5.9
      }
    ],
    "best_markets": [
      {
        "name": "Azadpur Mandi, Delhi",
        "price": 22,
        "distance": "0 km",
        "contact": "011-27681234"
      },
      {
        "name": "Ghazipur Mandi, Delhi",
        "price": 20,
        "distance": "15 km",
        "contact": "011-22470256"
      }
    ],
    "price_forecast": {
      "next_week": {
        "predicted_price": 23,
        "confidence": 0.78,
        "factors": ["reduced supply", "festival demand"]
      }
    }
  }
}
```

---

## 🏛️ **Government Schemes API**

### **GET /schemes/list**

Get information about government agricultural schemes.

#### **Request**
```javascript
GET /schemes/list?state=Punjab&category=financial&language=hi
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "schemes": [
      {
        "id": "pm_kisan",
        "name": "PM-KISAN",
        "hindi_name": "प्रधानमंत्री किसान सम्मान निधि योजना",
        "category": "financial",
        "description": "₹6,000 annual income support to farming families",
        "benefits": "₹2,000 installments every 4 months",
        "eligibility": [
          "Small and marginal farmers",
          "Landholding up to 2 hectares",
          "Indian citizen",
          "Valid Aadhaar card"
        ],
        "documents_required": [
          "Aadhaar card",
          "Bank account details",
          "Land ownership documents",
          "Mobile number"
        ],
        "application_process": {
          "online": "https://pmkisan.gov.in",
          "offline": "Nearest CSC center or Tehsil office"
        },
        "status_check": "https://pmkisan.gov.in/BeneficiaryStatus.aspx",
        "helpline": "155261"
      }
    ]
  }
}
```

### **POST /schemes/eligibility**

Check eligibility for specific government schemes.

#### **Request**
```javascript
{
  "scheme_id": "pm_kisan",
  "farmer_details": {
    "land_size": "1.5 acres",
    "location": "Punjab",
    "annual_income": 150000,
    "has_aadhaar": true,
    "has_bank_account": true
  }
}
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "eligible": true,
    "scheme": "PM-KISAN",
    "estimated_benefit": "₹6,000 per year",
    "next_steps": [
      "Visit pmkisan.gov.in",
      "Complete online registration",
      "Upload required documents",
      "Submit application"
    ],
    "missing_requirements": [],
    "estimated_approval_time": "15-30 days"
  }
}
```

---

## 📊 **Analytics API**

### **GET /analytics/farm**

Get comprehensive farm analytics and insights.

#### **Request**
```javascript
GET /analytics/farm?farmer_id=farmer_123&period=6months&language=hi
```

#### **Response**
```json
{
  "success": true,
  "data": {
    "farm_overview": {
      "total_area": "2.5 acres",
      "crops_grown": ["rice", "wheat"],
      "total_queries": 145,
      "diseases_detected": 8,
      "prevention_success": "78%"
    },
    "yield_analysis": {
      "current_season": {
        "crop": "rice",
        "expected_yield": "25 quintals/acre",
        "improvement": "+15% vs last year"
      },
      "recommendations": [
        "Consider drought-resistant varieties",
        "Optimize fertilizer timing",
        "Implement IPM practices"
      ]
    },
    "cost_savings": {
      "prevented_losses": "₹12,500",
      "optimized_inputs": "₹3,200",
      "total_savings": "₹15,700"
    },
    "learning_progress": {
      "topics_mastered": 12,
      "skill_level": "intermediate",
      "certifications_earned": 2
    }
  }
}
```

---

## 🔧 **Utility APIs**

### **GET /utils/languages**

Get list of supported languages.

#### **Response**
```json
{
  "success": true,
  "data": {
    "languages": [
      {
        "code": "hi",
        "name": "Hindi",
        "native_name": "हिंदी",
        "supported_features": ["text", "voice", "tts"]
      },
      {
        "code": "en",
        "name": "English",
        "native_name": "English",
        "supported_features": ["text", "voice", "tts"]
      }
    ]
  }
}
```

### **GET /utils/crops**

Get list of supported crops and diseases.

#### **Response**
```json
{
  "success": true,
  "data": {
    "crops": [
      {
        "id": "rice",
        "name": "Rice",
        "hindi_name": "धान",
        "category": "cereal",
        "diseases_count": 25,
        "growing_seasons": ["kharif"],
        "major_states": ["Punjab", "Haryana", "UP", "West Bengal"]
      }
    ]
  }
}
```

---

## 🚨 **Error Handling**

### **Error Response Format**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": "Additional error details",
    "request_id": "req_123456789",
    "timestamp": "2025-07-01T10:30:00Z"
  }
}
```

### **Common Error Codes**
| Code | Status | Description |
|------|--------|-------------|
| `INVALID_API_KEY` | 401 | API key is missing or invalid |
| `RATE_LIMIT_EXCEEDED` | 429 | API rate limit exceeded |
| `INVALID_IMAGE` | 400 | Image format not supported or corrupted |
| `CROP_NOT_DETECTED` | 400 | No crop detected in the image |
| `LANGUAGE_NOT_SUPPORTED` | 400 | Requested language not supported |
| `LOCATION_INVALID` | 400 | Invalid location format |
| `INTERNAL_ERROR` | 500 | Internal server error |

---

## 🔒 **Rate Limits**

### **Free Tier**
- **Disease Detection**: 100 requests/day
- **Chat Queries**: 200 requests/day
- **Weather API**: 500 requests/day
- **Market Prices**: 300 requests/day

### **Premium Tier (₹99/month)**
- **Disease Detection**: 1,000 requests/day
- **Chat Queries**: 2,000 requests/day
- **Weather API**: Unlimited
- **Market Prices**: Unlimited

### **Enterprise Tier**
- **All APIs**: Unlimited with SLA guarantees
- **Custom rate limits**: Based on requirements
- **Priority support**: 24/7 technical support

---

## 🛠️ **SDKs & Libraries**

### **Official SDKs**
```javascript
// Node.js
npm install kisanai-sdk

// Python
pip install kisanai-python

// PHP
composer require kisanai/php-sdk

// Java
// Maven dependency available
```

### **Usage Example (Node.js)**
```javascript
const KisanAI = require('kisanai-sdk');

const client = new KisanAI({
  apiKey: 'your_api_key',
  environment: 'production' // or 'staging'
});

// Disease detection
const result = await client.detectDisease({
  imagePath: './crop_image.jpg',
  cropType: 'tomato',
  language: 'hi'
});

console.log(result.disease.name); // "Early Blight"
console.log(result.treatment.immediate_action); // Treatment recommendation
```

---

## 📝 **Webhook Support**

### **Webhook Events**
- `disease.detected` - New disease detection
- `chat.response` - Chat response generated
- `weather.alert` - Weather alert triggered
- `price.update` - Significant price change

### **Webhook Payload Example**
```json
{
  "event": "disease.detected",
  "timestamp": "2025-07-01T10:30:00Z",
  "data": {
    "farmer_id": "farmer_123",
    "disease": "early_blight",
    "crop": "tomato",
    "severity": "moderate",
    "location": "Punjab, India"
  }
}
```

---

*The KisanAI API provides comprehensive access to our agricultural intelligence platform. With robust documentation, multiple SDKs, and reliable uptime, developers can easily integrate our AI-powered features into their applications.*

**🌐 Ready to build the future of agriculture!**
