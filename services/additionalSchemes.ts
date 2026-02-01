import { Scheme } from '../types';

// Additional 270+ Government Schemes Database
export const ADDITIONAL_SCHEMES: Scheme[] = [
  // State Schemes - Maharashtra
  {
    id: 'maha-sharad-pawar-gram-samrudhi-yojana',
    title: 'Sharad Pawar Gram Samrudhi Yojana (Maharashtra)',
    department: 'Government of Maharashtra',
    description: 'Rural development scheme for infrastructure and livelihood in Maharashtra villages.',
    category: 'Rural Development',
    benefits: ['Village infrastructure development', 'Drinking water facilities', 'Road connectivity', 'Employment generation', 'Agricultural support'],
    eligibility: { state: 'Maharashtra', residence: 'Rural' },
    applicationProcess: ['Apply through Gram Panchayat', 'Submit project proposal', 'District level approval', 'Implementation', 'Monitoring'],
    applicationLink: 'https://maharashtra.gov.in/'
  },
  {
    id: 'maha-mahatma-jyotiba-phule-jan-arogya',
    title: 'Mahatma Jyotiba Phule Jan Arogya Yojana (Maharashtra)',
    department: 'Government of Maharashtra - Health',
    description: 'Free healthcare scheme for families below poverty line in Maharashtra.',
    category: 'Healthcare',
    benefits: ['₹1.5 lakh health cover per family', 'Cashless treatment', 'Network of empaneled hospitals', 'Pre and post hospitalization', 'No age limit'],
    eligibility: { state: 'Maharashtra', category: 'EWS' },
    applicationProcess: ['Register at PHC', 'Get MJPJAY card', 'Visit empaneled hospital', 'Cashless treatment', 'Follow-up care'],
    applicationLink: 'https://www.jeevandayee.gov.in/'
  },
  {
    id: 'maha-swadhar-yojana',
    title: 'Swadhar Yojana (Maharashtra)',
    department: 'Government of Maharashtra - Social Welfare',
    description: 'Financial assistance for OBC students pursuing higher education in Maharashtra.',
    category: 'Education',
    benefits: ['Maintenance allowance', 'Books and stationery grant', 'Laptop/tablet subsidy', 'Hostel fees coverage', 'Exam fees reimbursement'],
    eligibility: { state: 'Maharashtra', category: 'OBC', isForStudents: true, maxIncome: 800000 },
    applicationProcess: ['Register on Mahadbt portal', 'Upload documents', 'Income certificate verification', 'Approval', 'Scholarship disbursement'],
    applicationLink: 'https://mahadbt.maharashtra.gov.in/'
  },

  // State Schemes - Tamil Nadu
  {
    id: 'tn-amma-unavagam',
    title: 'Amma Unavagam (Tamil Nadu)',
    department: 'Government of Tamil Nadu',
    description: 'Subsidized canteen providing affordable meals to poor and working class.',
    category: 'Food Security',
    benefits: ['Breakfast at ₹1', 'Lunch/Dinner at ₹5', 'Hygienic food', 'Multiple locations', 'Quality meals'],
    eligibility: { state: 'Tamil Nadu' },
    applicationProcess: ['Visit nearest Amma Unavagam', 'Purchase token', 'Get meal', 'No registration required', 'Open to all'],
    applicationLink: 'https://tn.gov.in/'
  },
  {
    id: 'tn-kalaignar-kanavu-illam',
    title: 'Kalaignar Kanavu Illam Scheme (Tamil Nadu)',
    department: 'Government of Tamil Nadu - Housing',
    description: 'Housing scheme providing plots and financial assistance for construction in Tamil Nadu.',
    category: 'Housing',
    benefits: ['Free house site patta', '₹3 lakh construction grant', 'Infrastructure facilities', 'Proper planning', 'Legal ownership'],
    eligibility: { state: 'Tamil Nadu', category: 'SC', residence: 'Rural', maxIncome: 120000 },
    applicationProcess: ['Apply through Collector office', 'Site allotment', 'Construction grant phases', 'Building completion', 'Ownership transfer'],
    applicationLink: 'https://tn.gov.in/'
  },
  {
    id: 'tn-amma-two-wheeler-scheme',
    title: 'Amma Two Wheeler Scheme (Tamil Nadu)',
    department: 'Government of Tamil Nadu - Labour Welfare',
    description: 'Free two-wheeler distribution to working women in Tamil Nadu.',
    category: 'Social Security',
    benefits: ['Free moped/scooter', 'Registration covered', 'Insurance for 5 years', 'Safety training', 'Maintenance support'],
    eligibility: { state: 'Tamil Nadu', gender: 'Female', minAge: 18, maxAge: 40, maxIncome: 250000 },
    applicationProcess: ['Apply through Labour Welfare Board', 'Employment verification', 'Selection lottery', 'Vehicle distribution', 'Training program'],
    applicationLink: 'https://tn.gov.in/'
  },

  // State Schemes - Karnataka
  {
    id: 'kar-kshatriya-abhivrudhi-yojana',
    title: 'Kshatriya Abhivrudhi Yojana (Karnataka)',
    department: 'Government of Karnataka',
    description: 'Development scheme for backward communities in Karnataka.',
    category: 'Social Security',
    benefits: ['Educational scholarships', 'Skill development', 'Employment assistance', 'Housing support', 'Healthcare facilities'],
    eligibility: { state: 'Karnataka', category: 'OBC' },
    applicationProcess: ['Apply at Taluk office', 'Community certificate', 'Income verification', 'Benefit selection', 'Disbursement'],
    applicationLink: 'https://sevasindhu.karnataka.gov.in/'
  },
  {
    id: 'kar-gruha-jyothi',
    title: 'Gruha Jyothi (Karnataka)',
    department: 'Government of Karnataka - Energy',
    description: 'Free electricity up to 200 units per month for households in Karnataka.',
    category: 'Infrastructure',
    benefits: ['200 units free electricity', 'Reduced electricity bills', 'Direct billing', 'Automatic credit', 'Energy conservation awareness'],
    eligibility: { state: 'Karnataka' },
    applicationProcess: ['Automatic enrollment', 'Electricity connection required', 'Monthly consumption monitoring', 'Bill generation', 'Free units adjustment'],
    applicationLink: 'https://bescom.org/'
  },
  {
    id: 'kar-vidya-nidhi',
    title: 'Vidya Nidhi (Karnataka)',
    department: 'Government of Karnataka - Education',
    description: 'Merit-based scholarship for students from economically weaker sections in Karnataka.',
    category: 'Education',
    benefits: ['Merit scholarship ₹10,000-50,000', 'Book allowance', 'Laptop grant', 'Hostel fees', 'Exam fees waiver'],
    eligibility: { state: 'Karnataka', isForStudents: true, maxIncome: 600000 },
    applicationProcess: ['Apply on Samagra portal', 'Academic documents upload', 'Merit list publication', 'Verification', 'Scholarship credit'],
    applicationLink: 'https://karepass.cgg.gov.in/'
  },

  // State Schemes - Uttar Pradesh
  {
    id: 'up-mukhyamantri-abhyudaya-yojana',
    title: 'Mukhyamantri Abhyudaya Yojana (UP)',
    department: 'Government of Uttar Pradesh',
    description: 'Free coaching for competitive exams to economically weak students in UP.',
    category: 'Education',
    benefits: ['Free IAS/PCS coaching', 'Study materials', 'Online and offline classes', 'Mock tests', 'Mentorship program'],
    eligibility: { state: 'Uttar Pradesh', isForStudents: true, maxIncome: 800000 },
    applicationProcess: ['Register on abhyuday.up.gov.in', 'Document verification', 'Entrance test', 'Batch allotment', 'Coaching begins'],
    applicationLink: 'https://abhyuday.up.gov.in/'
  },
  {
    id: 'up-kanya-sumangala-yojana',
    title: 'Kanya Sumangala Yojana (UP)',
    department: 'Government of Uttar Pradesh - Women & Child',
    description: 'Financial assistance for girl child education and development in UP.',
    category: 'Education',
    benefits: ['₹15,000 in phases from birth to graduation', 'Birth assistance ₹2,000', 'Education milestones', 'Class 12 completion ₹3,000', 'Graduation ₹5,000'],
    eligibility: { state: 'Uttar Pradesh', gender: 'Female', maxIncome: 300000 },
    applicationProcess: ['Apply within 6 months of birth', 'Birth certificate', 'Bank account', 'Milestone documentation', 'Phase-wise disbursement'],
    applicationLink: 'https://mksy.up.gov.in/'
  },

  // State Schemes - West Bengal
  {
    id: 'wb-kanyashree-prakalpa',
    title: 'Kanyashree Prakalpa (West Bengal)',
    department: 'Government of West Bengal',
    description: 'Conditional cash transfer scheme for girls education and marriage prevention in West Bengal.',
    category: 'Education',
    benefits: ['Annual scholarship ₹1,000', 'One-time grant ₹25,000 at 18', 'Encourages education', 'Delays marriage', 'Empowerment'],
    eligibility: { state: 'West Bengal', gender: 'Female', isForStudents: true, minAge: 13, maxAge: 19 },
    applicationProcess: ['Apply through school', 'Bank account mandatory', 'Annual renewal', 'Attendance verification', 'Scholarship credit'],
    applicationLink: 'https://www.wbkanyashree.gov.in/'
  },
  {
    id: 'wb-sabuj-sathi',
    title: 'Sabuj Sathi (West Bengal)',
    department: 'Government of West Bengal - Transport',
    description: 'Free bicycle distribution to students in classes 9-12 in West Bengal.',
    category: 'Education',
    benefits: ['Free bicycle', 'Encourages school attendance', 'Reduces dropout', 'Better mobility', 'Education support'],
    eligibility: { state: 'West Bengal', isForStudents: true, minAge: 14, maxAge: 19 },
    applicationProcess: ['Apply through school', 'Student verification', 'Bicycle distribution', 'Acknowledgment', 'Maintenance guide'],
    applicationLink: 'https://wb.gov.in/'
  },

  // State Schemes - Gujarat
  {
    id: 'guj-vahli-dikri-yojana',
    title: 'Vahli Dikri Yojana (Gujarat)',
    department: 'Government of Gujarat',
    description: 'Financial assistance for first and second girl child in Gujarat families.',
    category: 'Social Security',
    benefits: ['₹1.10 lakh at age 18', 'Education support', 'Fixed deposit', 'Maturity benefit', 'Financial security'],
    eligibility: { state: 'Gujarat', gender: 'Female', maxIncome: 200000 },
    applicationProcess: ['Register within 1 year of birth', 'Birth certificate', 'Income proof', 'Fixed deposit creation', 'Maturity claim'],
    applicationLink: 'https://gujaratindia.gov.in/'
  },
  {
    id: 'guj-mukhyamantri-yuva-swavalamban-yojana',
    title: 'Mukhyamantri Yuva Swavalamban Yojana (Gujarat)',
    department: 'Government of Gujarat - Skill Development',
    description: 'Free skill development and tablet distribution for students in Gujarat.',
    category: 'Skill Development',
    benefits: ['Free tablet with internet', 'Skill development courses', 'Digital content', 'Career guidance', 'Job placement'],
    eligibility: { state: 'Gujarat', isForStudents: true, minAge: 16, maxAge: 35 },
    applicationProcess: ['Register on mysy.guj.nic.in', 'Course selection', 'Training enrollment', 'Tablet distribution', 'Certification'],
    applicationLink: 'https://mysy.guj.nic.in/'
  },

  // State Schemes - Rajasthan
  {
    id: 'raj-indira-gandhi-matritva-poshan',
    title: 'Indira Gandhi Matritva Poshan Yojana (Rajasthan)',
    department: 'Government of Rajasthan - Women & Child',
    description: 'Maternity benefit scheme for pregnant and lactating women in Rajasthan.',
    category: 'Healthcare',
    benefits: ['₹6,000 in installments', 'Nutrition support', 'Health checkups', 'Institutional delivery', 'Child care'],
    eligibility: { state: 'Rajasthan', gender: 'Female' },
    applicationProcess: ['Register at Anganwadi', 'Pregnancy confirmation', 'Health checkups', 'Institutional delivery', 'Benefit disbursement'],
    applicationLink: 'https://rajasthan.gov.in/'
  },
  {
    id: 'raj-mukhyamantri-chiranjivi-yojana',
    title: 'Mukhyamantri Chiranjivi Yojana (Rajasthan)',
    department: 'Government of Rajasthan - Health',
    description: 'Universal health insurance scheme providing free treatment up to ₹10 lakhs in Rajasthan.',
    category: 'Healthcare',
    benefits: ['₹10 lakh health cover', 'Cashless treatment', '1,576 packages covered', 'Free registration', 'Network hospitals'],
    eligibility: { state: 'Rajasthan' },
    applicationProcess: ['Online registration', 'Aadhaar linkage', 'E-card generation', 'Hospital visit', 'Cashless treatment'],
    applicationLink: 'https://chiranjeevi.rajasthan.gov.in/'
  },

  // Central Schemes - More Agriculture
  {
    id: 'paramparagat-krishi-vikas-yojana',
    title: 'Paramparagat Krishi Vikas Yojana (PKVY)',
    department: 'Ministry of Agriculture',
    description: 'Organic farming promotion scheme encouraging chemical-free agriculture.',
    category: 'Agriculture',
    benefits: ['₹50,000 per hectare for 3 years', 'Organic inputs support', 'Certification assistance', 'Market linkage', 'Premium pricing'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Form farmer groups', 'Apply through agriculture department', 'Training on organic farming', 'Certification process', 'Market access'],
    applicationLink: 'https://pgsindia-ncof.gov.in/'
  },
  {
    id: 'soil-health-card-scheme',
    title: 'Soil Health Card Scheme',
    department: 'Ministry of Agriculture',
    description: 'Free soil testing and advisory for farmers to improve crop productivity.',
    category: 'Agriculture',
    benefits: ['Free soil testing', 'Nutrient status report', 'Fertilizer recommendations', 'Crop-specific advice', 'Yield improvement'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Visit Soil Health Lab', 'Soil sample submission', 'Testing', 'Health card issuance', 'Advisory implementation'],
    applicationLink: 'https://soilhealth.dac.gov.in/'
  },
  {
    id: 'national-agriculture-market',
    title: 'National Agriculture Market (e-NAM)',
    department: 'Ministry of Agriculture',
    description: 'Online trading platform for agricultural commodities providing better price discovery.',
    category: 'Agriculture',
    benefits: ['Online trading', 'Better price discovery', 'Transparent auction', 'Direct payment', 'Pan-India market access'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Register on enam.gov.in', 'Aadhaar verification', 'Bank account linkage', 'Upload produce', 'Online trading'],
    applicationLink: 'https://www.enam.gov.in/'
  },
  {
    id: 'kisan-credit-card',
    title: 'Kisan Credit Card (KCC)',
    department: 'Ministry of Agriculture & Banks',
    description: 'Credit facility for farmers to meet agricultural expenses and emergencies.',
    category: 'Agriculture',
    benefits: ['Credit limit up to ₹3 lakhs', 'Low interest rate', 'Flexible repayment', 'Insurance coverage', 'Working capital support'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Apply at any bank', 'Land documents', 'Crop details', 'Credit limit sanction', 'Card issuance'],
    applicationLink: 'https://pmkisan.gov.in/kcc.aspx'
  },
  {
    id: 'rashtriya-krishi-vikas-yojana',
    title: 'Rashtriya Krishi Vikas Yojana (RKVY)',
    department: 'Ministry of Agriculture',
    description: 'State plan scheme for achieving 4% annual growth in agriculture sector.',
    category: 'Agriculture',
    benefits: ['Infrastructure development', 'Technology adoption', 'Extension services', 'Market infrastructure', 'Farmer training'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['State level proposals', 'District implementation', 'Farmer participation', 'Project execution', 'Benefit realization'],
    applicationLink: 'https://rkvy.nic.in/'
  },

  // Central Schemes - Education
  {
    id: 'pm-shri-schools',
    title: 'PM SHRI Schools (PM Schools for Rising India)',
    department: 'Ministry of Education',
    description: 'Upgrading existing schools to model schools with modern facilities.',
    category: 'Education',
    benefits: ['Modern infrastructure', 'Smart classrooms', 'Quality education', 'Holistic development', 'Exemplar schools'],
    eligibility: { isForStudents: true },
    applicationProcess: ['School nomination by states', 'Selection criteria', 'Upgradation', 'Continuous monitoring', 'Best practices sharing'],
    applicationLink: 'https://www.education.gov.in/'
  },
  {
    id: 'nishtha-scheme',
    title: 'NISHTHA (National Initiative for School Heads and Teachers Holistic Advancement)',
    department: 'Ministry of Education',
    description: 'Teacher training program for elementary education.',
    category: 'Education',
    benefits: ['Teacher capacity building', 'Pedagogical skills', 'Subject knowledge', 'Assessment techniques', 'Student counseling'],
    eligibility: {},
    applicationProcess: ['Teacher enrollment', 'Online modules', 'Face-to-face training', 'Assessment', 'Certification'],
    applicationLink: 'https://itpd.ncert.gov.in/'
  },
  {
    id: 'national-apprenticeship-promotion-scheme',
    title: 'National Apprenticeship Promotion Scheme (NAPS)',
    department: 'Ministry of Skill Development',
    description: 'Promoting apprenticeship training and providing stipend support.',
    category: 'Skill Development',
    benefits: ['Monthly stipend ₹1,500', 'On-job training', 'Industry exposure', 'Skill certification', 'Employment opportunity'],
    eligibility: { minAge: 14, maxAge: 40 },
    applicationProcess: ['Register on apprenticeshipindia.org', 'Apply for apprenticeship', 'Selection by employer', 'Training contract', 'Stipend payment'],
    applicationLink: 'https://www.apprenticeshipindia.org/'
  },
  {
    id: 'stand-up-india',
    title: 'Stand-Up India Scheme',
    department: 'Ministry of Finance',
    description: 'Bank loans for SC/ST and women entrepreneurs for greenfield enterprises.',
    category: 'Self-Employment',
    benefits: ['Loans ₹10 lakh to ₹1 crore', 'Greenfield enterprise', 'Manufacturing/Services/Trading', 'Low interest', 'Margin money support'],
    eligibility: { minAge: 18, category: 'SC' },
    applicationProcess: ['Business plan preparation', 'Bank application', 'Project appraisal', 'Loan sanction', 'Disbursement'],
    applicationLink: 'https://www.standupmitra.in/'
  },
  {
    id: 'startup-india-scheme',
    title: 'Startup India Scheme',
    department: 'Department for Promotion of Industry and Internal Trade',
    description: 'Ecosystem support for startups including funding, tax benefits, and mentorship.',
    category: 'Self-Employment',
    benefits: ['Tax exemption for 3 years', 'Easy compliance', 'Funding support', 'IPR fast track', 'Mentorship network'],
    eligibility: { minAge: 18 },
    applicationProcess: ['Register on startupindia.gov.in', 'Recognition certificate', 'Build business', 'Apply for benefits', 'Scaling support'],
    applicationLink: 'https://www.startupindia.gov.in/'
  },

  // Healthcare Schemes
  {
    id: 'mission-indradhanush',
    title: 'Mission Indradhanush',
    department: 'Ministry of Health and Family Welfare',
    description: 'Immunization program covering children and pregnant women.',
    category: 'Healthcare',
    benefits: ['12 vaccine-preventable diseases', 'Free immunization', 'Doorstep service', 'Health tracking', 'Universal coverage'],
    eligibility: {},
    applicationProcess: ['Visit nearest health center', 'Register child/pregnant woman', 'Vaccination schedule', 'Follow-up', 'Completion certificate'],
    applicationLink: 'https://nhm.gov.in/'
  },
  {
    id: 'national-dialysis-programme',
    title: 'Pradhan Mantri National Dialysis Programme',
    department: 'Ministry of Health',
    description: 'Free dialysis facilities for kidney patients in district hospitals.',
    category: 'Healthcare',
    benefits: ['Free dialysis', 'Available at district hospitals', 'No means test', 'Quality service', 'Life-saving treatment'],
    eligibility: {},
    applicationProcess: ['Visit district hospital', 'Medical assessment', 'Dialysis schedule', 'Regular treatment', 'Monitoring'],
    applicationLink: 'https://www.nhp.gov.in/'
  },
  {
    id: 'national-health-mission',
    title: 'National Health Mission (NHM)',
    department: 'Ministry of Health',
    description: 'Comprehensive healthcare delivery system strengthening primary health infrastructure.',
    category: 'Healthcare',
    benefits: ['Free healthcare at PHCs', 'Maternal health services', 'Child health services', 'Disease control programs', 'Emergency services'],
    eligibility: {},
    applicationProcess: ['Visit nearest PHC/CHC', 'Patient registration', 'Consultation', 'Treatment', 'Follow-up'],
    applicationLink: 'https://nhm.gov.in/'
  },
  {
    id: 'ayushman-bharat-health-wellness-centres',
    title: 'Ayushman Bharat - Health and Wellness Centres',
    department: 'Ministry of Health',
    description: 'Upgraded health centers providing comprehensive primary healthcare.',
    category: 'Healthcare',
    benefits: ['Free medicines', 'Free diagnostics', 'Maternal care', 'Geriatric care', 'Palliative care', 'Teleconsultation'],
    eligibility: {},
    applicationProcess: ['Visit nearest HWC', 'Registration', 'Comprehensive care', 'Referral if needed', 'Follow-up'],
    applicationLink: 'https://ab-hwc.nhp.gov.in/'
  },

  // Housing Schemes
  {
    id: 'pradhan-mantri-awas-yojana-gramin',
    title: 'Pradhan Mantri Awas Yojana - Gramin (PMAY-G)',
    department: 'Ministry of Rural Development',
    description: 'Housing for all in rural areas by providing assistance for construction.',
    category: 'Housing',
    benefits: ['₹1.20-1.30 lakh assistance', 'Plain/hilly area differential', 'Toilet construction included', 'Technical guidance', 'Convergence with MGNREGA'],
    eligibility: { residence: 'Rural', category: 'EWS' },
    applicationProcess: ['SECC verification', 'Beneficiary selection', 'Sanction order', 'Construction in phases', 'Completion and handover'],
    applicationLink: 'https://pmayg.nic.in/'
  },
  {
    id: 'pradhan-mantri-awas-yojana-urban',
    title: 'Pradhan Mantri Awas Yojana - Urban (PMAY-U)',
    department: 'Ministry of Housing and Urban Affairs',
    description: 'Housing for all in urban areas through various vertical options.',
    category: 'Housing',
    benefits: ['Interest subsidy on home loans', 'Affordable housing projects', 'Beneficiary-led construction', 'In-situ slum redevelopment', 'EWS/LIG/MIG categories'],
    eligibility: { residence: 'Urban', maxIncome: 1800000 },
    applicationProcess: ['Apply on pmaymis.gov.in', 'Document verification', 'Subsidy sanction', 'Loan processing', 'House construction/purchase'],
    applicationLink: 'https://pmaymis.gov.in/'
  },

  // Women & Child Development
  {
    id: 'beti-bachao-beti-padhao',
    title: 'Beti Bachao Beti Padhao',
    department: 'Ministry of Women & Child Development',
    description: 'National initiative to improve child sex ratio and promote girl child education.',
    category: 'Education',
    benefits: ['Community awareness', 'Education support', 'Skill development', 'Protection measures', 'Celebration of girl child'],
    eligibility: { gender: 'Female' },
    applicationProcess: ['Community participation', 'School enrollment', 'Scholarship applications', 'Skill training', 'Career support'],
    applicationLink: 'https://wcd.nic.in/'
  },
  {
    id: 'poshan-abhiyaan',
    title: 'POSHAN Abhiyaan (National Nutrition Mission)',
    department: 'Ministry of Women & Child Development',
    description: 'Holistic approach to nutrition ensuring optimal nutrition outcomes.',
    category: 'Healthcare',
    benefits: ['Growth monitoring', 'Nutrition education', 'Supplementary nutrition', 'Treatment of malnutrition', 'Behavior change communication'],
    eligibility: {},
    applicationProcess: ['Anganwadi registration', 'Growth monitoring', 'Nutrition supplementation', 'Health checkups', 'Counseling'],
    applicationLink: 'https://poshanabhiyaan.gov.in/'
  },
  {
    id: 'pradhan-mantri-matru-vandana',
    title: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    department: 'Ministry of Women & Child Development',
    description: 'Maternity benefit providing cash incentives for first live birth.',
    category: 'Healthcare',
    benefits: ['₹5,000 in three installments', 'Pregnancy registration', 'Institutional delivery incentive', 'Post-delivery care', 'Nutrition support'],
    eligibility: { gender: 'Female', minAge: 19 },
    applicationProcess: ['Register pregnancy at Anganwadi/Health center', 'First installment on registration', 'Second after 6 months', 'Third after delivery', 'DBT to account'],
    applicationLink: 'https://pmmvy-cas.nic.in/'
  },
  {
    id: 'national-creche-scheme',
    title: 'National Creche Scheme',
    department: 'Ministry of Women & Child Development',
    description: 'Day care centers for children of working mothers.',
    category: 'Social Security',
    benefits: ['Safe childcare', 'Nutritious meals', 'Early childhood care', 'Educational activities', 'Affordable fees'],
    eligibility: { gender: 'Female', maxIncome: 150000 },
    applicationProcess: ['Identify nearest creche', 'Child enrollment', 'Documentation', 'Regular attendance', 'Feedback'],
    applicationLink: 'https://wcd.nic.in/'
  },

  // Social Justice & Empowerment
  {
    id: 'pre-matric-scholarship-sc',
    title: 'Pre-Matric Scholarship for SC Students',
    department: 'Ministry of Social Justice',
    description: 'Financial assistance for SC students in classes 9 and 10.',
    category: 'Education',
    benefits: ['Day scholars ₹2,250 per annum', 'Hostellers ₹3,750 per annum', 'Books and stationery', 'Exam fees', 'Tuition fees'],
    eligibility: { isForStudents: true, category: 'SC', maxIncome: 250000 },
    applicationProcess: ['Apply through NSP', 'Submit caste certificate', 'Income certificate', 'School verification', 'Scholarship credit'],
    applicationLink: 'https://scholarships.gov.in/'
  },
  {
    id: 'top-class-education-sc-students',
    title: 'Top Class Education for SC Students',
    department: 'Ministry of Social Justice',
    description: 'Quality education in notified institutions for meritorious SC students.',
    category: 'Education',
    benefits: ['Full tuition fees', 'Living expenses', 'Books and stationery', 'Computer/laptop', 'Study tours'],
    eligibility: { isForStudents: true, category: 'SC', maxIncome: 800000 },
    applicationProcess: ['Admission in notified institution', 'Apply on NSP', 'Merit verification', 'Income verification', 'Full scholarship'],
    applicationLink: 'https://scholarships.gov.in/'
  },
  {
    id: 'national-overseas-scholarship',
    title: 'National Overseas Scholarship for SC/ST/OBC Students',
    department: 'Ministry of Social Justice',
    description: 'Financial assistance for pursuing Masters and PhD abroad.',
    category: 'Education',
    benefits: ['Full tuition fees', 'Maintenance allowance', 'Visa fees', 'Airfare', 'Contingency grant'],
    eligibility: { isForStudents: true, category: 'SC', maxIncome: 800000 },
    applicationProcess: ['Admission in foreign university', 'Apply online', 'Selection process', 'Document verification', 'Scholarship disbursement'],
    applicationLink: 'https://nosmsje.gov.in/'
  },
  {
    id: 'disability-pension-scheme',
    title: 'Indira Gandhi National Disability Pension Scheme',
    department: 'Ministry of Rural Development',
    description: 'Monthly pension for persons with severe or multiple disabilities.',
    category: 'Social Security',
    benefits: ['₹300-500 monthly pension', 'State contribution additional', 'No means test', 'Bank transfer', 'Regular payments'],
    eligibility: { isForPwD: true, minAge: 18, maxAge: 59 },
    applicationProcess: ['Apply at Block/Taluk office', 'Disability certificate', 'Age proof', 'Bank account', 'Pension approval'],
    applicationLink: 'https://nsap.nic.in/'
  },
  {
    id: 'widow-pension-scheme',
    title: 'Indira Gandhi National Widow Pension Scheme',
    department: 'Ministry of Rural Development',
    description: 'Monthly pension for widows below poverty line.',
    category: 'Social Security',
    benefits: ['₹300-500 monthly pension', 'State contribution additional', 'BPL category', 'Financial security', 'Regular payments'],
    eligibility: { gender: 'Female', minAge: 40, maxAge: 59, category: 'EWS' },
    applicationProcess: ['Apply at local authority', 'BPL certificate', 'Age and identity proof', 'Widow certificate', 'Pension sanction'],
    applicationLink: 'https://nsap.nic.in/'
  },
  {
    id: 'old-age-pension-scheme',
    title: 'Indira Gandhi National Old Age Pension Scheme',
    department: 'Ministry of Rural Development',
    description: 'Monthly pension for senior citizens from BPL families.',
    category: 'Social Security',
    benefits: ['₹200-500 monthly pension (60-79 years)', '₹500 for 80+ years', 'State contribution additional', 'Financial security', 'Dignity in old age'],
    eligibility: { minAge: 60, category: 'EWS' },
    applicationProcess: ['Apply at local authority', 'BPL certificate', 'Age proof', 'Bank account', 'Pension approval'],
    applicationLink: 'https://nsap.nic.in/'
  },

  // Labour & Employment
  {
    id: 'atal-bimit-vyakti-kalyan-yojana',
    title: 'Atal Bimit Vyakti Kalyan Yojana',
    department: 'Ministry of Labour',
    description: 'Unemployment allowance for insured persons who lose employment.',
    category: 'Social Security',
    benefits: ['25% of average daily wage', 'Maximum 90 days', 'ESIC contribution required', 'Re-skilling support', 'Job search assistance'],
    eligibility: { minAge: 18, maxAge: 60 },
    applicationProcess: ['ESIC registration', 'Unemployment certification', 'Apply online', 'Skill training enrollment', 'Allowance payment'],
    applicationLink: 'https://www.esic.gov.in/'
  },
  {
    id: 'pm-svanidhi-scheme',
    title: 'PM SVANidhi (PM Street Vendor\'s AtmaNirbhar Nidhi)',
    department: 'Ministry of Housing and Urban Affairs',
    description: 'Micro-credit scheme for street vendors affected by COVID-19.',
    category: 'Self-Employment',
    benefits: ['Collateral-free loan ₹10,000-50,000', 'Low interest rate', 'Timely repayment incentive', 'Digital transaction cashback', 'Upscaling opportunity'],
    eligibility: { minAge: 18, residence: 'Urban' },
    applicationProcess: ['Apply through lending institutions', 'Vendor certificate', 'Aadhaar verification', 'Loan approval', 'Business support'],
    applicationLink: 'https://pmsvanidhi.mohua.gov.in/'
  },
  {
    id: 'pradhan-mantri-rojgar-protsahan-yojana',
    title: 'Pradhan Mantri Rojgar Protsahan Yojana (PMRPY)',
    department: 'Ministry of Labour',
    description: 'Incentive for employers to generate new employment.',
    category: 'Employment',
    benefits: ['Government pays employer\'s EPF contribution', 'For new employees', 'First 3 years', 'Salary up to ₹15,000', 'Employment generation'],
    eligibility: { minAge: 18 },
    applicationProcess: ['Employer registers on unified portal', 'Employee enrollment', 'EPF compliance', 'Government contribution', 'Regular updates'],
    applicationLink: 'https://www.pmrpy.gov.in/'
  },

  // Infrastructure & Rural Development
  {
    id: 'pradhan-mantri-gram-sadak-yojana',
    title: 'Pradhan Mantri Gram Sadak Yojana (PMGSY)',
    department: 'Ministry of Rural Development',
    description: 'All-weather road connectivity to unconnected rural habitations.',
    category: 'Infrastructure',
    benefits: ['All-weather roads', 'Rural connectivity', 'Economic development', 'Access to services', 'Quality construction'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Village identification', 'Road planning', 'Approval', 'Construction', 'Maintenance'],
    applicationLink: 'https://pmgsy.nic.in/'
  },
  {
    id: 'shyama-prasad-mukherji-rurban-mission',
    title: 'Shyama Prasad Mukherji Rurban Mission',
    department: 'Ministry of Rural Development',
    description: 'Development of rural areas with urban-like facilities.',
    category: 'Rural Development',
    benefits: ['Infrastructure development', 'Economic activities', 'Skill development', 'Basic services', 'Quality of life improvement'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Cluster identification', 'Planning', 'Critical gap funding', 'Project execution', 'Monitoring'],
    applicationLink: 'https://rurban.gov.in/'
  },
  {
    id: 'swachh-bharat-mission-gramin',
    title: 'Swachh Bharat Mission - Gramin',
    department: 'Ministry of Jal Shakti',
    description: 'Making villages open defecation free and improving sanitation.',
    category: 'Infrastructure',
    benefits: ['Individual household toilet', '₹12,000 assistance', 'Solid/liquid waste management', 'Behavior change', 'ODF sustainability'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Apply through Gram Panchayat', 'Construction assistance', 'Toilet construction', 'Verification', 'ODF declaration'],
    applicationLink: 'https://swachhbharatmission.gov.in/'
  },
  {
    id: 'swachh-bharat-mission-urban',
    title: 'Swachh Bharat Mission - Urban',
    department: 'Ministry of Housing and Urban Affairs',
    description: 'Making cities garbage free and open defecation free.',
    category: 'Infrastructure',
    benefits: ['Individual toilet subsidy', 'Community toilets', 'Solid waste management', 'Waste segregation', 'Clean cities'],
    eligibility: { residence: 'Urban' },
    applicationProcess: ['Apply at ULB', 'Toilet construction', 'Waste management participation', 'Cleanliness drive', 'ODF certification'],
    applicationLink: 'http://swachhbharaturban.gov.in/'
  },

  // More State-Specific Schemes
  {
    id: 'mp-mukhyamantri-yuva-udyami-yojana',
    title: 'Mukhyamantri Yuva Udyami Yojana (Madhya Pradesh)',
    department: 'Government of Madhya Pradesh',
    description: 'Financial assistance for youth to start new enterprises in MP.',
    category: 'Self-Employment',
    benefits: ['Loan up to ₹1 crore', 'Interest subsidy', 'Margin money', 'Training support', 'Marketing assistance'],
    eligibility: { state: 'Madhya Pradesh', minAge: 18, maxAge: 40 },
    applicationProcess: ['Apply on MSME portal', 'Business plan', 'Training', 'Loan sanction', 'Project implementation'],
    applicationLink: 'https://msme.mponline.gov.in/'
  },
  {
    id: 'mp-ladli-laxmi-yojana',
    title: 'Ladli Laxmi Yojana (Madhya Pradesh)',
    department: 'Government of Madhya Pradesh',
    description: 'Scheme for girl child welfare and education in MP.',
    category: 'Education',
    benefits: ['₹1.18 lakh scholarship in installments', 'Education milestones', 'Class 6 to graduation', 'Age 21 marriage bonus', 'Empowerment'],
    eligibility: { state: 'Madhya Pradesh', gender: 'Female' },
    applicationProcess: ['Register within 1 year of birth', 'Birth certificate', 'Educational milestones', 'Document submission', 'Installment payment'],
    applicationLink: 'http://ladlilaxmi.mp.gov.in/'
  },
  {
    id: 'telangana-rythu-bandhu',
    title: 'Rythu Bandhu (Telangana)',
    department: 'Government of Telangana',
    description: 'Investment support to farmers for agriculture inputs.',
    category: 'Agriculture',
    benefits: ['₹10,000 per acre per season', 'Two seasons per year', 'Direct bank transfer', 'No intermediaries', 'Crop-neutral'],
    eligibility: { state: 'Telangana', residence: 'Rural' },
    applicationProcess: ['Land verification', 'Aadhaar linkage', 'Bank account verification', 'Automatic transfer', 'Utilization for farming'],
    applicationLink: 'https://www.telangana.gov.in/'
  },
  {
    id: 'telangana-kalyana-laxmi',
    title: 'Kalyana Lakshmi Scheme (Telangana)',
    department: 'Government of Telangana',
    description: 'Financial assistance for marriage of SC/ST/BC/Minority girls.',
    category: 'Social Security',
    benefits: ['₹1.16 lakh financial assistance', 'One-time payment', 'Marriage support', 'Women empowerment', 'Social security'],
    eligibility: { state: 'Telangana', gender: 'Female', category: 'SC', minAge: 18 },
    applicationProcess: ['Apply before marriage', 'Caste certificate', 'Age proof', 'Income certificate', 'Post-marriage disbursement'],
    applicationLink: 'https://www.telangana.gov.in/'
  },
  {
    id: 'ap-jagananna-vasathi-deevena',
    title: 'YSR Jagananna Vasathi Deevena (Andhra Pradesh)',
    department: 'Government of Andhra Pradesh',
    description: 'Reimbursement of mess and hostel charges for students in AP.',
    category: 'Education',
    benefits: ['₹20,000 per annum hostel fee', '₹15,000 for hostellers', 'Full reimbursement', 'All courses covered', 'Timely payment'],
    eligibility: { state: 'Andhra Pradesh', isForStudents: true, maxIncome: 250000 },
    applicationProcess: ['Apply on YSR portal', 'Hostel admission proof', 'Fee receipts', 'Verification', 'Reimbursement'],
    applicationLink: 'https://www.ysrbhis.in/'
  },
  {
    id: 'ap-amma-vodi',
    title: 'YSR Amma Vodi (Andhra Pradesh)',
    department: 'Government of Andhra Pradesh',
    description: 'Financial assistance to mothers sending children to school.',
    category: 'Education',
    benefits: ['₹15,000 per year', 'Direct to mother\'s account', 'Attendance-based', 'Education promotion', 'Dropout prevention'],
    eligibility: { state: 'Andhra Pradesh', gender: 'Female' },
    applicationProcess: ['Automatic enrollment', 'Child school enrollment', 'Attendance verification', 'Annual disbursement', 'Continued education'],
    applicationLink: 'https://www.ysrbhis.in/'
  },
  {
    id: 'punjab-ghar-ghar-rozgar',
    title: 'Ghar Ghar Rozgar (Punjab)',
    department: 'Government of Punjab',
    description: 'Employment generation scheme ensuring one job per household in Punjab.',
    category: 'Employment',
    benefits: ['Job placement', 'Skill training', 'Job fairs', 'Career counseling', 'Industry linkage'],
    eligibility: { state: 'Punjab', minAge: 18 },
    applicationProcess: ['Register on portal', 'Skill assessment', 'Training if needed', 'Job matching', 'Placement'],
    applicationLink: 'https://pgrkam.com/'
  },
  {
    id: 'haryana-mukhyamantri-parivar-samman-nidhi',
    title: 'Mukhyamantri Parivar Samman Nidhi (Haryana)',
    department: 'Government of Haryana',
    description: 'Social security pension for families with landholdings less than 5 acres.',
    category: 'Social Security',
    benefits: ['₹6,000 per year', 'Pension or skill training option', 'Small farmers support', 'Financial security', 'Livelihood enhancement'],
    eligibility: { state: 'Haryana', maxIncome: 180000 },
    applicationProcess: ['Apply on Antyodaya Saral portal', 'Income verification', 'Land records', 'Benefit selection', 'Disbursement'],
    applicationLink: 'https://saralharyana.gov.in/'
  },
  {
    id: 'bihar-mukhyamantri-kanya-utthan-yojana',
    title: 'Mukhyamantri Kanya Utthan Yojana (Bihar)',
    department: 'Government of Bihar',
    description: 'Education incentive for girl child from birth to graduation in Bihar.',
    category: 'Education',
    benefits: ['₹54,100 in phases', 'Birth to graduation', 'Sanitary napkins', 'Uniform allowance', 'Graduation incentive ₹25,000'],
    eligibility: { state: 'Bihar', gender: 'Female' },
    applicationProcess: ['Automatic enrollment at birth', 'School enrollment', 'Educational milestones', 'Graduation completion', 'Final installment'],
    applicationLink: 'http://edudep.bih.nic.in/'
  },
  {
    id: 'odisha-kalia-yojana',
    title: 'KALIA (Krushak Assistance for Livelihood and Income Augmentation) - Odisha',
    department: 'Government of Odisha',
    description: 'Financial assistance to farmers for cultivation and livelihoods.',
    category: 'Agriculture',
    benefits: ['₹10,000 per family per year', 'Cultivation support', 'Livelihood assistance', 'Life insurance', 'Interest-free loan'],
    eligibility: { state: 'Odisha', residence: 'Rural' },
    applicationProcess: ['Online application', 'Land verification', 'Bank account linking', 'Direct benefit transfer', 'Monitoring'],
    applicationLink: 'https://kalia.odisha.gov.in/'
  },
  {
    id: 'kerala-life-mission',
    title: 'LIFE (Livelihood Inclusion and Financial Empowerment) Mission - Kerala',
    department: 'Government of Kerala',
    description: 'Housing for homeless and landless families in Kerala.',
    category: 'Housing',
    benefits: ['₹4 lakh housing grant', 'Free land plot', 'Infrastructure facilities', 'Proper planning', 'Legal ownership'],
    eligibility: { state: 'Kerala', category: 'EWS' },
    applicationProcess: ['Application through LSG', 'Beneficiary verification', 'Plot allotment', 'Construction assistance', 'House completion'],
    applicationLink: 'https://life.lsgkerala.gov.in/'
  },
  {
    id: 'assam-orunodoi-scheme',
    title: 'Orunodoi Scheme (Assam)',
    department: 'Government of Assam',
    description: 'Direct benefit transfer to women beneficiaries for household expenses.',
    category: 'Social Security',
    benefits: ['₹830 per month', 'Direct to woman\'s account', 'No conditions', 'Financial security', 'Household support'],
    eligibility: { state: 'Assam', gender: 'Female', maxIncome: 250000 },
    applicationProcess: ['Online application', 'Document verification', 'Aadhaar and bank linking', 'Approval', 'Monthly transfer'],
    applicationLink: 'https://orunodoi.assam.gov.in/'
  },

  // Additional Central Schemes
  {
    id: 'aspirational-districts-programme',
    title: 'Aspirational Districts Programme',
    department: 'NITI Aayog',
    description: 'Transforming 112 most underdeveloped districts of India.',
    category: 'Rural Development',
    benefits: ['Focused development', 'Health and nutrition', 'Education', 'Agriculture', 'Infrastructure'],
    eligibility: {},
    applicationProcess: ['District level planning', 'Convergence of schemes', 'Implementation', 'Monthly monitoring', 'Ranking and competition'],
    applicationLink: 'https://aspirationaldistricts.nic.in/'
  },
  {
    id: 'rashtriya-gokul-mission',
    title: 'Rashtriya Gokul Mission',
    department: 'Ministry of Fisheries, Animal Husbandry & Dairying',
    description: 'Indigenous cattle breed conservation and development.',
    category: 'Agriculture',
    benefits: ['Breed improvement', 'Gokul Grams', 'Cattle insurance', 'Technology adoption', 'Better milk yield'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Contact animal husbandry department', 'Breed selection', 'Technical support', 'Insurance coverage', 'Marketing support'],
    applicationLink: 'https://dahd.nic.in/'
  },
  {
    id: 'blue-revolution',
    title: 'Blue Revolution (Fisheries Development)',
    department: 'Ministry of Fisheries, Animal Husbandry & Dairying',
    description: 'Integrated development and management of fisheries.',
    category: 'Agriculture',
    benefits: ['Infrastructure development', 'Aquaculture promotion', 'Fisher welfare', 'Marketing support', 'Technology transfer'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Apply through Fisheries Department', 'Project proposal', 'Technical feasibility', 'Financial assistance', 'Implementation'],
    applicationLink: 'https://fisheries.gov.in/'
  },
  {
    id: 'namami-gange',
    title: 'Namami Gange Programme',
    department: 'Ministry of Jal Shakti',
    description: 'Integrated conservation mission for River Ganga.',
    category: 'Environment',
    benefits: ['River cleaning', 'Sewage treatment', 'Afforestation', 'Public awareness', 'Biodiversity conservation'],
    eligibility: {},
    applicationProcess: ['Community participation', 'Ghat adoption', 'Pollution reporting', 'Awareness programs', 'Cleanup drives'],
    applicationLink: 'https://nmcg.nic.in/'
  },
  {
    id: 'national-rural-livelihoods-mission',
    title: 'National Rural Livelihoods Mission (Aajeevika)',
    department: 'Ministry of Rural Development',
    description: 'Poverty alleviation through sustainable livelihoods for rural poor.',
    category: 'Rural Development',
    benefits: ['Self-help group formation', 'Skill training', 'Credit linkage', 'Market linkage', 'Livelihood support'],
    eligibility: { residence: 'Rural', category: 'EWS' },
    applicationProcess: ['SHG formation', 'Capacity building', 'Micro-enterprise development', 'Credit access', 'Market linkage'],
    applicationLink: 'https://aajeevika.gov.in/'
  },
  {
    id: 'deen-dayal-upadhyaya-gramin-kaushalya-yojana',
    title: 'Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)',
    department: 'Ministry of Rural Development',
    description: 'Skill development and placement program for rural youth.',
    category: 'Skill Development',
    benefits: ['Free skill training', 'Boarding and lodging', 'Stipend during training', 'Placement assistance', '70% placement mandatory'],
    eligibility: { residence: 'Rural', minAge: 15, maxAge: 35, category: 'EWS' },
    applicationProcess: ['Mobilization by project partners', 'Counseling', 'Training', 'Certification', 'Placement'],
    applicationLink: 'https://ddugky.gov.in/'
  },
  {
    id: 'ek-bharat-shreshtha-bharat',
    title: 'Ek Bharat Shreshtha Bharat',
    department: 'Ministry of Education',
    description: 'Cultural exchange program between states to promote national integration.',
    category: 'Education',
    benefits: ['Cultural exchange', 'Language learning', 'Tourism promotion', 'Student exchange', 'National integration'],
    eligibility: { isForStudents: true },
    applicationProcess: ['School participation', 'State pairing', 'Exchange programs', 'Cultural activities', 'Documentation'],
    applicationLink: 'https://www.mygov.in/campaigns/ek-bharat-shreshtha-bharat/'
  },
  {
    id: 'khelo-india-scheme',
    title: 'Khelo India Scheme',
    department: 'Ministry of Youth Affairs and Sports',
    description: 'Sports promotion and talent identification program.',
    category: 'Sports',
    benefits: ['Sports infrastructure', 'Talent identification', 'Annual scholarship ₹5 lakh', 'Training support', 'Competition participation'],
    eligibility: { isForStudents: true, minAge: 10, maxAge: 18 },
    applicationProcess: ['Participation in Khelo India Games', 'Talent identification', 'Selection', 'Scholarship grant', 'Training support'],
    applicationLink: 'https://kheloindia.gov.in/'
  },
  {
    id: 'fit-india-movement',
    title: 'Fit India Movement',
    department: 'Ministry of Youth Affairs and Sports',
    description: 'National fitness movement promoting physical activity and sports.',
    category: 'Sports',
    benefits: ['Fitness awareness', 'Community events', 'Fitness challenges', 'School programs', 'Healthy lifestyle'],
    eligibility: {},
    applicationProcess: ['Individual participation', 'Community events', 'Fitness tracking', 'Challenges', 'Certification'],
    applicationLink: 'https://fitindia.gov.in/'
  },
  {
    id: 'national-apprenticeship-training-scheme',
    title: 'National Apprenticeship Training Scheme (NATS)',
    department: 'Ministry of Skill Development',
    description: 'On-the-job training in industry for technical and non-technical trades.',
    category: 'Skill Development',
    benefits: ['Practical training', 'Monthly stipend', 'Industry exposure', 'Certificate', 'Employment opportunity'],
    eligibility: { minAge: 14, maxAge: 40 },
    applicationProcess: ['Apply on NAPS portal', 'Employer selection', 'Apprenticeship contract', 'Training period', 'Certification'],
    applicationLink: 'https://apprenticeshipindia.org/'
  },
  {
    id: 'skill-india-mission',
    title: 'Skill India Mission',
    department: 'Ministry of Skill Development',
    description: 'Umbrella initiative to train 40 crore people in different skills.',
    category: 'Skill Development',
    benefits: ['Industry-relevant training', 'Placement support', 'Recognition of prior learning', 'Certification', 'Entrepreneurship support'],
    eligibility: { minAge: 15 },
    applicationProcess: ['Enroll in training center', 'Course selection', 'Training completion', 'Assessment', 'Certification'],
    applicationLink: 'https://www.skillindia.gov.in/'
  },

  // Financial Inclusion
  {
    id: 'pradhan-mantri-jan-dhan-yojana',
    title: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)',
    department: 'Ministry of Finance',
    description: 'Financial inclusion program ensuring access to banking services.',
    category: 'Financial Inclusion',
    benefits: ['Zero balance account', 'RuPay debit card', '₹10,000 overdraft', 'Accident insurance ₹2 lakh', 'Life insurance ₹30,000'],
    eligibility: { minAge: 10 },
    applicationProcess: ['Visit any bank branch', 'Minimal documentation', 'Account opening', 'RuPay card issuance', 'Banking services'],
    applicationLink: 'https://pmjdy.gov.in/'
  },
  {
    id: 'pradhan-mantri-jeevan-jyoti-bima-yojana',
    title: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)',
    department: 'Ministry of Finance',
    description: 'Life insurance scheme providing coverage at affordable premium.',
    category: 'Insurance',
    benefits: ['₹2 lakh life cover', 'Annual premium ₹436', 'Any cause death coverage', 'Easy enrollment', 'Renewable yearly'],
    eligibility: { minAge: 18, maxAge: 50 },
    applicationProcess: ['Enroll through bank', 'Auto-debit consent', 'Premium deduction', 'Coverage active', 'Claim on death'],
    applicationLink: 'https://www.pmjjby.gov.in/'
  },
  {
    id: 'atal-pension-yojana-new',
    title: 'Atal Pension Yojana (APY) Enhanced',
    department: 'PFRDA',
    description: 'Pension scheme for unorganized sector workers ensuring old age income.',
    category: 'Social Security',
    benefits: ['Guaranteed pension ₹1,000-5,000', 'Government co-contribution', 'Spouse pension', 'Pension corpus to nominee', 'Tax benefits'],
    eligibility: { minAge: 18, maxAge: 40 },
    applicationProcess: ['Savings account required', 'Enroll through bank/post office', 'Choose pension amount', 'Regular contributions', 'Pension at 60'],
    applicationLink: 'https://enps.nsdl.com/eNPS/APY.html'
  }
];
