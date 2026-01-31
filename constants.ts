import { Scheme, Application, UserProfile } from './types';

export const MOCK_USER_PROFILE: UserProfile = {
    gender: 'Male',
    age: 52,
    state: 'Maharashtra',
    residence: 'Urban',
    category: 'General',
    annualIncome: 450000,
    isStudent: false,
    isPwD: false,
};

export const MOCK_SCHEMES: Scheme[] = [
  {
    id: 'pm-kisan',
    title: 'Pradhan Mantri Kisan Samman Nidhi',
    department: 'Ministry of Agriculture & Farmers Welfare',
    description: 'A government scheme with an aim to provide financial support to all landholding farmer families in the country to enable them to take care of expenses related to agriculture and allied activities as well as domestic needs.',
    category: 'Agriculture',
    benefits: [
      '₹6,000 per year in three equal installments.',
      'Direct benefit transfer to bank accounts.'
    ],
    eligibility: {
      maxIncome: 200000,
      residence: 'Rural',
    },
    applicationProcess: [
      'Visit the official PM-KISAN website.',
      'Click on the "New Farmer Registration" link.',
      'Enter your Aadhaar number and other required details.',
      'Upload scanned copies of your land documents and bank passbook.',
      'Submit the form and note the reference number for future tracking.'
    ],
    applicationLink: 'https://www.myscheme.gov.in/schemes/pm-kisan'
  },
  {
    id: 'pm-jay',
    title: 'Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
    department: 'Ministry of Health and Family Welfare',
    description: 'Ayushman Bharat PM-JAY is the largest health assurance scheme in the world which aims at providing a health cover of Rs. 5 lakhs per family per year for secondary and tertiary care hospitalization to over 10.74 crores poor and vulnerable families.',
    category: 'Healthcare',
    benefits: [
      'Health cover of ₹5 lakhs per family per year.',
      'Cashless access to health care services.',
      'Covers 3 days of pre-hospitalization and 15 days post-hospitalization expenses.'
    ],
    eligibility: {
      category: 'EWS',
      residence: 'Any'
    },
    applicationProcess: [
      'Check eligibility on the official PM-JAY website or at a Common Service Center (CSC).',
      'If eligible, complete the KYC (Know Your Customer) process using your Aadhaar card.',
      'An Ayushman Bharat e-card will be generated and issued to you.',
      'Present this card at any empaneled hospital to avail cashless treatment.'
    ],
    applicationLink: 'https://www.myscheme.gov.in/schemes/pm-jay'
  },
  {
    id: 'sukanya-samriddhi',
    title: 'Sukanya Samriddhi Yojana',
    department: 'Ministry of Finance',
    description: 'A small deposit scheme for the girl child, launched as a part of the ‘Beti Bachao Beti Padhao’ campaign. It is meant to meet the education and marriage expenses of a girl child.',
    category: 'Women & Child Development',
    benefits: [
      'High interest rate.',
      'Tax benefits under Section 80C.'
    ],
    eligibility: {
      maxAge: 10, // For the girl child
      gender: 'Female',
    },
    applicationProcess: [
      'Visit any authorized bank branch or post office.',
      'Fill out the Sukanya Samriddhi Yojana application form.',
      'Submit the form along with the birth certificate of the girl child and KYC documents of the guardian.',
      'Make the initial deposit (minimum ₹250).',
      'The account will be opened and a passbook will be issued.'
    ],
    applicationLink: 'https://www.myscheme.gov.in/schemes/ssy'
  },
  {
    id: 'atal-pension',
    title: 'Atal Pension Yojana',
    department: 'Ministry of Finance',
    description: 'A pension scheme for citizens of India focused on the unorganised sector workers. Under the APY, guaranteed minimum pension of ₹1,000/- or ₹2,000/- or ₹3,000/- or ₹4,000/- or ₹5,000/- per month will be given at the age of 60 years depending on the contributions by the subscribers.',
    category: 'Pension',
    benefits: [
      'Guaranteed minimum monthly pension.',
      'Government co-contribution for eligible subscribers.'
    ],
    eligibility: {
      minAge: 18,
      maxAge: 40,
      gender: 'Any'
    },
    applicationProcess: [
      'Approach your bank branch where you have a savings account.',
      'Fill out the APY registration form.',
      'Provide your Aadhaar and mobile number. Ensure your Aadhaar is linked to your bank account.',
      'Choose your desired monthly pension amount to determine your contribution.',
      'The contribution amount will be auto-debited from your savings account.'
    ],
    applicationLink: 'https://www.myscheme.gov.in/schemes/apy'
  },
  {
    id: 'nsc',
    title: 'National Scholarship Portal',
    department: 'Ministry of Electronics and Information Technology',
    description: 'A portal to provide a single window for various scholarships schemes of the Central Govt, State Govt and UTs. It simplifies the process of applying for scholarships and ensures timely disbursement.',
    category: 'Education',
    benefits: [
      'Financial assistance for students from various backgrounds.',
      'Streamlined application process for multiple scholarships.'
    ],
    eligibility: {
      isForStudents: true,
      minAge: 16,
      maxAge: 30,
    },
    applicationProcess: [
        'Register on the National Scholarship Portal (NSP) website.',
        'Log in with the generated Application ID and password.',
        'Fill in the application form with your academic and personal details.',
        'Upload required documents such as mark sheets, income certificate, and caste certificate.',
        'Submit the application and take a printout for your records.'
    ],
    applicationLink: 'https://www.myscheme.gov.in/schemes/nsp'
  },
   {
    id: 'pwd-scheme',
    title: 'Scheme for Persons with Disabilities',
    department: 'Department of Empowerment of Persons with Disabilities',
    description: 'Financial assistance and support services for persons with disabilities to promote their independence and inclusion in society.',
    category: 'Social Welfare',
    benefits: [
      'Monthly financial assistance.',
      'Aids and assistive devices.',
      'Skill development training.'
    ],
    eligibility: {
        isForPwD: true,
        gender: 'Any'
    },
    applicationProcess: [
        'Obtain a disability certificate from a certified medical authority.',
        'Visit the official portal for disability welfare schemes.',
        'Register and fill out the online application form for the specific scheme.',
        'Upload your disability certificate, proof of identity, and other relevant documents.',
        'Submit the application for verification.'
    ],
    applicationLink: 'https://www.myscheme.gov.in/schemes/disability-welfare'
  },
  {
    id: 'pm-awas',
    title: 'Pradhan Mantri Awas Yojana - Urban (PMAY-U)',
    department: 'Ministry of Housing and Urban Affairs',
    description: 'Aims to provide affordable housing to the urban poor with a target of building 2 crore affordable houses.',
    category: 'Housing',
    benefits: [
      'Credit Linked Subsidy Scheme (CLSS) on home loans.',
      'Financial assistance for construction of new houses.',
      'Houses in the name of female head of household or in joint name.'
    ],
    eligibility: {
      maxIncome: 1800000,
      residence: 'Urban',
      category: 'EWS',
    },
    applicationProcess: [
        'Visit the official PMAY-U website or the nearest Common Service Center (CSC).',
        'Select the appropriate category based on your income level.',
        'Fill out the application form with your personal, income, and housing details.',
        'Provide your Aadhaar number for authentication.',
        'Submit the form and save the application number for status tracking.'
    ],
    applicationLink: 'https://www.myscheme.gov.in/schemes/pmay-u'
  },
  {
    id: 'mgnrega',
    title: 'Mahatma Gandhi National Rural Employment Guarantee Act',
    department: 'Ministry of Rural Development',
    description: 'Guarantees the ‘right to work’ and aims to enhance livelihood security in rural areas by providing at least 100 days of guaranteed wage employment in a financial year to every household whose adult members volunteer to do unskilled manual work.',
    category: 'Employment',
    benefits: [
      '100 days of guaranteed wage employment.',
      'Creation of durable assets in rural areas.',
      'Social security for rural households.'
    ],
    eligibility: {
      residence: 'Rural',
      minAge: 18,
    },
    applicationProcess: [
        'Contact your local Gram Panchayat to register your household.',
        'Provide photographs, Aadhaar number, and bank account details for all adult members.',
        'A Job Card will be issued to your household.',
        'Submit a written application for work to the Gram Panchayat.',
        'You will be provided with work within 15 days of your application.'
    ],
    applicationLink: 'https://www.myscheme.gov.in/schemes/mgnrega'
  },
  {
    id: 'mid-day-meal',
    title: 'Mid-Day Meal Scheme',
    department: 'Ministry of Education',
    description: 'A school meal programme designed to better the nutritional standing of school-age children nationwide.',
    category: 'Education',
    benefits: [
      'Free cooked meal on all school days.',
      'Improved nutrition for children.',
      'Increased school enrollment and attendance.'
    ],
    eligibility: {
      isForStudents: true,
      maxAge: 14,
    },
    applicationProcess: [
        'Enroll your child in a government or government-aided school.',
        'The scheme is automatically applicable to all children studying in eligible schools.',
        'No separate application is required from the parents or child.',
        'The school authorities manage the implementation and provision of meals.'
    ],
    applicationLink: 'https://www.myscheme.gov.in/schemes/mdm'
  },
  {
    id: 'pm-mudra',
    title: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    department: 'Ministry of Finance',
    description: 'A scheme to provide loans up to ₹10 lakh to the non-corporate, non-farm small/micro enterprises. These loans are given by Commercial Banks, RRBs, Small Finance Banks, MFIs and NBFCs.',
    category: 'Financial Services',
    benefits: [
      'Loans from ₹50,000 up to ₹10 lakh.',
      'No collateral required.',
      'Supports small business and entrepreneurs.'
    ],
    eligibility: {
      minAge: 18
    },
    applicationProcess: [
        'Prepare a business plan or project report.',
        'Approach a nearby branch of a bank, MFI, or NBFC that provides MUDRA loans.',
        'Fill out the MUDRA loan application form.',
        'Submit the form along with KYC documents and your business plan.',
        'The loan will be sanctioned based on the bank\'s assessment of your proposal.'
    ],
    applicationLink: 'https://www.myscheme.gov.in/schemes/pmmy'
  },
  {
    id: 'stand-up-india',
    title: 'Stand-Up India Scheme',
    department: 'Ministry of Finance',
    description: 'Facilitates bank loans between ₹10 lakh and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise.',
    category: 'Financial Services',
    benefits: [
      'Bank loans between ₹10 lakh and ₹1 crore.',
      'Promotes entrepreneurship among women, SC & ST categories.'
    ],
    eligibility: {
      minAge: 18,
      category: 'SC', // Also ST and Women
    },
    applicationProcess: [
        'Register on the Stand-Up India portal or visit a bank branch.',
        'Create a detailed project report (DPR) for your business.',
        'Fill out the loan application form and submit it with your DPR and required documents.',
        'The application will be forwarded to the bank of your choice.',
        'The bank will process the loan as per its internal guidelines.'
    ],
    applicationLink: 'https://www.myscheme.gov.in/schemes/stand-up-india'
  }
];

const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const MOCK_APPLICATIONS: Application[] = [
    {
        id: 'app-001',
        schemeId: 'pm-kisan',
        schemeTitle: 'PM Kisan Samman Nidhi',
        submissionDate: '2023-10-15',
        status: 'In Review',
        details: 'Documents are being verified by the local agricultural office.'
    },
    {
        id: 'app-002',
        schemeId: 'pm-jay',
        schemeTitle: 'PM Jan Arogya Yojana',
        submissionDate: '2023-09-01',
        status: 'Approved',
        details: 'Your PM-JAY e-card has been dispatched.'
    },
    {
        id: 'app-003',
        schemeId: 'atal-pension',
        schemeTitle: 'Atal Pension Yojana',
        submissionDate: getTodayDateString(),
        status: 'Submitted',
        details: 'Your application has been received and is pending processing.'
    },
    {
        id: 'app-004',
        schemeId: 'sukanya-samriddhi',
        schemeTitle: 'Sukanya Samriddhi Yojana',
        submissionDate: '2023-08-20',
        status: 'Rejected',
        details: 'Incomplete address proof provided. Please re-apply with valid documents.'
    }
];

const generateSchemes = (count: number): Scheme[] => {
    const generated: Scheme[] = [];
    for (let i = 0; i < count; i++) {
        const template = MOCK_SCHEMES[i % MOCK_SCHEMES.length];
        generated.push({
            ...template,
            id: `${template.id}-${i + 1}`,
            title: `${template.title} (Variant ${i + 1})`,
        });
    }
    return generated;
};

export const EXPANDED_MOCK_SCHEMES = generateSchemes(1001);