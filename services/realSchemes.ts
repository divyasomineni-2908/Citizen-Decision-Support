import { Scheme } from '../types';
import { ADDITIONAL_SCHEMES } from './additionalSchemes';
import { MORE_SCHEMES } from './moreSchemes';

// Helper function to create myScheme.gov.in search links
const MYSCHEME_BASE_URL = 'https://www.myscheme.gov.in/search';

// Real Indian Government Schemes Database
export const REAL_GOVT_SCHEMES: Scheme[] = [
  // Ministry of Agriculture
  {
    id: 'pm-kisan',
    title: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    department: 'Ministry of Agriculture & Farmers Welfare',
    description: 'Financial support to all landholding farmer families to supplement their income to meet their cultivation and household needs.',
    category: 'Agriculture',
    benefits: [
      '₹6,000 per year in three equal installments (₹2,000 each)',
      'Direct benefit transfer to bank accounts',
      'Coverage for all landholding farmers',
      'No age or income restrictions'
    ],
    eligibility: {
      maxIncome: 200000,
      residence: 'Rural',
    },
    applicationProcess: [
      'Visit the official PM-KISAN website (pmkisan.gov.in)',
      'Click on "New Farmer Registration"',
      'Enter your Aadhaar number and land details',
      'Upload land documents and bank passbook',
      'Submit and note the reference number'
    ],
    applicationLink: 'https://www.myscheme.gov.in/search'
  },

  // Ministry of Health
  {
    id: 'pm-jay',
    title: 'Pradhan Mantri Jan Arogya Yojana (PM-JAY) - Ayushman Bharat',
    department: 'Ministry of Health and Family Welfare',
    description: 'The largest health assurance scheme providing health cover of ₹5 lakhs per family per year for secondary and tertiary care hospitalization.',
    category: 'Healthcare',
    benefits: [
      '₹5 lakhs health cover per family per year',
      'Cashless access to participating hospitals',
      '3 days pre-hospitalization coverage',
      '15 days post-hospitalization coverage',
      'No daily limit on beneficiaries'
    ],
    eligibility: {
      category: 'EWS',
    },
    applicationProcess: [
      'Check eligibility through SECC database',
      'Register on mera.pmjay.gov.in',
      'Get your e-card generated',
      'Use at any empaneled hospital',
      'Enjoy cashless benefits'
    ],
    applicationLink: 'https://www.pmjay.gov.in/'
  },

  // Ministry of Social Justice
  {
    id: 'indira-awas-yojana',
    title: 'Pradhan Mantri Awas Yojana (PMAY)',
    department: 'Ministry of Housing and Urban Affairs',
    description: 'Affordable housing scheme to ensure adequate housing for all economically weaker sections and low-income groups.',
    category: 'Housing',
    benefits: [
      '₹1-2.50 lakhs subsidy on home loans',
      'Central Assistance up to ₹2.30 lakhs per unit',
      'Interest subsidy of up to 6.5%',
      'Self-construction support with technical assistance',
      'Priority to women and SC/ST families'
    ],
    eligibility: {
      maxIncome: 300000,
      category: 'EWS',
    },
    applicationProcess: [
      'Check eligibility and apply online',
      'Submit required documents',
      'Wait for verification',
      'Get sanction letter',
      'Start construction'
    ],
    applicationLink: 'https://pmayuclap.gov.in/'
  },

  // Ministry of Education
  {
    id: 'nsp',
    title: 'National Scholarship Portal (NSP)',
    department: 'Ministry of Education',
    description: 'Portal to apply for various scholarships provided by central and state governments and private institutions.',
    category: 'Education',
    benefits: [
      'Merit-based scholarships',
      'Merit-cum-means based scholarships',
      'Caste-based scholarships',
      'Disability scholarships',
      'Minority scholarships',
      'Coverage from school to PhD'
    ],
    eligibility: {
      isForStudents: true,
      maxIncome: 800000,
    },
    applicationProcess: [
      'Register on scholarships.gov.in',
      'Complete your profile',
      'Apply for eligible schemes',
      'Upload required documents',
      'Track application status'
    ],
    applicationLink: 'https://scholarships.gov.in/'
  },

  // Ministry of Labour
  {
    id: 'pm-ssy',
    title: 'Pradhan Mantri Shram Yogi Maan-dhan Scheme (PM-SYM)',
    department: 'Ministry of Labour and Employment',
    description: 'Pension scheme for workers in the unorganized sector, providing monthly pension after retirement.',
    category: 'Social Security',
    benefits: [
      'Monthly pension of ₹3,000 after age 60',
      'Coverage for workers 18-40 years',
      'Low contribution (₹55-200 per month)',
      'Subsidized contribution for eligible workers',
      'Family pension for dependents'
    ],
    eligibility: {
      minAge: 18,
      maxAge: 40,
    },
    applicationProcess: [
      'Visit the nearest CSC center',
      'Register with Aadhaar and SECC database',
      'Pay the required contribution',
      'Get registration confirmation',
      'Receive benefits at retirement'
    ],
    applicationLink: 'https://maandhan.in/'
  },

  // Ministry of MSME
  {
    id: 'pmegp',
    title: 'Prime Minister\'s Employment Generation Programme (PMEGP)',
    department: 'Ministry of Micro, Small and Medium Enterprises',
    description: 'Self-employment scheme to generate employment through establishment of micro-enterprises.',
    category: 'Self-Employment',
    benefits: [
      'Subsidy up to ₹10-15 lakhs',
      'Government support for setting up business',
      'Skill training provided',
      'Bank loans facilitated',
      'After-care support'
    ],
    eligibility: {
      minAge: 18,
      maxIncome: 500000,
    },
    applicationProcess: [
      'Apply through KVIC/KVIB',
      'Submit project report',
      'Verification by district level committee',
      'Loan processing',
      'Subsidy disbursement'
    ],
    applicationLink: 'https://pmegp.gov.in/'
  },

  // Ministry of Women and Child Development
  {
    id: 'sukanya-samridhi',
    title: 'Sukanya Samriddhi Account Scheme',
    department: 'Ministry of Women and Child Development',
    description: 'Savings scheme for the girl child to ensure her education and marriage expenses.',
    category: 'Social Security',
    benefits: [
      'High interest rate (7.6% p.a.)',
      'Tax benefits under 80C',
      'Flexible withdrawal options',
      'Government-backed security',
      'Minimum investment ₹1,000'
    ],
    eligibility: {
      gender: 'Female',
      isForStudents: true,
    },
    applicationProcess: [
      'Visit any post office or bank',
      'Open an SSA account',
      'Deposit minimum ₹1,000 annually',
      'Account matures at age 21',
      'Withdraw for marriage or education'
    ],
    applicationLink: 'https://www.indiapost.gov.in/'
  },

  // Ministry of Power
  {
    id: 'saubhagya',
    title: 'Pradhan Mantri Sahaj Bijli Har Ghar Yojana (SAUBHAGYA)',
    department: 'Ministry of Power',
    description: 'Scheme for universal household electrification providing electricity connections to all unelectrified households.',
    category: 'Infrastructure',
    benefits: [
      'Free electricity connections for BPL families',
      '10% subsidy on connection for APL families',
      'Installation of meters and safety gear',
      'Grid connection in rural areas',
      'Energy efficiency promotion'
    ],
    eligibility: {
      residence: 'Rural',
    },
    applicationProcess: [
      'Contact local electricity distribution company',
      'Verify eligibility through BPL list',
      'Apply for connection',
      'Technical survey conducted',
      'Connection provided'
    ],
    applicationLink: 'https://saubhagya.gov.in/'
  },

  // Ministry of Skill Development
  {
    id: 'pmkvy',
    title: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY)',
    department: 'Ministry of Skill Development and Entrepreneurship',
    description: 'Skill development scheme providing free training and certification to workers.',
    category: 'Skill Development',
    benefits: [
      'Free skill training to youth',
      'Industry-relevant courses',
      'National certification',
      'Placement assistance',
      'Skill development grants'
    ],
    eligibility: {
      minAge: 15,
      isForStudents: true,
    },
    applicationProcess: [
      'Check available courses at PMKVY portal',
      'Register at nearest training partner',
      'Undergo training',
      'Pass assessment',
      'Receive certification'
    ],
    applicationLink: 'https://www.pmkvyofficial.org/'
  },

  // Ministry of Social Justice
  {
    id: 'bhamashah',
    title: 'Bhamashah Card Scheme (Rajasthan)',
    department: 'Ministry of Social Justice',
    description: 'Social security and welfare scheme for women and vulnerable groups in Rajasthan.',
    category: 'Social Security',
    benefits: [
      'Maternity benefit ₹2,100',
      'Child birth allowance ₹100',
      'Accident insurance coverage',
      'Pension for widows',
      'Educational grants',
      'Health insurance benefits'
    ],
    eligibility: {
      state: 'Rajasthan',
      gender: 'Female',
      maxIncome: 250000,
    },
    applicationProcess: [
      'Visit nearest Bhamashah enrollment center',
      'Provide required documents',
      'Get Bhamashah card',
      'Verify benefits eligibility',
      'Claim benefits as needed'
    ],
    applicationLink: 'https://bhamashah.rajasthan.gov.in/'
  },

  // Ministry of Consumer Affairs
  {
    id: 'pds',
    title: 'Public Distribution System (PDS)',
    department: 'Ministry of Consumer Affairs, Food & Public Distribution',
    description: 'Universal food security scheme providing subsidized food grains to economically weaker sections.',
    category: 'Food Security',
    benefits: [
      'Subsidized rice and wheat',
      'Fixed price ceiling',
      'Universal coverage in some states',
      'Targeted coverage for BPL families',
      'Quarterly grain allocation'
    ],
    eligibility: {
      category: 'General',
    },
    applicationProcess: [
      'Get ration card (APL/BPL)',
      'Register at PDS shop',
      'Provide regular identity proof',
      'Get ration allotments',
      'Purchase from licensed retailers'
    ],
    applicationLink: 'https://pds.gov.in/'
  },

  // Ministry of Jal Shakti
  {
    id: 'jal-jeevan-mission',
    title: 'Jal Jeevan Mission',
    department: 'Ministry of Jal Shakti',
    description: 'National water supply program to ensure safe and adequate drinking water to all households.',
    category: 'Water Supply',
    benefits: [
      'In-house water connections',
      'Quality drinking water supply',
      ' 24x7 water availability',
      'Proper sanitation facilities',
      'Water testing and monitoring'
    ],
    eligibility: {
      residence: 'Rural',
    },
    applicationProcess: [
      'Check village coverage status',
      'Register household details',
      'Installation survey',
      'Connection provided',
      'Billing and maintenance'
    ],
    applicationLink: 'https://jaljeevanmission.gov.in/'
  },

  // Ministry of Rural Development
  {
    id: 'mnrega',
    title: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)',
    department: 'Ministry of Rural Development',
    description: 'Employment guarantee scheme providing 100 days of guaranteed paid employment to rural workers.',
    category: 'Employment',
    benefits: [
      '₹202 per day wage (2024)',
      '100 days of employment per year',
      'Work near home',
      'Social security benefits',
      'Employment guarantee'
    ],
    eligibility: {
      residence: 'Rural',
      minAge: 18,
    },
    applicationProcess: [
      'Register at village council (Gram Panchayat)',
      'Get MGNREGA job card',
      'Demand work in writing',
      'Work allocated within 15 days',
      'Get paid weekly'
    ],
    applicationLink: 'https://nrega.nic.in/'
  },

  // Ministry of Social Justice - Scholarships
  {
    id: 'post-matric-scholarship',
    title: 'Post Matric Scholarship for SC/ST',
    department: 'Ministry of Social Justice and Empowerment',
    description: 'Scholarship for SC/ST students pursuing post-matriculation education.',
    category: 'Education',
    benefits: [
      'Tuition fee reimbursement',
      'Maintenance allowance',
      'Book grant',
      'Contingency grant',
      'Coverage for various courses'
    ],
    eligibility: {
      isForStudents: true,
      category: 'SC',
      maxIncome: 250000,
    },
    applicationProcess: [
      'Apply through PFMS portal',
      'Submit educational institution certificate',
      'Provide caste certificate',
      'Income verification',
      'Scholarship disbursement'
    ],
    applicationLink: 'https://scholarships.gov.in/'
  },

  // Ministry of Rural Development - Housing
  {
    id: 'pm-awas-gramin',
    title: 'Pradhan Mantri Awas Yojana - Gramin',
    department: 'Ministry of Rural Development',
    description: 'Housing scheme for rural poor providing construction assistance.',
    category: 'Housing',
    benefits: [
      '₹1.20-1.30 lakhs construction assistance',
      'Materials support and technical guidance',
      'Labor component',
      'Convergence benefits',
      'Loan linkage facilitation'
    ],
    eligibility: {
      residence: 'Rural',
      category: 'General',
    },
    applicationProcess: [
      'Verify eligibility through SECC data',
      'Apply through Gram Panchayat',
      'Verify housing status',
      'Get sanctioned',
      'Receive financial assistance'
    ],
    applicationLink: 'https://pmayg.nic.in/'
  },

  // Ministry of Education - Girl Child Welfare
  {
    id: 'beti-bachao-padhai',
    title: 'Beti Bachao, Beti Padhao Scheme',
    department: 'Ministry of Education & Women & Child Development',
    description: 'Multifaceted scheme to improve sex ratio and ensure education of girl child.',
    category: 'Education',
    benefits: [
      'Girl child education promotion',
      'Community awareness programs',
      'Skill development for girls',
      'Educational scholarships',
      'Protection and safety measures'
    ],
    eligibility: {
      gender: 'Female',
      isForStudents: true,
    },
    applicationProcess: [
      'Enroll in government school',
      'Participate in awareness programs',
      'Apply for scholarships',
      'Attend skill training',
      'Get certification'
    ],
    applicationLink: 'https://www.betibachaobetipadhao.gov.in/'
  },

  // Ministry of Labour - Accident Insurance
  {
    id: 'atal-pension-yojana',
    title: 'Atal Pension Yojana (APY)',
    department: 'Ministry of Labour and Employment',
    description: 'Unorganized sector workers pension scheme ensuring guaranteed monthly pension.',
    category: 'Social Security',
    benefits: [
      'Guaranteed monthly pension ₹1,000-5,000',
      'Spousal pension after death',
      'Family pension option',
      'Government contribution up to 50%',
      'Portable across India'
    ],
    eligibility: {
      minAge: 18,
      maxAge: 40,
    },
    applicationProcess: [
      'Register at any bank/CSC',
      'Choose pension amount',
      'Make monthly contributions',
      'Receive pension after 60 years',
      'Pension payable to spouse after death'
    ],
    applicationLink: 'https://www.atalpensionyojana.gov.in/'
  },

  // Ministry of MSME - Business Support
  {
    id: 'pm-mudra-yojana',
    title: 'Pradhan Mantri MUDRA Yojana',
    department: 'Ministry of Micro, Small and Medium Enterprises',
    description: 'Scheme providing collateral-free business loans to first-time entrepreneurs.',
    category: 'Self-Employment',
    benefits: [
      'Loans up to ₹10 lakhs',
      'Collateral-free lending',
      'Low interest rates',
      'Flexible repayment',
      'Government guarantee coverage'
    ],
    eligibility: {
      minAge: 18,
    },
    applicationProcess: [
      'Prepare business plan',
      'Approach MUDRA-lending institution',
      'Submit application',
      'Loan processing',
      'Quick disbursement'
    ],
    applicationLink: 'https://www.mudra.org.in/'
  },

  // Ministry of Health - Disability
  {
    id: 'rpwd-allowance',
    title: 'Rights of Persons with Disabilities (RPwD) - Disability Allowance',
    department: 'Ministry of Social Justice',
    description: 'Monthly allowance for persons with disabilities.',
    category: 'Social Security',
    benefits: [
      '₹500-1,500 monthly allowance',
      'Varying amounts based on disability type',
      'Healthcare support',
      'Rehabilitation services',
      'Vocational training'
    ],
    eligibility: {
      isForPwD: true,
    },
    applicationProcess: [
      'Get disability certificate from medical board',
      'Apply at district disability office',
      'Verification of eligibility',
      'Approval and registration',
      'Monthly allowance disbursement'
    ],
    applicationLink: 'https://disabilityaffairs.gov.in/'
  },

  // Ministry of Petroleum - Cooking Gas
  {
    id: 'ujjwala-yojana',
    title: 'Pradhan Mantri Ujjwala Yojana',
    department: 'Ministry of Petroleum & Natural Gas',
    description: 'LPG connection scheme for BPL and SECC households.',
    category: 'Infrastructure',
    benefits: [
      'Free LPG connection',
      'Free stove and regulator',
      'First refill partially subsidized',
      'No safety examination fee',
      'Coverage for 8+ crore households'
    ],
    eligibility: {
      category: 'EWS',
    },
    applicationProcess: [
      'Verify eligibility through government database',
      'Apply at Indane/Bharat Gas office',
      'Submit required documents',
      'Connection installed',
      'Start using LPG'
    ],
    applicationLink: 'https://pmujjwalayojana.com/'
  },

  // Ministry of Telecom
  {
    id: 'bharat-net',
    title: 'BharatNet Phase II - High-Speed Internet',
    department: 'Ministry of Communications',
    description: 'High-speed internet connectivity to villages and rural areas.',
    category: 'Infrastructure',
    benefits: [
      '100 Mbps fiber optic connectivity',
      'Affordable broadband access',
      'Village-level infrastructure',
      'Digital literacy support',
      'E-services access'
    ],
    eligibility: {
      residence: 'Rural',
    },
    applicationProcess: [
      'Check village coverage status',
      'Register for connection',
      'Installation completed',
      'Pay subscription fee',
      'Enjoy high-speed internet'
    ],
    applicationLink: 'https://bharatnet.nrlm.in/'
  },

  // Ministry of Road Transport - Safety
  {
    id: 'pradhan-mantri-suraksha-bima',
    title: 'Pradhan Mantri Suraksha Bima Yojana',
    department: 'Ministry of Labour',
    description: 'Accident insurance scheme for workers and common people.',
    category: 'Insurance',
    benefits: [
      '₹2 lakhs accidental death coverage',
      '₹1 lakh permanent disability coverage',
      'Partial disability benefits',
      'Very low premium (₹12 annually)',
      'Automatic enrollment through bank'
    ],
    eligibility: {
      minAge: 18,
      maxAge: 70,
    },
    applicationProcess: [
      'Link Aadhaar with bank account',
      'Premium auto-deducted',
      'Coverage effective',
      'Register claim at bank',
      'Claim settlement'
    ],
    applicationLink: 'https://www.pmsby.gov.in/'
  },

  // Ministry of External Affairs - Diaspora
  {
    id: 'knowledge-workers-visa',
    title: 'Overseas Citizenship of India (OCI)',
    department: 'Ministry of External Affairs',
    description: 'Visa status for persons of Indian origin and their descendants.',
    category: 'Travel',
    benefits: [
      'Lifelong visa to India',
      'Multi-entry unlimited',
      'Exemption from visa registration',
      'Unrestricted travel',
      'Property ownership rights'
    ],
    eligibility: {
      // Requires Indian origin
    },
    applicationProcess: [
      'Apply online on MEA portal',
      'Submit required documents',
      'Biometric appointment',
      'Interview (if required)',
      'OCI certificate issuance'
    ],
    applicationLink: 'https://ociservices.mea.gov.in/'
  },

  // Ministry of Women & Child Development
  {
    id: 'mission-shakti',
    title: 'Mission Shakti',
    department: 'Ministry of Women & Child Development',
    description: 'Comprehensive scheme for safety, security and empowerment of women.',
    category: 'Social Security',
    benefits: [
      'One Stop Centre for women in distress',
      'Women Helpline (181)',
      'Beti Bachao Beti Padhao',
      'Skills training and employment',
      'Legal aid and counselling'
    ],
    eligibility: {
      gender: 'Female',
    },
    applicationProcess: [
      'Call Women Helpline 181',
      'Visit nearest One Stop Centre',
      'Register complaint/requirement',
      'Get immediate assistance',
      'Follow-up support provided'
    ],
    applicationLink: 'https://wcd.nic.in/schemes/mission-shakti'
  },

  // Ministry of Agriculture - Crop Insurance
  {
    id: 'pm-fasal-bima',
    title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    department: 'Ministry of Agriculture & Farmers Welfare',
    description: 'Crop insurance scheme protecting farmers against crop loss due to natural calamities.',
    category: 'Agriculture',
    benefits: [
      'Coverage for all crops',
      'Protection against natural disasters',
      'Low premium rates (1.5-5%)',
      'Government subsidized insurance',
      'Quick claim settlement'
    ],
    eligibility: {
      residence: 'Rural',
    },
    applicationProcess: [
      'Register during crop sowing season',
      'Pay premium at bank/CSC',
      'Report crop loss within 72 hours',
      'Survey and assessment',
      'Claim disbursement'
    ],
    applicationLink: 'https://pmfby.gov.in/'
  },

  // Ministry of Health - Maternal Health
  {
    id: 'janani-suraksha',
    title: 'Janani Suraksha Yojana (JSY)',
    department: 'Ministry of Health and Family Welfare',
    description: 'Safe motherhood intervention scheme promoting institutional delivery.',
    category: 'Healthcare',
    benefits: [
      'Cash assistance for institutional delivery',
      '₹1,400 for rural areas',
      '₹1,000 for urban areas',
      'Free delivery services',
      'Post-delivery care'
    ],
    eligibility: {
      gender: 'Female',
      category: 'SC',
    },
    applicationProcess: [
      'Register pregnancy at health center',
      'Get antenatal checkups',
      'Deliver at government facility',
      'Receive cash assistance',
      'Post-natal care follow-up'
    ],
    applicationLink: 'https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309'
  },

  // Ministry of Railways
  {
    id: 'mera-ration-mera-adhikaar',
    title: 'One Nation One Ration Card',
    department: 'Ministry of Consumer Affairs',
    description: 'Portability of ration card allowing beneficiaries to claim foodgrain anywhere in India.',
    category: 'Food Security',
    benefits: [
      'Ration card portability',
      'Access food grains anywhere',
      'No need to transfer ration card',
      'Biometric authentication',
      'Real-time availability check'
    ],
    eligibility: {
      category: 'EWS',
    },
    applicationProcess: [
      'Link Aadhaar with ration card',
      'Enable biometric authentication',
      'Visit any PDS shop nationwide',
      'Get authenticated',
      'Receive entitled ration'
    ],
    applicationLink: 'https://impds.nic.in/ONORC/'
  },

  // Ministry of Textiles
  {
    id: 'pm-mitra-yojana',
    title: 'PM MITRA (Mega Integrated Textile Region and Apparel) Parks',
    department: 'Ministry of Textiles',
    description: 'Scheme to establish textile manufacturing hubs creating employment opportunities.',
    category: 'Employment',
    benefits: [
      'Skill development programs',
      'Direct employment opportunities',
      'Ancillary business support',
      'Modern infrastructure facilities',
      'Export facilitation'
    ],
    eligibility: {
      minAge: 18,
    },
    applicationProcess: [
      'Check for nearby MITRA park',
      'Register at employment exchange',
      'Undergo skill training',
      'Get placement',
      'Start working'
    ],
    applicationLink: 'https://texmin.nic.in/'
  },

  // Ministry of Culture
  {
    id: 'scholarship-young-artists',
    title: 'Scholarship Scheme for Young Artists',
    department: 'Ministry of Culture',
    description: 'Financial assistance to young artists in various cultural fields.',
    category: 'Education',
    benefits: [
      '₹5,000 monthly scholarship',
      'Duration of 2 years',
      'Coverage for music, dance, theatre, visual arts',
      'Exposure to performances',
      'Networking opportunities'
    ],
    eligibility: {
      minAge: 18,
      maxAge: 25,
      isForStudents: true,
    },
    applicationProcess: [
      'Apply through online portal',
      'Submit portfolio/performance video',
      'Attend audition/interview',
      'Selection by expert committee',
      'Scholarship disbursement'
    ],
    applicationLink: 'https://indiaculture.nic.in/'
  },

  // Ministry of Environment
  {
    id: 'national-clean-air-programme',
    title: 'National Clean Air Programme (NCAP)',
    department: 'Ministry of Environment, Forest and Climate Change',
    description: 'Comprehensive plan for prevention, control and abatement of air pollution.',
    category: 'Environment',
    benefits: [
      'City-specific action plans',
      'Air quality monitoring',
      'Public awareness programs',
      'Green cover enhancement',
      'Pollution control measures'
    ],
    eligibility: {
      // Community based
    },
    applicationProcess: [
      'Check city action plan',
      'Participate in awareness programs',
      'Report pollution violations',
      'Adopt green practices',
      'Monitor air quality'
    ],
    applicationLink: 'https://ncap.moef.gov.in/'
  },

  // Ministry of Tourism
  {
    id: 'swadesh-darshan',
    title: 'Swadesh Darshan Scheme',
    department: 'Ministry of Tourism',
    description: 'Theme-based tourist circuit development promoting tourism and employment.',
    category: 'Employment',
    benefits: [
      'Tourism infrastructure development',
      'Local employment generation',
      'Skill development for tourism',
      'Cultural heritage preservation',
      'Economic growth in tourist areas'
    ],
    eligibility: {
      // Location based
    },
    applicationProcess: [
      'Check developed tourist circuits',
      'Register as tourism service provider',
      'Get trained in hospitality',
      'Start tourism business',
      'Benefit from tourist influx'
    ],
    applicationLink: 'https://tourism.gov.in/'
  },

  // Ministry of Ayush
  {
    id: 'national-ayush-mission',
    title: 'National AYUSH Mission',
    department: 'Ministry of AYUSH',
    description: 'Promoting AYUSH medical systems and providing accessible healthcare.',
    category: 'Healthcare',
    benefits: [
      'Free AYUSH treatment',
      'AYUSH hospitals and dispensaries',
      'Medicinal plant cultivation support',
      'Research and development',
      'Integration with modern medicine'
    ],
    eligibility: {
      // Universal coverage
    },
    applicationProcess: [
      'Visit nearest AYUSH facility',
      'Register as patient',
      'Consultation with AYUSH doctor',
      'Get treatment',
      'Follow-up care'
    ],
    applicationLink: 'https://main.ayush.gov.in/'
  },

  // Ministry of Electronics & IT
  {
    id: 'digital-india',
    title: 'Digital India Programme',
    department: 'Ministry of Electronics & IT',
    description: 'Transforming India into digitally empowered society and knowledge economy.',
    category: 'Skill Development',
    benefits: [
      'Digital literacy training',
      'Common Service Centers',
      'E-governance services',
      'Broadband connectivity',
      'Mobile app ecosystem'
    ],
    eligibility: {
      // Universal access
    },
    applicationProcess: [
      'Visit CSC for digital services',
      'Enroll in digital literacy program',
      'Learn basic computer skills',
      'Access e-services',
      'Get digital certificate'
    ],
    applicationLink: 'https://www.digitalindia.gov.in/'
  },

  // Ministry of Shipping
  {
    id: 'sagarmala-programme',
    title: 'Sagarmala Programme',
    department: 'Ministry of Ports, Shipping and Waterways',
    description: 'Port-led development promoting port modernization and coastal economic zones.',
    category: 'Employment',
    benefits: [
      'Port infrastructure development',
      'Direct and indirect employment',
      'Skill development in maritime sector',
      'Coastal community development',
      'Trade facilitation'
    ],
    eligibility: {
      // Coastal region residents
    },
    applicationProcess: [
      'Check nearby port development projects',
      'Register at employment exchange',
      'Skill training in maritime sector',
      'Get employment',
      'Career growth opportunities'
    ],
    applicationLink: 'http://sagarmala.gov.in/'
  },

  // Ministry of Coal
  {
    id: 'pm-khanij-kshetra-kalyan-yojana',
    title: 'Pradhan Mantri Khanij Kshetra Kalyan Yojana (PMKKKY)',
    department: 'Ministry of Mines',
    description: 'Welfare of areas and people affected by mining operations.',
    category: 'Social Security',
    benefits: [
      'Physical infrastructure development',
      'Health and education facilities',
      'Skill development for affected people',
      'Environmental restoration',
      'Water supply and sanitation'
    ],
    eligibility: {
      // Mining affected areas
    },
    applicationProcess: [
      'District level plan formulation',
      'Community participation',
      'Project approval',
      'Implementation',
      'Monitoring and evaluation'
    ],
    applicationLink: 'https://mines.gov.in/'
  },

  // Ministry of Food Processing
  {
    id: 'pm-formalization-micro-food',
    title: 'PM Formalisation of Micro Food Processing Enterprises (PMFME)',
    department: 'Ministry of Food Processing Industries',
    description: 'Support to micro food processing units for upgradation and formalization.',
    category: 'Self-Employment',
    benefits: [
      'Credit-linked subsidy up to ₹10 lakhs',
      'Capacity building and training',
      'Marketing and branding support',
      'Technology upgradation',
      'Cluster-based approach'
    ],
    eligibility: {
      // Existing or new food processing entrepreneurs
    },
    applicationProcess: [
      'Prepare detailed project report',
      'Apply through PMFME portal',
      'Submit to District Industry Centre',
      'Loan processing by bank',
      'Subsidy disbursement'
    ],
    applicationLink: 'https://pmfme.mofpi.gov.in/'
  },

  // Ministry of Steel
  {
    id: 'skill-development-steel-sector',
    title: 'Skill Development in Steel Sector',
    department: 'Ministry of Steel',
    description: 'Training and skill development for youth in steel and allied industries.',
    category: 'Skill Development',
    benefits: [
      'Free technical training',
      'Industry certification',
      'Placement assistance',
      'Stipend during training',
      'Career advancement opportunities'
    ],
    eligibility: {
      minAge: 18,
      maxAge: 35,
      isForStudents: true,
    },
    applicationProcess: [
      'Apply through Sector Skill Council',
      'Selection based on eligibility',
      'Undergo training',
      'Pass assessment',
      'Get placed in steel sector'
    ],
    applicationLink: 'https://steel.gov.in/'
  },

  // Ministry of New and Renewable Energy
  {
    id: 'pm-kusum',
    title: 'PM-KUSUM (Kisan Urja Suraksha evam Utthaan Mahabhiyan)',
    department: 'Ministry of New and Renewable Energy',
    description: 'Solar energy scheme for farmers to set up solar pumps and generate extra income.',
    category: 'Agriculture',
    benefits: [
      'Solar pump installation subsidy',
      'Grid-connected solar power plants',
      'Solarization of existing pumps',
      'Additional income from selling power',
      'Reduced electricity bills'
    ],
    eligibility: {
      residence: 'Rural',
      // Farmers
    },
    applicationProcess: [
      'Apply through state nodal agency',
      'Submit land documents',
      'Technical feasibility study',
      'Approval and subsidy sanction',
      'Installation and commissioning'
    ],
    applicationLink: 'https://pmkusum.mnre.gov.in/'
  },

  // Merge additional schemes
  ...ADDITIONAL_SCHEMES,
  ...MORE_SCHEMES
];

export default REAL_GOVT_SCHEMES;
