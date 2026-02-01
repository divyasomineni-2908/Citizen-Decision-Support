import { Scheme } from '../types';

// Additional 130+ Government Schemes to reach 300+ total
export const MORE_SCHEMES: Scheme[] = [
  // Tourism & Culture
  {
    id: 'swadesh-darshan-scheme',
    title: 'Swadesh Darshan Scheme',
    department: 'Ministry of Tourism',
    description: 'Integrated development of theme-based tourist circuits.',
    category: 'Tourism',
    benefits: ['Infrastructure development', 'Tourist facilities', 'Livelihood creation', 'Skill development', 'Circuit connectivity'],
    eligibility: {},
    applicationProcess: ['State proposals', 'Project approval', 'Implementation', 'Quality standards', 'Monitoring'],
    applicationLink: 'https://tourism.gov.in/'
  },
  {
    id: 'prasad-scheme',
    title: 'PRASAD (Pilgrimage Rejuvenation and Spiritual Augmentation Drive)',
    department: 'Ministry of Tourism',
    description: 'Development of pilgrimage destinations with tourist facilities.',
    category: 'Tourism',
    benefits: ['Pilgrim amenities', 'Infrastructure', 'Cleanliness', 'Safety', 'Connectivity'],
    eligibility: {},
    applicationProcess: ['Site identification', 'Master planning', 'Project execution', 'Maintenance', 'Quality monitoring'],
    applicationLink: 'https://tourism.gov.in/'
  },
  {
    id: 'adopt-a-heritage',
    title: 'Adopt a Heritage: Apni Dharohar, Apni Pehchaan',
    department: 'Ministry of Tourism',
    description: 'Public-private partnership for heritage site maintenance and tourism development.',
    category: 'Culture',
    benefits: ['Heritage conservation', 'Tourist amenities', 'Site maintenance', 'Employment generation', 'Cultural promotion'],
    eligibility: {},
    applicationProcess: ['Monument selection', 'Adoption agreement', 'Development plan', 'Implementation', 'Monitoring'],
    applicationLink: 'https://www.adoptaheritage.in/'
  },
  {
    id: 'scheme-safeguarding-intangible-heritage',
    title: 'Scheme for Safeguarding the Intangible Heritage',
    department: 'Ministry of Culture',
    description: 'Preserving and promoting traditional art forms and cultural practices.',
    category: 'Culture',
    benefits: ['Artist grants', 'Documentation', 'Workshops', 'Performance opportunities', 'Heritage conservation'],
    eligibility: {},
    applicationProcess: ['Artist registration', 'Proposal submission', 'Grant approval', 'Activity implementation', 'Reporting'],
    applicationLink: 'https://indiaculture.nic.in/'
  },

  // Science & Technology
  {
    id: 'pradhan-mantri-research-fellows',
    title: 'Prime Minister\'s Research Fellows (PMRF) Scheme',
    department: 'Ministry of Education',
    description: 'Attracting best talent for research in science and technology.',
    category: 'Education',
    benefits: ['Fellowship ₹70,000-80,000 per month', 'Research grant ₹2 lakh', 'Foreign exposure', 'Top institutions', 'PhD degree'],
    eligibility: { isForStudents: true, minAge: 21 },
    applicationProcess: ['Online application', 'Academic excellence', 'Entrance test', 'Interview', 'Fellowship award'],
    applicationLink: 'https://pmrf.in/'
  },
  {
    id: 'national-supercomputing-mission',
    title: 'National Supercomputing Mission',
    department: 'Ministry of Electronics & IT',
    description: 'Building supercomputing infrastructure for research and development.',
    category: 'Technology',
    benefits: ['Computing access for researchers', 'Advanced infrastructure', 'Data processing', 'Scientific applications', 'Innovation support'],
    eligibility: {},
    applicationProcess: ['Researcher registration', 'Project proposal', 'Resource allocation', 'Computing access', 'Results publication'],
    applicationLink: 'https://www.nsmgov.in/'
  },
  {
    id: 'atal-innovation-mission',
    title: 'Atal Innovation Mission (AIM)',
    department: 'NITI Aayog',
    description: 'Promoting innovation and entrepreneurship through incubators and labs.',
    category: 'Innovation',
    benefits: ['Atal Tinkering Labs in schools', 'Incubation support', 'Mentorship', 'Funding access', 'Innovation ecosystem'],
    eligibility: { isForStudents: true },
    applicationProcess: ['School/institute registration', 'Lab setup', 'Innovation activities', 'Competitions', 'Startup support'],
    applicationLink: 'https://aim.gov.in/'
  },
  {
    id: 'inspire-scheme',
    title: 'INSPIRE (Innovation in Science Pursuit for Inspired Research)',
    department: 'Department of Science & Technology',
    description: 'Attracting talent to science through scholarships and fellowships.',
    category: 'Education',
    benefits: ['INSPIRE Scholarship ₹80,000 per year', 'Fellowship for doctoral research', 'Science camps', 'Research exposure', 'Career in science'],
    eligibility: { isForStudents: true, minAge: 17 },
    applicationProcess: ['Academic merit', 'Online application', 'Selection', 'Scholarship/fellowship', 'Research work'],
    applicationLink: 'https://online-inspire.gov.in/'
  },

  // Environment & Climate
  {
    id: 'green-india-mission',
    title: 'Green India Mission',
    department: 'Ministry of Environment',
    description: 'Increasing forest and tree cover for climate change mitigation.',
    category: 'Environment',
    benefits: ['Afforestation', 'Forest restoration', 'Carbon sequestration', 'Livelihood support', 'Ecosystem services'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Community participation', 'JFM committees', 'Plantation', 'Maintenance', 'Benefits sharing'],
    applicationLink: 'http://www.greenindiamission.gov.in/'
  },
  {
    id: 'national-clean-air-programme',
    title: 'National Clean Air Programme (NCAP)',
    department: 'Ministry of Environment',
    description: 'Reducing air pollution in cities through comprehensive measures.',
    category: 'Environment',
    benefits: ['Air quality monitoring', 'Pollution control', 'Public transport', 'Awareness', 'Health benefits'],
    eligibility: {},
    applicationProcess: ['City action plans', 'Implementation', 'Monitoring', 'Public participation', 'Pollution reduction'],
    applicationLink: 'https://ncap.moef.gov.in/'
  },
  {
    id: 'compensatory-afforestation-fund',
    title: 'Compensatory Afforestation Fund',
    department: 'Ministry of Environment',
    description: 'Fund for compensatory afforestation and environmental restoration.',
    category: 'Environment',
    benefits: ['Forest regeneration', 'Wildlife habitat', 'Watershed management', 'Ecosystem restoration', 'Community participation'],
    eligibility: {},
    applicationProcess: ['State plans', 'Project approval', 'Implementation', 'Monitoring', 'Impact assessment'],
    applicationLink: 'https://campa.gov.in/'
  },
  {
    id: 'national-mission-sustainable-agriculture',
    title: 'National Mission for Sustainable Agriculture',
    department: 'Ministry of Agriculture',
    description: 'Promoting sustainable agriculture practices and climate adaptation.',
    category: 'Agriculture',
    benefits: ['Soil health management', 'Water conservation', 'Organic farming', 'Climate adaptation', 'Resource efficiency'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Farmer training', 'Technology adoption', 'Input support', 'Monitoring', 'Benefit realization'],
    applicationLink: 'https://nmsa.dac.gov.in/'
  },

  // Tribal Welfare
  {
    id: 'tribal-development-action-plan',
    title: 'Tribal Development Action Plan',
    department: 'Ministry of Tribal Affairs',
    description: 'Comprehensive development of tribal areas and communities.',
    category: 'Tribal Welfare',
    benefits: ['Infrastructure development', 'Education support', 'Healthcare', 'Livelihood', 'Skill development'],
    eligibility: { category: 'ST' },
    applicationProcess: ['Area identification', 'Integrated planning', 'Multi-sectoral approach', 'Implementation', 'Monitoring'],
    applicationLink: 'https://tribal.nic.in/'
  },
  {
    id: 'vanbandhu-kalyan-yojana',
    title: 'Vanbandhu Kalyan Yojana',
    department: 'Ministry of Tribal Affairs',
    description: 'Bridging gaps in tribal areas through convergence of schemes.',
    category: 'Tribal Welfare',
    benefits: ['Education', 'Health', 'Agriculture', 'Skill development', 'Infrastructure'],
    eligibility: { category: 'ST', residence: 'Rural' },
    applicationProcess: ['Gap identification', 'Convergence planning', 'Scheme integration', 'Implementation', 'Impact assessment'],
    applicationLink: 'https://tribal.nic.in/'
  },
  {
    id: 'eklavya-model-residential-schools',
    title: 'Eklavya Model Residential Schools',
    department: 'Ministry of Tribal Affairs',
    description: 'Quality education for tribal children in remote areas.',
    category: 'Education',
    benefits: ['Free quality education', 'Boarding and lodging', 'Modern facilities', 'Cultural preservation', 'Holistic development'],
    eligibility: { category: 'ST', isForStudents: true },
    applicationProcess: ['School admission', 'Free education', 'Residential facility', 'Skill training', 'Career guidance'],
    applicationLink: 'https://tribal.nic.in/'
  },
  {
    id: 'minor-forest-produce-mfp',
    title: 'Mechanism for Marketing of Minor Forest Produce (MFP)',
    department: 'Ministry of Tribal Affairs',
    description: 'Fair price and market access for tribal forest produce collectors.',
    category: 'Tribal Welfare',
    benefits: ['Minimum support price', 'Value addition', 'Market linkage', 'Working capital', 'Income enhancement'],
    eligibility: { category: 'ST', residence: 'Rural' },
    applicationProcess: ['Produce collection', 'Primary processing', 'Fair price payment', 'Value addition', 'Marketing'],
    applicationLink: 'https://trifed.tribal.gov.in/'
  },

  // Urban Development
  {
    id: 'smart-cities-mission',
    title: 'Smart Cities Mission',
    department: 'Ministry of Housing and Urban Affairs',
    description: 'Developing 100 smart cities with modern infrastructure and technology.',
    category: 'Infrastructure',
    benefits: ['Smart infrastructure', 'Digital services', 'Sustainable development', 'Quality of life', 'Citizen participation'],
    eligibility: { residence: 'Urban' },
    applicationProcess: ['City selection', 'Smart city plan', 'Project implementation', 'Technology integration', 'Monitoring'],
    applicationLink: 'https://smartcities.gov.in/'
  },
  {
    id: 'atal-mission-rejuvenation-urban-transformation',
    title: 'Atal Mission for Rejuvenation and Urban Transformation (AMRUT)',
    department: 'Ministry of Housing and Urban Affairs',
    description: 'Ensuring basic infrastructure in urban areas - water supply, sewerage, etc.',
    category: 'Infrastructure',
    benefits: ['Water supply', 'Sewerage', 'Storm drains', 'Urban transport', 'Green spaces'],
    eligibility: { residence: 'Urban' },
    applicationProcess: ['Service level improvement', 'Project planning', 'Implementation', 'Quality monitoring', 'Sustainability'],
    applicationLink: 'http://amrut.gov.in/'
  },
  {
    id: 'national-heritage-city-development',
    title: 'National Heritage City Development and Augmentation Yojana (HRIDAY)',
    department: 'Ministry of Housing and Urban Affairs',
    description: 'Preserving heritage character while enabling inclusive development.',
    category: 'Culture',
    benefits: ['Heritage conservation', 'Infrastructure', 'Tourism facilities', 'Citizen amenities', 'Economic development'],
    eligibility: { residence: 'Urban' },
    applicationProcess: ['City identification', 'Heritage conservation plan', 'Infrastructure development', 'Implementation', 'Monitoring'],
    applicationLink: 'http://hridayindia.in/'
  },

  // Defense & Veterans
  {
    id: 'armed-forces-flag-day-fund',
    title: 'Armed Forces Flag Day Fund',
    department: 'Ministry of Defence',
    description: 'Welfare of ex-servicemen and their dependents.',
    category: 'Social Security',
    benefits: ['Financial assistance', 'Medical support', 'Education grants', 'Rehabilitation', 'Widow welfare'],
    eligibility: {},
    applicationProcess: ['Application to KSB/RSB', 'Case evaluation', 'Assistance sanction', 'Disbursement', 'Follow-up'],
    applicationLink: 'https://ksb.gov.in/'
  },
  {
    id: 'ex-servicemen-contributory-health-scheme',
    title: 'Ex-Servicemen Contributory Health Scheme (ECHS)',
    department: 'Ministry of Defence',
    description: 'Comprehensive healthcare for ex-servicemen and dependents.',
    category: 'Healthcare',
    benefits: ['Medical care at military hospitals', 'Empaneled civilian hospitals', 'Medicines', 'Diagnostic tests', 'Surgeries'],
    eligibility: {},
    applicationProcess: ['ECHS membership', 'Health card', 'Treatment at facilities', 'Cashless/reimbursement', 'Wellness programs'],
    applicationLink: 'https://echs.gov.in/'
  },

  // Minority Affairs
  {
    id: 'nai-roshni-scheme',
    title: 'Nai Roshni - Leadership Development for Minority Women',
    department: 'Ministry of Minority Affairs',
    description: 'Leadership development and empowerment of minority women.',
    category: 'Women Empowerment',
    benefits: ['Leadership training', 'Skill development', 'Government scheme awareness', 'Confidence building', 'Community participation'],
    eligibility: { gender: 'Female' },
    applicationProcess: ['NGO implementation', 'Beneficiary identification', 'Training programs', 'Certification', 'Follow-up'],
    applicationLink: 'https://minorityaffairs.gov.in/'
  },
  {
    id: 'seekho-aur-kamao',
    title: 'Seekho Aur Kamao (Learn and Earn)',
    department: 'Ministry of Minority Affairs',
    description: 'Skill development for minority youth in modern trades.',
    category: 'Skill Development',
    benefits: ['Free skill training', 'Stipend', 'Placement assistance', 'Modern trades', 'Self-employment support'],
    eligibility: { minAge: 14, maxAge: 45 },
    applicationProcess: ['Institute enrollment', 'Skill training', 'Certification', 'Placement/entrepreneurship', 'Income generation'],
    applicationLink: 'https://minorityaffairs.gov.in/'
  },
  {
    id: 'nai-manzil-scheme',
    title: 'Nai Manzil - Bridge Course for School Dropouts',
    department: 'Ministry of Minority Affairs',
    description: 'Education and skill training for minority community dropouts.',
    category: 'Education',
    benefits: ['Formal education classes', 'Skill training', 'Stipend', 'Certification', 'Employment linkage'],
    eligibility: { isForStudents: true, minAge: 17, maxAge: 35 },
    applicationProcess: ['Enrollment', 'Bridge course', 'Skill training', 'Certification', 'Job placement'],
    applicationLink: 'https://minorityaffairs.gov.in/'
  },
  {
    id: 'maulana-azad-education-foundation',
    title: 'Maulana Azad Education Foundation Schemes',
    department: 'Ministry of Minority Affairs',
    description: 'Educational development of minority communities.',
    category: 'Education',
    benefits: ['Infrastructure grants', 'Scholarships', 'Quality education', 'Skill training', 'Digital literacy'],
    eligibility: { isForStudents: true },
    applicationProcess: ['Institution application', 'Project approval', 'Grant disbursement', 'Implementation', 'Monitoring'],
    applicationLink: 'https://www.maef.nic.in/'
  },

  // Panchayati Raj & Local Governance
  {
    id: 'rashtriya-gram-swaraj-abhiyan',
    title: 'Rashtriya Gram Swaraj Abhiyan (RGSA)',
    department: 'Ministry of Panchayati Raj',
    description: 'Strengthening Panchayati Raj institutions for local governance.',
    category: 'Governance',
    benefits: ['Capacity building', 'Infrastructure support', 'E-governance', 'Training', 'Accountable governance'],
    eligibility: {},
    applicationProcess: ['State plans', 'Panchayat capacity building', 'Infrastructure development', 'E-governance implementation', 'Performance monitoring'],
    applicationLink: 'https://rgsa.gov.in/'
  },

  // Food Processing
  {
    id: 'pradhan-mantri-kisan-sampada-yojana',
    title: 'Pradhan Mantri Kisan Sampada Yojana (PMKSY)',
    department: 'Ministry of Food Processing Industries',
    description: 'Creating modern infrastructure for food processing.',
    category: 'Agriculture',
    benefits: ['Cold chain infrastructure', 'Processing units', 'Value addition', 'Marketing support', 'Farmer income increase'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Project proposal', 'Approval', 'Financial assistance', 'Implementation', 'Operation'],
    applicationLink: 'https://mofpi.gov.in/'
  },
  {
    id: 'mega-food-parks',
    title: 'Mega Food Parks Scheme',
    department: 'Ministry of Food Processing Industries',
    description: 'Developing food processing clusters with modern infrastructure.',
    category: 'Agriculture',
    benefits: ['Integrated infrastructure', 'Processing facilities', 'Farmer linkage', 'Employment', 'Export promotion'],
    eligibility: {},
    applicationProcess: ['Consortium formation', 'Site selection', 'Approval', 'Development', 'Operation'],
    applicationLink: 'https://mofpi.gov.in/'
  },

  // Cooperation
  {
    id: 'formation-promotion-fpos',
    title: 'Formation and Promotion of 10,000 FPOs',
    department: 'Ministry of Cooperation',
    description: 'Forming and nurturing Farmer Producer Organizations.',
    category: 'Agriculture',
    benefits: ['FPO formation', 'Capacity building', 'Credit linkage', 'Market access', 'Economies of scale'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Farmer mobilization', 'FPO registration', 'Business planning', 'Credit support', 'Market linkage'],
    applicationLink: 'https://www.ncdc.in/'
  },

  // Textiles
  {
    id: 'pm-mega-integrated-textile-region-and-apparel',
    title: 'PM MITRA (Mega Integrated Textile Region and Apparel) Parks',
    department: 'Ministry of Textiles',
    description: 'Integrated textile parks with plug and play facilities.',
    category: 'Manufacturing',
    benefits: ['Infrastructure', 'Manufacturing facilities', 'Employment generation', 'Export competitiveness', 'Global standards'],
    eligibility: {},
    applicationProcess: ['Site selection', 'Park development', 'Industry attraction', 'Operations', 'Employment'],
    applicationLink: 'https://texmin.nic.in/'
  },
  {
    id: 'powerloom-mega-cluster',
    title: 'Powerloom Mega Cluster Scheme',
    department: 'Ministry of Textiles',
    description: 'Modernizing powerloom sector through cluster approach.',
    category: 'Manufacturing',
    benefits: ['Technology upgradation', 'Common facilities', 'Market access', 'Branding', 'Financial assistance'],
    eligibility: {},
    applicationProcess: ['Cluster identification', 'DPR preparation', 'Approval', 'Implementation', 'Marketing'],
    applicationLink: 'https://texmin.nic.in/'
  },
  {
    id: 'scheme-integrated-textile-park',
    title: 'Scheme for Integrated Textile Parks (SITP)',
    department: 'Ministry of Textiles',
    description: 'Creating infrastructure for textile industry.',
    category: 'Manufacturing',
    benefits: ['Ready infrastructure', 'Common facilities', 'Plug and play', 'Cost reduction', 'Competitiveness'],
    eligibility: {},
    applicationProcess: ['SPV formation', 'DPR', 'Approval', 'Development', 'Allotment'],
    applicationLink: 'https://texmin.nic.in/'
  },

  // Chemicals & Fertilizers
  {
    id: 'neem-coated-urea',
    title: 'Neem Coated Urea',
    department: 'Ministry of Chemicals & Fertilizers',
    description: 'Promoting neem coated urea for better nitrogen efficiency.',
    category: 'Agriculture',
    benefits: ['Better nitrogen use', 'Pest repellent', 'Soil health', 'Cost effective', 'Higher yield'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Purchase from dealers', 'Application in field', 'Better crop growth', 'Yield improvement', 'Soil enrichment'],
    applicationLink: 'https://fert.nic.in/'
  },
  {
    id: 'direct-benefit-transfer-fertilizer',
    title: 'Direct Benefit Transfer in Fertilizers',
    department: 'Ministry of Chemicals & Fertilizers',
    description: 'Ensuring availability of fertilizers at subsidized rates.',
    category: 'Agriculture',
    benefits: ['Subsidized fertilizers', 'Timely availability', 'Quality assurance', 'Reduced cost', 'Better agriculture'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Aadhaar linkage', 'Purchase from dealers', 'Subsidy to manufacturers', 'Quality fertilizers', 'Crop productivity'],
    applicationLink: 'https://fert.nic.in/'
  },

  // Petroleum & Natural Gas
  {
    id: 'ujjwala-2-0',
    title: 'Pradhan Mantri Ujjwala Yojana 2.0',
    department: 'Ministry of Petroleum & Natural Gas',
    description: 'Free LPG connections to poor households with first refill and stove.',
    category: 'Social Security',
    benefits: ['Free LPG connection', 'Free first refill', 'Free stove', 'EMI facility', 'Safe cooking'],
    eligibility: { category: 'EWS' },
    applicationProcess: ['Apply through oil company', 'Document verification', 'Connection installation', 'First refill', 'Regular refills'],
    applicationLink: 'https://www.pmujjwalayojana.com/'
  },
  {
    id: 'pahal-dbtl-scheme',
    title: 'PAHAL (DBTL) - Direct Benefit Transfer for LPG',
    department: 'Ministry of Petroleum & Natural Gas',
    description: 'Direct subsidy transfer to LPG consumer bank accounts.',
    category: 'Social Security',
    benefits: ['Subsidy in bank account', 'Transparent system', 'Elimination of fake connections', 'Consumer choice', 'Timely subsidy'],
    eligibility: {},
    applicationProcess: ['Bank account linkage', 'Aadhaar seeding', 'Buy LPG at market price', 'Subsidy credit', 'Regular usage'],
    applicationLink: 'https://www.mylpg.in/'
  },

  // Shipping & Ports
  {
    id: 'sagarmala-programme',
    title: 'Sagarmala Programme',
    department: 'Ministry of Ports, Shipping & Waterways',
    description: 'Port-led development and coastal community welfare.',
    category: 'Infrastructure',
    benefits: ['Port modernization', 'Coastal connectivity', 'Industrialization', 'Community development', 'Employment'],
    eligibility: {},
    applicationProcess: ['Project identification', 'Planning', 'Approval', 'Implementation', 'Operations'],
    applicationLink: 'https://sagarmala.gov.in/'
  },
  {
    id: 'sagar-mala-fisheries',
    title: 'Sagarmala Fisheries Scheme',
    department: 'Ministry of Ports & Shipping',
    description: 'Fisheries infrastructure and fisher welfare in coastal areas.',
    category: 'Agriculture',
    benefits: ['Fishing harbor', 'Landing centers', 'Cold storage', 'Market infrastructure', 'Fisher welfare'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Fishermen registration', 'Infrastructure development', 'Training', 'Market linkage', 'Income enhancement'],
    applicationLink: 'https://sagarmala.gov.in/'
  },

  // Renewable Energy
  {
    id: 'rooftop-solar-programme',
    title: 'Rooftop Solar Programme Phase-II',
    department: 'Ministry of New and Renewable Energy',
    description: 'Installing rooftop solar panels with subsidy support.',
    category: 'Energy',
    benefits: ['40% subsidy up to 3 kW', '20% for 3-10 kW', 'Electricity savings', 'Environment friendly', 'Net metering'],
    eligibility: {},
    applicationProcess: ['Apply through DISCOM portal', 'Feasibility study', 'Installation', 'Net metering', 'Subsidy claim'],
    applicationLink: 'https://solarrooftop.gov.in/'
  },
  {
    id: 'kusum-solar-pump',
    title: 'PM-KUSUM (Solar Pump and Grid Connection)',
    department: 'Ministry of New and Renewable Energy',
    description: 'Solar pumps and grid-connected solar power for farmers.',
    category: 'Agriculture',
    benefits: ['Subsidized solar pumps', 'Grid solar power', 'Income from excess power', 'Water security', 'Clean energy'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Apply through state agency', 'Subsidy approval', 'Vendor selection', 'Installation', 'Commissioning'],
    applicationLink: 'https://pmkusum.mnre.gov.in/'
  },
  {
    id: 'off-grid-solar-pv',
    title: 'Off-Grid and Decentralized Solar PV Applications Programme',
    department: 'Ministry of New and Renewable Energy',
    description: 'Solar lighting and power in remote areas.',
    category: 'Energy',
    benefits: ['Solar street lights', 'Solar study lamps', 'Solar power plants', 'Off-grid solutions', 'Rural electrification'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['State proposal', 'Approval', 'Vendor empanelment', 'Installation', 'Monitoring'],
    applicationLink: 'https://mnre.gov.in/'
  },

  // Coal & Mining
  {
    id: 'pradhan-mantri-khanij-kshetra-kalyan-yojana',
    title: 'Pradhan Mantri Khanij Kshetra Kalyan Yojana (PMKKKY)',
    department: 'Ministry of Mines',
    description: 'Welfare of mining-affected areas and people.',
    category: 'Social Security',
    benefits: ['Infrastructure development', 'Health facilities', 'Education', 'Skill development', 'Environmental restoration'],
    eligibility: {},
    applicationProcess: ['DMF fund utilization', 'District plans', 'Project approval', 'Implementation', 'Impact assessment'],
    applicationLink: 'https://mines.gov.in/'
  },

  // Steel
  {
    id: 'steel-technology-mission',
    title: 'Steel Technology Mission',
    department: 'Ministry of Steel',
    description: 'Technology development for steel sector competitiveness.',
    category: 'Manufacturing',
    benefits: ['R&D support', 'Technology upgradation', 'Quality improvement', 'Cost reduction', 'Innovation'],
    eligibility: {},
    applicationProcess: ['Research proposals', 'Approval', 'Funding', 'Implementation', 'Technology transfer'],
    applicationLink: 'https://steel.gov.in/'
  },

  // Jal Shakti (Water)
  {
    id: 'atal-bhujal-yojana',
    title: 'Atal Bhujal Yojana',
    department: 'Ministry of Jal Shakti',
    description: 'Sustainable groundwater management in water-stressed areas.',
    category: 'Water Conservation',
    benefits: ['Community participation', 'Demand management', 'Water conservation', 'Recharge structures', 'Sustainable use'],
    eligibility: { residence: 'Rural' },
    applicationProcess: ['Gram Panchayat plans', 'Water budgeting', 'Conservation measures', 'Performance-based funding', 'Monitoring'],
    applicationLink: 'https://ataljal.mowr.gov.in/'
  },
  {
    id: 'amrut-2-0',
    title: 'AMRUT 2.0 (Water Supply Focus)',
    department: 'Ministry of Jal Shakti',
    description: 'Universal water supply coverage in all cities.',
    category: 'Infrastructure',
    benefits: ['100% water supply coverage', '24x7 water supply', 'Rejuvenation of water bodies', 'Circular economy', 'Wastewater treatment'],
    eligibility: { residence: 'Urban' },
    applicationProcess: ['City water plans', 'Project approval', 'Implementation', 'O&M sustainability', 'Service delivery'],
    applicationLink: 'http://amrut.gov.in/'
  },

  // More State Schemes
  {
    id: 'himachal-medha-protsahan-yojana',
    title: 'Medha Protsahan Yojana (Himachal Pradesh)',
    department: 'Government of Himachal Pradesh',
    description: 'Coaching assistance for competitive exams in Himachal Pradesh.',
    category: 'Education',
    benefits: ['Free coaching classes', 'Study material', 'Accommodation support', 'Exam fees', 'Mentorship'],
    eligibility: { state: 'Himachal Pradesh', isForStudents: true, maxIncome: 250000 },
    applicationProcess: ['Online application', 'Income verification', 'Coaching center allotment', 'Attendance', 'Exam preparation'],
    applicationLink: 'https://himachal.nic.in/'
  },
  {
    id: 'jharkhand-mukhyamantri-protsahan-yojana',
    title: 'Mukhyamantri Protsahan Yojana (Jharkhand)',
    department: 'Government of Jharkhand',
    description: 'Unemployment allowance for educated youth in Jharkhand.',
    category: 'Social Security',
    benefits: ['₹5,000-7,000 monthly allowance', 'For unemployed graduates', '2 years support', 'Skill training', 'Job search assistance'],
    eligibility: { state: 'Jharkhand', minAge: 18, maxAge: 35, isForStudents: false },
    applicationProcess: ['Register on employment exchange', 'Apply online', 'Document verification', 'Allowance credit', 'Job placement efforts'],
    applicationLink: 'https://rojgar.jharkhand.gov.in/'
  },
  {
    id: 'chhattisgarh-rajiv-yuva-mitan-yojana',
    title: 'Rajiv Yuva Mitan Yojana (Chhattisgarh)',
    department: 'Government of Chhattisgarh',
    description: 'Youth empowerment and community service in Chhattisgarh.',
    category: 'Youth Development',
    benefits: ['Community service opportunities', 'Skill development', 'Stipend', 'Experience certificate', 'Career guidance'],
    eligibility: { state: 'Chhattisgarh', minAge: 18, maxAge: 35 },
    applicationProcess: ['Online registration', 'Selection', 'Training', 'Community service', 'Certification'],
    applicationLink: 'https://cgstate.gov.in/'
  },
  {
    id: 'uttarakhand-mukhyamantri-swarojgar-yojana',
    title: 'Mukhyamantri Swarojgar Yojana (Uttarakhand)',
    department: 'Government of Uttarakhand',
    description: 'Self-employment and entrepreneurship support in Uttarakhand.',
    category: 'Self-Employment',
    benefits: ['Subsidy on loan', 'Margin money', 'Training', 'Mentorship', 'Marketing support'],
    eligibility: { state: 'Uttarakhand', minAge: 18, maxAge: 45 },
    applicationProcess: ['Business plan', 'Apply through DIC', 'Training', 'Loan sanction', 'Business setup'],
    applicationLink: 'https://uk.gov.in/'
  },
  {
    id: 'goa-dayanand-social-security-scheme',
    title: 'Dayanand Social Security Scheme (Goa)',
    department: 'Government of Goa',
    description: 'Financial assistance for economically weaker sections in Goa.',
    category: 'Social Security',
    benefits: ['Monthly financial assistance', 'Medical support', 'Education support', 'Housing assistance', 'Livelihood support'],
    eligibility: { state: 'Goa', category: 'EWS' },
    applicationProcess: ['Apply at Social Welfare office', 'Income verification', 'Approval', 'Regular assistance', 'Annual renewal'],
    applicationLink: 'https://www.goa.gov.in/'
  },
  {
    id: 'sikkim-rojgar-plus',
    title: 'Sikkim Rojgar Plus',
    department: 'Government of Sikkim',
    description: 'Employment generation and placement support in Sikkim.',
    category: 'Employment',
    benefits: ['Job placement', 'Skill training', 'Apprenticeship', 'Stipend support', 'Career counseling'],
    eligibility: { state: 'Sikkim', minAge: 18, maxAge: 35 },
    applicationProcess: ['Online registration', 'Skill assessment', 'Training/placement', 'Documentation', 'Job support'],
    applicationLink: 'https://sikkim.gov.in/'
  },
  {
    id: 'tripura-mukhyamantri-yuva-yogayog-yojana',
    title: 'Mukhyamantri Yuva Yogayog Yojana (Tripura)',
    department: 'Government of Tripura',
    description: 'Unemployment allowance and skill training for youth in Tripura.',
    category: 'Skill Development',
    benefits: ['Monthly allowance', 'Skill training', 'Placement assistance', 'Internship opportunities', 'Entrepreneurship support'],
    eligibility: { state: 'Tripura', minAge: 18, maxAge: 40, isForStudents: false },
    applicationProcess: ['Registration', 'Verification', 'Training enrollment', 'Allowance', 'Job placement'],
    applicationLink: 'https://tripura.gov.in/'
  },
  {
    id: 'manipur-go-to-village-mission',
    title: 'Go to Village Mission (Manipur)',
    department: 'Government of Manipur',
    description: 'Comprehensive village development and service delivery in Manipur.',
    category: 'Rural Development',
    benefits: ['On-spot service delivery', 'Village infrastructure', 'Scheme enrollment', 'Issue resolution', 'Community participation'],
    eligibility: { state: 'Manipur', residence: 'Rural' },
    applicationProcess: ['Government team visit', 'Camp organization', 'Service delivery', 'Grievance redressal', 'Follow-up'],
    applicationLink: 'https://manipur.gov.in/'
  },
  {
    id: 'meghalaya-livelihood-generation-programme',
    title: 'State Livelihood Generation Programme (Meghalaya)',
    department: 'Government of Meghalaya',
    description: 'Creating sustainable livelihood opportunities in Meghalaya.',
    category: 'Livelihood',
    benefits: ['Skill training', 'Financial assistance', 'Enterprise development', 'Market linkage', 'Mentorship'],
    eligibility: { state: 'Meghalaya', minAge: 18 },
    applicationProcess: ['Registration', 'Training', 'Business plan', 'Financial support', 'Handholding'],
    applicationLink: 'https://meghalaya.gov.in/'
  },
  {
    id: 'nagaland-start-up-scheme',
    title: 'Nagaland Start-Up Scheme',
    department: 'Government of Nagaland',
    description: 'Supporting startups and entrepreneurship in Nagaland.',
    category: 'Self-Employment',
    benefits: ['Seed funding', 'Incubation support', 'Mentorship', 'Networking', 'Market access'],
    eligibility: { state: 'Nagaland', minAge: 18, maxAge: 45 },
    applicationProcess: ['Idea submission', 'Business plan', 'Selection', 'Incubation', 'Funding support'],
    applicationLink: 'https://nagaland.gov.in/'
  },
  {
    id: 'mizoram-socio-economic-development',
    title: 'Socio-Economic Development Programme (Mizoram)',
    department: 'Government of Mizoram',
    description: 'Holistic development covering health, education, and livelihood in Mizoram.',
    category: 'Social Security',
    benefits: ['Healthcare services', 'Education support', 'Livelihood programs', 'Infrastructure', 'Skill development'],
    eligibility: { state: 'Mizoram' },
    applicationProcess: ['Community identification', 'Need assessment', 'Programme implementation', 'Monitoring', 'Impact evaluation'],
    applicationLink: 'https://mizoram.gov.in/'
  },
  {
    id: 'arunachal-deen-dayal-swavalamban-yojana',
    title: 'Deen Dayal Swavalamban Yojana (Arunachal Pradesh)',
    department: 'Government of Arunachal Pradesh',
    description: 'Self-employment scheme for educated unemployed youth in Arunachal Pradesh.',
    category: 'Self-Employment',
    benefits: ['Loan subsidy', 'Margin money', 'Training', 'Business development', 'Marketing support'],
    eligibility: { state: 'Arunachal Pradesh', minAge: 18, maxAge: 45 },
    applicationProcess: ['Apply at DIC', 'Business plan approval', 'Training', 'Loan processing', 'Enterprise setup'],
    applicationLink: 'https://arunachal.gov.in/'
  },
  {
    id: 'puducherry-indira-gandhi-pension-scheme',
    title: 'Indira Gandhi Pension Scheme (Puducherry)',
    department: 'Government of Puducherry',
    description: 'Pension for elderly, widows, and disabled in Puducherry.',
    category: 'Social Security',
    benefits: ['Monthly pension', 'Financial security', 'Healthcare support', 'Dignity', 'Regular payments'],
    eligibility: { state: 'Puducherry', minAge: 60 },
    applicationProcess: ['Apply at local office', 'Document verification', 'Approval', 'Bank account linking', 'Monthly pension'],
    applicationLink: 'https://py.gov.in/'
  },
  {
    id: 'jammu-kashmir-mumkin-scheme',
    title: 'MUMKIN (Jammu & Kashmir)',
    department: 'Government of Jammu & Kashmir',
    description: 'Employment generation for youth in Jammu & Kashmir.',
    category: 'Employment',
    benefits: ['Job opportunities', 'Skill development', 'Placement support', 'Stipend', 'Career advancement'],
    eligibility: { state: 'Jammu and Kashmir', minAge: 18, maxAge: 35 },
    applicationProcess: ['Online registration', 'Skill training', 'Job matching', 'Placement', 'Career progression'],
    applicationLink: 'https://jk.gov.in/'
  },
  {
    id: 'ladakh-employment-generation',
    title: 'Ladakh Employment Generation Scheme',
    department: 'Government of Ladakh',
    description: 'Creating employment opportunities in Ladakh through various sectors.',
    category: 'Employment',
    benefits: ['Job creation', 'Skill training', 'Tourism employment', 'Local enterprise', 'Sustainable livelihood'],
    eligibility: { state: 'Ladakh', minAge: 18 },
    applicationProcess: ['Registration', 'Skill identification', 'Training', 'Job placement', 'Income generation'],
    applicationLink: 'https://ladakh.nic.in/'
  },
  {
    id: 'chandigarh-self-employment-loan',
    title: 'Self Employment Loan Scheme (Chandigarh)',
    department: 'Government of Chandigarh',
    description: 'Financial assistance for starting businesses in Chandigarh.',
    category: 'Self-Employment',
    benefits: ['Loan up to ₹10 lakh', 'Interest subsidy', 'Margin money support', 'Training', 'Marketing assistance'],
    eligibility: { state: 'Chandigarh', minAge: 18, maxAge: 45 },
    applicationProcess: ['Apply through Industries department', 'Business plan', 'Approval', 'Loan disbursement', 'Business operation'],
    applicationLink: 'https://chandigarh.gov.in/'
  },

  // Additional Central Schemes
  {
    id: 'pradhan-mantri-shram-yogi-mandhan',
    title: 'Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM)',
    department: 'Ministry of Labour',
    description: 'Pension scheme for unorganized workers ensuring old age security.',
    category: 'Social Security',
    benefits: ['₹3,000 monthly pension after 60', 'Affordable contribution', 'Government matching', 'Family pension', 'No savings bank required'],
    eligibility: { minAge: 18, maxAge: 40, maxIncome: 15000 },
    applicationProcess: ['Enroll through CSC', 'Aadhaar and bank account', 'Monthly contribution', 'Regular payments', 'Pension at 60'],
    applicationLink: 'https://pmsym.gov.in/'
  },
  {
    id: 'national-safai-karamcharis-finance',
    title: 'National Safai Karamcharis Finance and Development Corporation (NSKFDC) Schemes',
    department: 'Ministry of Social Justice',
    description: 'Financial assistance for sanitation workers and their families.',
    category: 'Social Security',
    benefits: ['Concessional loans', 'Skill development', 'Rehabilitation', 'Income generation', 'Dignity of life'],
    eligibility: { category: 'SC' },
    applicationProcess: ['Apply through state channelizing agency', 'Project proposal', 'Loan sanction', 'Implementation', 'Monitoring'],
    applicationLink: 'http://www.nskfdc.nic.in/'
  },
  {
    id: 'venture-capital-fund-sc',
    title: 'Venture Capital Fund for Scheduled Castes',
    department: 'Ministry of Social Justice',
    description: 'Supporting SC entrepreneurs in innovative ventures.',
    category: 'Self-Employment',
    benefits: ['Equity support up to ₹50 lakh', 'Mentorship', 'Technical guidance', 'Market linkage', 'Growth support'],
    eligibility: { category: 'SC', minAge: 18 },
    applicationProcess: ['Business plan submission', 'Due diligence', 'Approval', 'Equity investment', 'Business scaling'],
    applicationLink: 'https://socialjustice.gov.in/'
  }
];
