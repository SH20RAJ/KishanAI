import { NextRequest, NextResponse } from 'next/server';

interface SchemeRequest {
  farmSize?: string;
  cropType?: string;
  state?: string;
  category?: string;
  language?: string;
}

interface Scheme {
  id: string;
  name: string;
  nameHindi?: string;
  description: string;
  benefits: string[];
  eligibility: string[];
  documents: string[];
  applicationProcess: string[];
  deadline?: string;
  budget: string;
  ministry: string;
  website: string;
  helpline: string;
  category: 'subsidy' | 'insurance' | 'credit' | 'training' | 'equipment' | 'income_support';
  targetGroup: string[];
  states: string[];
}

interface SchemesResponse {
  schemes: Scheme[];
  eligibleSchemes: Scheme[];
  recommendations: {
    immediate: Scheme[];
    seasonal: Scheme[];
    longTerm: Scheme[];
  };
  applicationTips: string[];
  commonDocuments: string[];
}

// Government schemes database
const GOVERNMENT_SCHEMES: Scheme[] = [
  {
    id: 'pm-kisan',
    name: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
    nameHindi: 'प्रधानमंत्री किसान सम्मान निधि',
    description: 'Direct income support of ₹6,000 per year to all landholding farmers',
    benefits: [
      '₹6,000 per year in 3 installments of ₹2,000',
      'Direct bank transfer',
      'No paperwork after registration'
    ],
    eligibility: [
      'All landholding farmers',
      'Valid Aadhaar card',
      'Bank account linked to Aadhaar',
      'Land ownership documents'
    ],
    documents: [
      'Aadhaar card',
      'Bank account details',
      'Land ownership documents',
      'Mobile number'
    ],
    applicationProcess: [
      'Visit pmkisan.gov.in',
      'Click on "New Farmer Registration"',
      'Fill required details',
      'Upload documents',
      'Submit application'
    ],
    budget: '₹75,000 crores annually',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    website: 'https://pmkisan.gov.in',
    helpline: '155261',
    category: 'income_support',
    targetGroup: ['Small farmers', 'Marginal farmers', 'Large farmers'],
    states: ['All India']
  },
  {
    id: 'pmfby',
    name: 'PMFBY (Pradhan Mantri Fasal Bima Yojana)',
    nameHindi: 'प्रधानमंत्री फसल बीमा योजना',
    description: 'Crop insurance scheme providing financial support to farmers in case of crop failure',
    benefits: [
      'Premium: 2% for Kharif, 1.5% for Rabi crops',
      'Coverage for natural calamities',
      'Post-harvest losses coverage',
      'Prevented sowing coverage'
    ],
    eligibility: [
      'All farmers (loanee and non-loanee)',
      'Sharecroppers and tenant farmers',
      'Must have insurable interest in crop'
    ],
    documents: [
      'Aadhaar card',
      'Bank account details',
      'Land records',
      'Sowing certificate',
      'Premium payment receipt'
    ],
    applicationProcess: [
      'Visit nearest bank or CSC',
      'Fill application form',
      'Pay premium amount',
      'Get insurance certificate',
      'Report crop loss within 72 hours'
    ],
    budget: '₹15,695 crores (2023-24)',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    website: 'https://pmfby.gov.in',
    helpline: '14447',
    category: 'insurance',
    targetGroup: ['All farmers'],
    states: ['All India']
  },
  {
    id: 'kcc',
    name: 'KCC (Kisan Credit Card)',
    nameHindi: 'किसान क्रेडिट कार्ड',
    description: 'Credit facility for farmers to meet their agricultural and allied activities',
    benefits: [
      'Credit limit up to ₹3 lakh without collateral',
      'Interest rate: 7% per annum',
      '3% interest subvention',
      'Flexible repayment'
    ],
    eligibility: [
      'Individual/joint farmers',
      'Tenant farmers, sharecroppers',
      'Self Help Group members',
      'Age: 18-75 years'
    ],
    documents: [
      'Application form',
      'Identity proof',
      'Address proof',
      'Land documents',
      'Income proof'
    ],
    applicationProcess: [
      'Visit nearest bank branch',
      'Fill KCC application form',
      'Submit required documents',
      'Bank verification',
      'Card issuance'
    ],
    budget: 'No specific budget limit',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    website: 'https://www.nabard.org/kcc.aspx',
    helpline: '1800-180-1551',
    category: 'credit',
    targetGroup: ['All farmers'],
    states: ['All India']
  },
  {
    id: 'smam',
    name: 'SMAM (Sub-Mission on Agricultural Mechanization)',
    nameHindi: 'कृषि यंत्रीकरण पर उप-मिशन',
    description: 'Financial assistance for purchase of agricultural machinery and equipment',
    benefits: [
      '40-50% subsidy on agricultural machinery',
      'Custom Hiring Centers support',
      'Hi-tech hubs establishment',
      'Training and demonstration'
    ],
    eligibility: [
      'Individual farmers',
      'Farmer groups/cooperatives',
      'Entrepreneurs for CHCs',
      'Priority to SC/ST/Women farmers'
    ],
    documents: [
      'Application form',
      'Aadhaar card',
      'Bank account details',
      'Land documents',
      'Quotation from dealer'
    ],
    applicationProcess: [
      'Apply through state agriculture department',
      'Online application on DBT portal',
      'Document verification',
      'Approval and subsidy release',
      'Purchase machinery'
    ],
    budget: '₹3,000 crores (2021-26)',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    website: 'https://agrimachinery.nic.in',
    helpline: '011-23382012',
    category: 'equipment',
    targetGroup: ['Small farmers', 'Marginal farmers', 'Women farmers'],
    states: ['All India']
  },
  {
    id: 'pkvy',
    name: 'PKVY (Paramparagat Krishi Vikas Yojana)',
    nameHindi: 'परम्परागत कृषि विकास योजना',
    description: 'Promotion of organic farming through cluster approach',
    benefits: [
      '₹50,000 per hectare for 3 years',
      'Organic certification support',
      'Market linkage assistance',
      'Training and capacity building'
    ],
    eligibility: [
      'Farmers in clusters of 50 hectares',
      'Minimum 20 farmers per cluster',
      'Commitment to organic farming',
      'No use of chemical inputs'
    ],
    documents: [
      'Application form',
      'Land documents',
      'Aadhaar card',
      'Bank account details',
      'Group formation certificate'
    ],
    applicationProcess: [
      'Form farmer groups',
      'Apply through state agriculture department',
      'Cluster identification and approval',
      'Training and input distribution',
      'Certification process'
    ],
    budget: '₹1,197 crores (2021-26)',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    website: 'https://pgsindia-ncof.gov.in',
    helpline: '011-23388166',
    category: 'subsidy',
    targetGroup: ['Organic farmers', 'Farmer groups'],
    states: ['All India']
  }
];

function filterSchemes(
  farmSize?: string,
  cropType?: string,
  state?: string,
  category?: string
): Scheme[] {
  let filtered = [...GOVERNMENT_SCHEMES];

  if (category) {
    filtered = filtered.filter(scheme => scheme.category === category);
  }

  if (farmSize) {
    const sizeCategory = farmSize.toLowerCase();
    if (sizeCategory.includes('small') || sizeCategory.includes('marginal')) {
      filtered = filtered.filter(scheme => 
        scheme.targetGroup.some(group => 
          group.toLowerCase().includes('small') || 
          group.toLowerCase().includes('marginal')
        )
      );
    }
  }

  if (state && state !== 'All India') {
    filtered = filtered.filter(scheme => 
      scheme.states.includes('All India') || 
      scheme.states.includes(state)
    );
  }

  return filtered;
}

function generateRecommendations(schemes: Scheme[]): any {
  const immediate = schemes.filter(scheme => 
    scheme.category === 'income_support' || scheme.category === 'credit'
  );

  const seasonal = schemes.filter(scheme => 
    scheme.category === 'insurance' || scheme.category === 'subsidy'
  );

  const longTerm = schemes.filter(scheme => 
    scheme.category === 'equipment' || scheme.category === 'training'
  );

  return { immediate, seasonal, longTerm };
}

function getApplicationTips(): string[] {
  return [
    'Keep all documents ready before applying',
    'Apply online whenever possible for faster processing',
    'Follow up regularly on application status',
    'Contact helpline numbers for assistance',
    'Join farmer groups for better benefits',
    'Read scheme guidelines carefully',
    'Maintain proper records of farming activities',
    'Get documents verified from authorized officials'
  ];
}

function getCommonDocuments(): string[] {
  return [
    'Aadhaar Card',
    'Bank Account Details (Passbook)',
    'Land Ownership Documents',
    'Income Certificate',
    'Caste Certificate (if applicable)',
    'Mobile Number (linked to Aadhaar)',
    'Passport Size Photographs',
    'Address Proof'
  ];
}

export async function POST(request: NextRequest) {
  try {
    const body: SchemeRequest = await request.json();
    const { farmSize, cropType, state, category, language = 'en' } = body;

    const allSchemes = GOVERNMENT_SCHEMES;
    const filteredSchemes = filterSchemes(farmSize, cropType, state, category);
    const recommendations = generateRecommendations(filteredSchemes);
    const applicationTips = getApplicationTips();
    const commonDocuments = getCommonDocuments();

    const response: SchemesResponse = {
      schemes: allSchemes,
      eligibleSchemes: filteredSchemes,
      recommendations,
      applicationTips,
      commonDocuments
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Government schemes API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch government schemes' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  
  const schemes = category 
    ? GOVERNMENT_SCHEMES.filter(scheme => scheme.category === category)
    : GOVERNMENT_SCHEMES;

  return NextResponse.json({
    status: 'Government Schemes API Active',
    totalSchemes: GOVERNMENT_SCHEMES.length,
    categories: ['subsidy', 'insurance', 'credit', 'training', 'equipment', 'income_support'],
    schemes: schemes.map(scheme => ({
      id: scheme.id,
      name: scheme.name,
      category: scheme.category,
      ministry: scheme.ministry
    })),
    timestamp: new Date().toISOString()
  });
}