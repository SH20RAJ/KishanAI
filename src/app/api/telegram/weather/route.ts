import { NextRequest, NextResponse } from 'next/server';

interface WeatherRequest {
  location?: {
    lat: number;
    lon: number;
  };
  city?: string;
  language?: string;
}

interface WeatherResponse {
  location: string;
  current: {
    temperature: number;
    humidity: number;
    windSpeed: number;
    condition: string;
    pressure: number;
  };
  forecast: Array<{
    date: string;
    temperature: {
      min: number;
      max: number;
    };
    condition: string;
    rainfall: number;
    humidity: number;
  }>;
  farmingAdvice: {
    irrigation: string;
    fieldWork: string;
    planting: string;
    harvesting: string;
    pestControl: string;
  };
  alerts: string[];
}

// Mock weather data for Indian cities
const WEATHER_DATA = {
  'delhi': {
    current: { temp: 28, humidity: 65, wind: 12, condition: 'Partly Cloudy', pressure: 1013 },
    forecast: [
      { date: '2024-01-15', min: 18, max: 30, condition: 'Sunny', rainfall: 0, humidity: 60 },
      { date: '2024-01-16', min: 20, max: 32, condition: 'Partly Cloudy', rainfall: 0, humidity: 65 },
      { date: '2024-01-17', min: 22, max: 28, condition: 'Light Rain', rainfall: 5, humidity: 80 }
    ]
  },
  'mumbai': {
    current: { temp: 26, humidity: 78, wind: 15, condition: 'Humid', pressure: 1010 },
    forecast: [
      { date: '2024-01-15', min: 22, max: 28, condition: 'Cloudy', rainfall: 0, humidity: 75 },
      { date: '2024-01-16', min: 23, max: 29, condition: 'Light Rain', rainfall: 8, humidity: 85 },
      { date: '2024-01-17', min: 21, max: 27, condition: 'Heavy Rain', rainfall: 25, humidity: 90 }
    ]
  },
  'bangalore': {
    current: { temp: 24, humidity: 70, wind: 8, condition: 'Pleasant', pressure: 1015 },
    forecast: [
      { date: '2024-01-15', min: 18, max: 26, condition: 'Sunny', rainfall: 0, humidity: 65 },
      { date: '2024-01-16', min: 19, max: 27, condition: 'Partly Cloudy', rainfall: 0, humidity: 70 },
      { date: '2024-01-17', min: 20, max: 25, condition: 'Light Rain', rainfall: 3, humidity: 75 }
    ]
  }
};

function getLocationKey(city?: string, lat?: number, lon?: number): string {
  if (city) {
    return city.toLowerCase();
  }
  
  // Mock location detection based on coordinates
  if (lat && lon) {
    if (lat > 28 && lat < 29 && lon > 77 && lon < 78) return 'delhi';
    if (lat > 19 && lat < 20 && lon > 72 && lon < 73) return 'mumbai';
    if (lat > 12 && lat < 13 && lon > 77 && lon < 78) return 'bangalore';
  }
  
  return 'delhi'; // default
}

function generateFarmingAdvice(forecast: any[], current: any): any {
  const hasRain = forecast.some(day => day.rainfall > 0);
  const avgTemp = forecast.reduce((sum, day) => sum + (day.min + day.max) / 2, 0) / forecast.length;
  const highHumidity = current.humidity > 75;

  return {
    irrigation: hasRain 
      ? 'Reduce irrigation for next 2-3 days due to expected rainfall'
      : 'Continue regular irrigation schedule. Check soil moisture levels.',
    
    fieldWork: current.condition.includes('Rain')
      ? 'Avoid field operations during rain. Wait for soil to dry.'
      : 'Good conditions for field work. Optimal time: early morning or evening.',
    
    planting: avgTemp > 25 && !hasRain
      ? 'Good conditions for summer crops. Ensure adequate water supply.'
      : hasRain 
        ? 'Excellent time for monsoon crops like rice, sugarcane.'
        : 'Suitable for winter crops like wheat, mustard.',
    
    harvesting: current.condition.includes('Rain')
      ? 'Postpone harvesting until weather clears to avoid crop damage.'
      : 'Good conditions for harvesting. Ensure proper drying and storage.',
    
    pestControl: highHumidity
      ? 'High humidity may increase pest activity. Monitor crops closely.'
      : 'Normal pest monitoring required. Apply treatments as needed.'
  };
}

function generateAlerts(forecast: any[], current: any): string[] {
  const alerts: string[] = [];
  
  // Temperature alerts
  if (current.temp > 35) {
    alerts.push('🌡️ High temperature alert! Increase irrigation and provide shade for sensitive crops.');
  }
  
  if (current.temp < 10) {
    alerts.push('❄️ Cold wave warning! Protect crops from frost damage.');
  }
  
  // Rainfall alerts
  const heavyRain = forecast.find(day => day.rainfall > 20);
  if (heavyRain) {
    alerts.push('🌧️ Heavy rainfall expected! Ensure proper drainage and avoid waterlogging.');
  }
  
  // Humidity alerts
  if (current.humidity > 85) {
    alerts.push('💧 Very high humidity! Increased risk of fungal diseases. Monitor crops closely.');
  }
  
  // Wind alerts
  if (current.wind > 25) {
    alerts.push('💨 Strong winds expected! Secure tall crops and greenhouses.');
  }
  
  return alerts;
}

export async function POST(request: NextRequest) {
  try {
    const body: WeatherRequest = await request.json();
    const { location, city, language = 'en' } = body;

    const locationKey = getLocationKey(city, location?.lat, location?.lon);
    const weatherData = WEATHER_DATA[locationKey as keyof typeof WEATHER_DATA] || WEATHER_DATA.delhi;
    
    const farmingAdvice = generateFarmingAdvice(weatherData.forecast, weatherData.current);
    const alerts = generateAlerts(weatherData.forecast, weatherData.current);

    const response: WeatherResponse = {
      location: locationKey.charAt(0).toUpperCase() + locationKey.slice(1),
      current: {
        temperature: weatherData.current.temp,
        humidity: weatherData.current.humidity,
        windSpeed: weatherData.current.wind,
        condition: weatherData.current.condition,
        pressure: weatherData.current.pressure
      },
      forecast: weatherData.forecast.map(day => ({
        date: day.date,
        temperature: {
          min: day.min,
          max: day.max
        },
        condition: day.condition,
        rainfall: day.rainfall,
        humidity: day.humidity
      })),
      farmingAdvice,
      alerts
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Weather API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city') || 'delhi';
  
  const locationKey = getLocationKey(city);
  const weatherData = WEATHER_DATA[locationKey as keyof typeof WEATHER_DATA] || WEATHER_DATA.delhi;
  
  return NextResponse.json({
    status: 'Weather API Active',
    location: locationKey,
    current: weatherData.current,
    supportedCities: Object.keys(WEATHER_DATA),
    timestamp: new Date().toISOString()
  });
}