import { Scheme } from '../types';

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
    applicationLink: 'https://pmkisan.gov.in/'
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
      category: 'SC/ST/OBC/EWS',
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
      category: 'SC/ST/OBC/General',
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
      category: 'SC/ST',
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
      category: 'SC/ST/OBC/General',
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
      isPwD: true,
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
      category: 'EWS/BPL',
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
  }
];

export default REAL_GOVT_SCHEMES;
