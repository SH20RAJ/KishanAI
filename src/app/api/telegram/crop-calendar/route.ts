import { NextRequest, NextResponse } from 'next/server';

interface CropCalendarRequest {
  cropType: string;
  location?: string;
  season?: 'kharif' | 'rabi' | 'zaid';
  farmSize?: string;
  language?: string;
}

interface CalendarActivity {
  week: number;
  month: string;
  activity: string;
  description: string;
  inputs?: string[];
  precautions?: string[];
  expectedOutcome?: string;
}

interface CropCalendarResponse {
  crop: string;
  season: string;
  location: string;
  totalDuration: string;
  calendar: CalendarActivity[];
  keyMilestones: {
    sowing: string;
    flowering: string;
    harvesting: string;
  };
  seasonalTips: string[];
  inputSchedule: {
    fertilizers: Array<{
      week: number;
      fertilizer: string;
      quantity: string;
      method: string;
    }>;
    pesticides: Array<{
      week: number;
      pesticide: string;
      purpose: string;
      dosage: string;
    }>;
  };
  expectedYield: {
    average: string;
    good: string;
    excellent: string;
  };
}

// Crop calendar database for major Indian crops
const CROP_CALENDARS = {
  'rice': {
    kharif: {
      duration: '120-150 days',
      activities: [
        {
          week: 1,
          month: 'June',
          activity: 'Land Preparation',
          description: 'Plough the field 2-3 times and level properly',
          inputs: ['Tractor/Bullocks', 'Plough', 'Leveler'],
          precautions: ['Ensure proper drainage', 'Remove weeds'],
          expectedOutcome: 'Well-prepared seedbed'
        },
        {
          week: 2,
          month: 'June',
          activity: 'Nursery Preparation',
          description: 'Prepare nursery beds and sow seeds',
          inputs: ['Quality seeds (25-30 kg/ha)', 'Nursery bed'],
          precautions: ['Use certified seeds', 'Treat seeds with fungicide'],
          expectedOutcome: 'Healthy seedlings'
        },
        {
          week: 4,
          month: 'July',
          activity: 'Transplanting',
          description: 'Transplant 25-30 day old seedlings',
          inputs: ['Healthy seedlings', 'Water'],
          precautions: ['Maintain 2-3 cm water level', 'Plant at proper spacing'],
          expectedOutcome: 'Established crop'
        },
        {
          week: 6,
          month: 'July',
          activity: 'First Fertilizer Application',
          description: 'Apply basal dose of fertilizers',
          inputs: ['Urea (50 kg/ha)', 'DAP (100 kg/ha)', 'MOP (50 kg/ha)'],
          precautions: ['Apply in standing water', 'Ensure uniform distribution'],
          expectedOutcome: 'Enhanced growth'
        },
        {
          week: 8,
          month: 'August',
          activity: 'Weeding and Top Dressing',
          description: 'Remove weeds and apply nitrogen',
          inputs: ['Urea (50 kg/ha)', 'Manual/Chemical weeding'],
          precautions: ['Drain water before weeding', 'Refill after 2-3 days'],
          expectedOutcome: 'Weed-free crop'
        },
        {
          week: 12,
          month: 'September',
          activity: 'Flowering Stage Management',
          description: 'Monitor for pests and diseases',
          inputs: ['Insecticides if needed', 'Fungicides if required'],
          precautions: ['Maintain water level', 'Monitor for brown plant hopper'],
          expectedOutcome: 'Healthy flowering'
        },
        {
          week: 16,
          month: 'October',
          activity: 'Grain Filling',
          description: 'Ensure adequate water and nutrition',
          inputs: ['Water management', 'Foliar spray if needed'],
          precautions: ['Avoid water stress', 'Monitor for diseases'],
          expectedOutcome: 'Good grain filling'
        },
        {
          week: 18,
          month: 'October',
          activity: 'Harvesting',
          description: 'Harvest when 80% grains are golden yellow',
          inputs: ['Harvesting equipment', 'Storage bags'],
          precautions: ['Harvest at right moisture', 'Dry properly'],
          expectedOutcome: 'Quality grain yield'
        }
      ],
      fertilizers: [
        { week: 6, fertilizer: 'DAP', quantity: '100 kg/ha', method: 'Broadcasting' },
        { week: 6, fertilizer: 'MOP', quantity: '50 kg/ha', method: 'Broadcasting' },
        { week: 6, fertilizer: 'Urea', quantity: '50 kg/ha', method: 'Broadcasting' },
        { week: 8, fertilizer: 'Urea', quantity: '50 kg/ha', method: 'Top dressing' },
        { week: 12, fertilizer: 'Urea', quantity: '25 kg/ha', method: 'Top dressing' }
      ],
      pesticides: [
        { week: 4, pesticide: 'Chlorpyrifos', purpose: 'Stem borer control', dosage: '2.5 ml/L' },
        { week: 8, pesticide: 'Cartap hydrochloride', purpose: 'Leaf folder control', dosage: '2 g/L' },
        { week: 12, pesticide: 'Imidacloprid', purpose: 'Brown plant hopper', dosage: '0.5 ml/L' }
      ],
      yield: { average: '40-50 quintals/ha', good: '50-60 quintals/ha', excellent: '60+ quintals/ha' }
    }
  },
  'wheat': {
    rabi: {
      duration: '120-140 days',
      activities: [
        {
          week: 1,
          month: 'November',
          activity: 'Land Preparation',
          description: 'Deep ploughing and field preparation',
          inputs: ['Tractor/Bullocks', 'Cultivator', 'Planker'],
          precautions: ['Ensure proper tilth', 'Remove crop residues'],
          expectedOutcome: 'Well-prepared seedbed'
        },
        {
          week: 2,
          month: 'November',
          activity: 'Sowing',
          description: 'Sow wheat seeds at optimal time',
          inputs: ['Quality seeds (100-125 kg/ha)', 'Seed drill'],
          precautions: ['Maintain proper depth (3-5 cm)', 'Ensure line sowing'],
          expectedOutcome: 'Uniform germination'
        },
        {
          week: 3,
          month: 'November',
          activity: 'First Irrigation',
          description: 'Light irrigation for germination',
          inputs: ['Water'],
          precautions: ['Avoid over-watering', 'Ensure uniform water distribution'],
          expectedOutcome: 'Good germination'
        },
        {
          week: 4,
          month: 'December',
          activity: 'Fertilizer Application',
          description: 'Apply basal fertilizers',
          inputs: ['Urea (65 kg/ha)', 'DAP (100 kg/ha)', 'MOP (50 kg/ha)'],
          precautions: ['Apply before irrigation', 'Mix well with soil'],
          expectedOutcome: 'Enhanced growth'
        },
        {
          week: 6,
          month: 'December',
          activity: 'First Weeding',
          description: 'Remove weeds and apply nitrogen',
          inputs: ['Urea (65 kg/ha)', 'Weeding tools'],
          precautions: ['Weed when soil is moist', 'Avoid root damage'],
          expectedOutcome: 'Weed-free crop'
        },
        {
          week: 8,
          month: 'January',
          activity: 'Crown Root Irrigation',
          description: 'Critical irrigation at crown root stage',
          inputs: ['Water'],
          precautions: ['Ensure adequate moisture', 'Avoid water logging'],
          expectedOutcome: 'Strong root system'
        },
        {
          week: 12,
          month: 'February',
          activity: 'Flowering Stage',
          description: 'Monitor and manage flowering',
          inputs: ['Water', 'Foliar spray if needed'],
          precautions: ['Maintain soil moisture', 'Monitor for diseases'],
          expectedOutcome: 'Good flowering'
        },
        {
          week: 16,
          month: 'March',
          activity: 'Grain Filling',
          description: 'Ensure proper grain development',
          inputs: ['Water management', 'Nutrient spray'],
          precautions: ['Avoid moisture stress', 'Monitor for pests'],
          expectedOutcome: 'Plump grains'
        },
        {
          week: 18,
          month: 'March',
          activity: 'Harvesting',
          description: 'Harvest at physiological maturity',
          inputs: ['Harvesting equipment', 'Storage facilities'],
          precautions: ['Harvest at right time', 'Proper drying'],
          expectedOutcome: 'Quality grain'
        }
      ],
      fertilizers: [
        { week: 4, fertilizer: 'DAP', quantity: '100 kg/ha', method: 'Broadcasting' },
        { week: 4, fertilizer: 'MOP', quantity: '50 kg/ha', method: 'Broadcasting' },
        { week: 4, fertilizer: 'Urea', quantity: '65 kg/ha', method: 'Broadcasting' },
        { week: 6, fertilizer: 'Urea', quantity: '65 kg/ha', method: 'Top dressing' }
      ],
      pesticides: [
        { week: 6, pesticide: '2,4-D', purpose: 'Broad leaf weed control', dosage: '1 kg/ha' },
        { week: 10, pesticide: 'Propiconazole', purpose: 'Rust control', dosage: '1 ml/L' },
        { week: 14, pesticide: 'Chlorpyrifos', purpose: 'Aphid control', dosage: '2 ml/L' }
      ],
      yield: { average: '35-45 quintals/ha', good: '45-55 quintals/ha', excellent: '55+ quintals/ha' }
    }
  },
  'tomato': {
    kharif: {
      duration: '90-120 days',
      activities: [
        {
          week: 1,
          month: 'June',
          activity: 'Nursery Preparation',
          description: 'Prepare nursery beds and sow seeds',
          inputs: ['Quality seeds (200-250 g/ha)', 'Nursery beds'],
          precautions: ['Use disease-free seeds', 'Proper drainage'],
          expectedOutcome: 'Healthy seedlings'
        },
        {
          week: 4,
          month: 'July',
          activity: 'Land Preparation',
          description: 'Prepare main field with raised beds',
          inputs: ['Organic manure (25 t/ha)', 'Raised bed former'],
          precautions: ['Ensure good drainage', 'Add organic matter'],
          expectedOutcome: 'Well-prepared beds'
        },
        {
          week: 5,
          month: 'July',
          activity: 'Transplanting',
          description: 'Transplant 4-5 week old seedlings',
          inputs: ['Healthy seedlings', 'Water'],
          precautions: ['Transplant in evening', 'Maintain spacing 60x45 cm'],
          expectedOutcome: 'Established plants'
        },
        {
          week: 6,
          month: 'July',
          activity: 'First Fertilizer Application',
          description: 'Apply basal fertilizers',
          inputs: ['NPK (19:19:19) 200 kg/ha', 'Organic manure'],
          precautions: ['Apply near root zone', 'Water immediately'],
          expectedOutcome: 'Enhanced growth'
        },
        {
          week: 8,
          month: 'August',
          activity: 'Staking and Pruning',
          description: 'Provide support and remove suckers',
          inputs: ['Bamboo stakes', 'Pruning tools'],
          precautions: ['Stake before flowering', 'Remove lower leaves'],
          expectedOutcome: 'Better plant structure'
        },
        {
          week: 10,
          month: 'August',
          activity: 'Flowering Management',
          description: 'Monitor flowering and fruit set',
          inputs: ['Calcium spray', 'Boron spray'],
          precautions: ['Ensure adequate moisture', 'Monitor for pests'],
          expectedOutcome: 'Good fruit set'
        },
        {
          week: 12,
          month: 'September',
          activity: 'Fruit Development',
          description: 'Support fruit development',
          inputs: ['Potassium fertilizer', 'Calcium spray'],
          precautions: ['Maintain consistent moisture', 'Monitor diseases'],
          expectedOutcome: 'Quality fruit development'
        },
        {
          week: 14,
          month: 'September',
          activity: 'First Harvest',
          description: 'Begin harvesting mature fruits',
          inputs: ['Harvesting containers', 'Grading materials'],
          precautions: ['Harvest at right maturity', 'Handle carefully'],
          expectedOutcome: 'Quality produce'
        }
      ],
      fertilizers: [
        { week: 6, fertilizer: 'NPK (19:19:19)', quantity: '200 kg/ha', method: 'Broadcasting' },
        { week: 8, fertilizer: 'Urea', quantity: '100 kg/ha', method: 'Side dressing' },
        { week: 10, fertilizer: 'MOP', quantity: '100 kg/ha', method: 'Side dressing' },
        { week: 12, fertilizer: 'NPK (00:52:34)', quantity: '50 kg/ha', method: 'Fertigation' }
      ],
      pesticides: [
        { week: 6, pesticide: 'Imidacloprid', purpose: 'Whitefly control', dosage: '0.5 ml/L' },
        { week: 8, pesticide: 'Mancozeb', purpose: 'Early blight control', dosage: '2.5 g/L' },
        { week: 10, pesticide: 'Bacillus thuringiensis', purpose: 'Fruit borer control', dosage: '2 g/L' }
      ],
      yield: { average: '400-500 quintals/ha', good: '500-700 quintals/ha', excellent: '700+ quintals/ha' }
    }
  }
};

function getCropCalendar(crop: string, season: string): any {
  const cropData = CROP_CALENDARS[crop.toLowerCase() as keyof typeof CROP_CALENDARS];
  if (!cropData) return null;
  
  const seasonData = cropData[season as keyof typeof cropData];
  return seasonData || null;
}

function generateSeasonalTips(crop: string, season: string): string[] {
  const tips = {
    'rice_kharif': [
      'Monitor water levels regularly during monsoon',
      'Ensure proper drainage to prevent waterlogging',
      'Watch for pest outbreaks during humid conditions',
      'Apply fertilizers in split doses for better efficiency'
    ],
    'wheat_rabi': [
      'Sow at optimal time for better yield',
      'Provide timely irrigation at critical stages',
      'Monitor for rust diseases in humid weather',
      'Harvest at right moisture content for quality'
    ],
    'tomato_kharif': [
      'Provide good drainage during heavy rains',
      'Use disease-resistant varieties',
      'Monitor for viral diseases spread by whiteflies',
      'Maintain consistent soil moisture'
    ]
  };
  
  const key = `${crop}_${season}` as keyof typeof tips;
  return tips[key] || [
    'Follow recommended practices for your region',
    'Monitor weather conditions regularly',
    'Use quality inputs for better results',
    'Consult local agriculture experts'
  ];
}

export async function POST(request: NextRequest) {
  try {
    const body: CropCalendarRequest = await request.json();
    const { cropType, location = 'General', season = 'kharif', farmSize, language = 'en' } = body;

    if (!cropType) {
      return NextResponse.json(
        { error: 'Crop type is required' },
        { status: 400 }
      );
    }

    const calendarData = getCropCalendar(cropType, season);
    
    if (!calendarData) {
      return NextResponse.json(
        { error: 'Calendar not available for this crop and season' },
        { status: 404 }
      );
    }

    const seasonalTips = generateSeasonalTips(cropType, season);
    
    // Extract key milestones
    const sowingActivity = calendarData.activities.find((activity: any) => 
      activity.activity.toLowerCase().includes('sow') || 
      activity.activity.toLowerCase().includes('transplant')
    );
    
    const floweringActivity = calendarData.activities.find((activity: any) => 
      activity.activity.toLowerCase().includes('flower')
    );
    
    const harvestingActivity = calendarData.activities.find((activity: any) => 
      activity.activity.toLowerCase().includes('harvest')
    );

    const response: CropCalendarResponse = {
      crop: cropType,
      season: season,
      location: location,
      totalDuration: calendarData.duration,
      calendar: calendarData.activities,
      keyMilestones: {
        sowing: sowingActivity ? `Week ${sowingActivity.week} - ${sowingActivity.month}` : 'Not specified',
        flowering: floweringActivity ? `Week ${floweringActivity.week} - ${floweringActivity.month}` : 'Not specified',
        harvesting: harvestingActivity ? `Week ${harvestingActivity.week} - ${harvestingActivity.month}` : 'Not specified'
      },
      seasonalTips,
      inputSchedule: {
        fertilizers: calendarData.fertilizers,
        pesticides: calendarData.pesticides
      },
      expectedYield: calendarData.yield
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Crop calendar API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate crop calendar' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const crop = searchParams.get('crop');
  
  const availableCrops = Object.keys(CROP_CALENDARS);
  const availableSeasons = ['kharif', 'rabi', 'zaid'];
  
  return NextResponse.json({
    status: 'Crop Calendar API Active',
    availableCrops,
    availableSeasons,
    sampleCalendar: crop && CROP_CALENDARS[crop as keyof typeof CROP_CALENDARS] 
      ? getCropCalendar(crop, 'kharif') 
      : null,
    timestamp: new Date().toISOString()
  });
}