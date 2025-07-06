import { NextRequest, NextResponse } from 'next/server';

interface MandiPricesRequest {
  crop?: string;
  state?: string;
  market?: string;
  language?: string;
}

interface CropPrice {
  crop: string;
  variety?: string;
  minPrice: number;
  maxPrice: number;
  modalPrice: number;
  unit: string;
  market: string;
  state: string;
  date: string;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
}

interface MandiPricesResponse {
  prices: CropPrice[];
  marketSummary: {
    totalCrops: number;
    avgPriceChange: number;
    topGainers: CropPrice[];
    topLosers: CropPrice[];
  };
  recommendations: {
    selling: string[];
    buying: string[];
    holding: string[];
  };
  lastUpdated: string;
}

// Mock mandi price data for Indian markets
const MANDI_PRICES: CropPrice[] = [
  {
    crop: 'Wheat',
    variety: 'HD-2967',
    minPrice: 2100,
    maxPrice: 2200,
    modalPrice: 2150,
    unit: 'Quintal',
    market: 'Azadpur',
    state: 'Delhi',
    date: '2024-01-15',
    trend: 'stable',
    changePercent: 0.5
  },
  {
    crop: 'Rice',
    variety: 'Basmati',
    minPrice: 4500,
    maxPrice: 5200,
    modalPrice: 4850,
    unit: 'Quintal',
    market: 'Karnal',
    state: 'Haryana',
    date: '2024-01-15',
    trend: 'up',
    changePercent: 3.2
  },
  {
    crop: 'Tomato',
    minPrice: 1200,
    maxPrice: 1800,
    modalPrice: 1500,
    unit: 'Quintal',
    market: 'Azadpur',
    state: 'Delhi',
    date: '2024-01-15',
    trend: 'up',
    changePercent: 15.5
  },
  {
    crop: 'Onion',
    minPrice: 800,
    maxPrice: 1200,
    modalPrice: 1000,
    unit: 'Quintal',
    market: 'Lasalgaon',
    state: 'Maharashtra',
    date: '2024-01-15',
    trend: 'down',
    changePercent: -8.2
  },
  {
    crop: 'Potato',
    minPrice: 600,
    maxPrice: 900,
    modalPrice: 750,
    unit: 'Quintal',
    market: 'Agra',
    state: 'Uttar Pradesh',
    date: '2024-01-15',
    trend: 'stable',
    changePercent: 1.2
  },
  {
    crop: 'Sugarcane',
    minPrice: 280,
    maxPrice: 320,
    modalPrice: 300,
    unit: 'Quintal',
    market: 'Muzaffarnagar',
    state: 'Uttar Pradesh',
    date: '2024-01-15',
    trend: 'stable',
    changePercent: 0.8
  },
  {
    crop: 'Cotton',
    minPrice: 5800,
    maxPrice: 6200,
    modalPrice: 6000,
    unit: 'Quintal',
    market: 'Rajkot',
    state: 'Gujarat',
    date: '2024-01-15',
    trend: 'up',
    changePercent: 2.5
  },
  {
    crop: 'Soybean',
    minPrice: 4200,
    maxPrice: 4600,
    modalPrice: 4400,
    unit: 'Quintal',
    market: 'Indore',
    state: 'Madhya Pradesh',
    date: '2024-01-15',
    trend: 'down',
    changePercent: -1.8
  },
  {
    crop: 'Maize',
    minPrice: 1750,
    maxPrice: 1950,
    modalPrice: 1850,
    unit: 'Quintal',
    market: 'Davangere',
    state: 'Karnataka',
    date: '2024-01-15',
    trend: 'up',
    changePercent: 4.1
  },
  {
    crop: 'Chili',
    variety: 'Dry Red',
    minPrice: 8000,
    maxPrice: 12000,
    modalPrice: 10000,
    unit: 'Quintal',
    market: 'Guntur',
    state: 'Andhra Pradesh',
    date: '2024-01-15',
    trend: 'up',
    changePercent: 8.7
  }
];

function filterPrices(crop?: string, state?: string, market?: string): CropPrice[] {
  let filtered = [...MANDI_PRICES];
  
  if (crop) {
    filtered = filtered.filter(price => 
      price.crop.toLowerCase().includes(crop.toLowerCase())
    );
  }
  
  if (state) {
    filtered = filtered.filter(price => 
      price.state.toLowerCase().includes(state.toLowerCase())
    );
  }
  
  if (market) {
    filtered = filtered.filter(price => 
      price.market.toLowerCase().includes(market.toLowerCase())
    );
  }
  
  return filtered;
}

function generateMarketSummary(prices: CropPrice[]) {
  const totalCrops = prices.length;
  const avgPriceChange = prices.reduce((sum, price) => sum + price.changePercent, 0) / totalCrops;
  
  const topGainers = prices
    .filter(price => price.trend === 'up')
    .sort((a, b) => b.changePercent - a.changePercent)
    .slice(0, 3);
  
  const topLosers = prices
    .filter(price => price.trend === 'down')
    .sort((a, b) => a.changePercent - b.changePercent)
    .slice(0, 3);
  
  return {
    totalCrops,
    avgPriceChange: Math.round(avgPriceChange * 100) / 100,
    topGainers,
    topLosers
  };
}

function generateRecommendations(prices: CropPrice[]) {
  const selling: string[] = [];
  const buying: string[] = [];
  const holding: string[] = [];
  
  prices.forEach(price => {
    if (price.changePercent > 5) {
      selling.push(`${price.crop} - High demand, good selling opportunity`);
    } else if (price.changePercent < -5) {
      buying.push(`${price.crop} - Low prices, good buying opportunity`);
    } else {
      holding.push(`${price.crop} - Stable prices, monitor market trends`);
    }
  });
  
  return { selling, buying, holding };
}

export async function POST(request: NextRequest) {
  try {
    const body: MandiPricesRequest = await request.json();
    const { crop, state, market, language = 'en' } = body;

    const filteredPrices = filterPrices(crop, state, market);
    const marketSummary = generateMarketSummary(filteredPrices);
    const recommendations = generateRecommendations(filteredPrices);

    const response: MandiPricesResponse = {
      prices: filteredPrices,
      marketSummary,
      recommendations,
      lastUpdated: new Date().toISOString()
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Mandi prices API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch mandi prices' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const crop = searchParams.get('crop');
  const state = searchParams.get('state');
  
  const filteredPrices = filterPrices(crop || undefined, state || undefined);
  
  return NextResponse.json({
    status: 'Mandi Prices API Active',
    totalCrops: MANDI_PRICES.length,
    availableCrops: [...new Set(MANDI_PRICES.map(p => p.crop))],
    availableStates: [...new Set(MANDI_PRICES.map(p => p.state))],
    availableMarkets: [...new Set(MANDI_PRICES.map(p => p.market))],
    prices: filteredPrices.slice(0, 5), // Show first 5 for preview
    timestamp: new Date().toISOString()
  });
}