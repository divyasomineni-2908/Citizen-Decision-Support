import { Scheme, Application, UserProfile, Document } from './types';
import REAL_GOVT_SCHEMES from './services/realSchemes';

// Official Government Portal for Scheme Applications
export const MYSCHEME_PORTAL_URL = 'https://www.myscheme.gov.in/search';

// Update all schemes to use the official myscheme.gov.in portal
const updateSchemesToMyScheme = (schemes: Scheme[]): Scheme[] => {
    return schemes.map(scheme => ({
        ...scheme,
        // Redirect to the specific scheme search on myscheme.gov.in
        applicationLink: `${MYSCHEME_PORTAL_URL}?q=${encodeURIComponent(scheme.title)}`
    }));
};

export const MOCK_USER_PROFILE: UserProfile = {
    name: 'Rishitha', // Female name
    gender: 'Female',
    age: 19,
    state: 'Andhra Pradesh',
    residence: 'Urban',
    category: 'General',
    annualIncome: 450000,
    isStudent: true,
    isPwD: false,
};

// Using real Indian government schemes database - all links redirect to official myscheme.gov.in portal
export const MOCK_SCHEMES: Scheme[] = updateSchemesToMyScheme(REAL_GOVT_SCHEMES);

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
        applicationId: 'PMK2023001234',
        schemeId: 'pm-kisan',
        schemeTitle: 'PM Kisan Samman Nidhi',
        submissionDate: '2023-10-15',
        lastUpdate: '2023-10-20',
        status: 'Under Review',
        details: 'Documents are being verified by the local agricultural office.',
        timeline: [
            { stage: 'Submitted', date: '2023-10-15', completed: true },
            { stage: 'Under Review', date: '2023-10-20', completed: true },
            { stage: 'Documents Verified', date: '', completed: false },
            { stage: 'Approved', date: '', completed: false }
        ],
        nextAction: 'Verification pending at Block Level',
        officerName: 'Suresh Patil'
    },
    {
        id: 'app-002',
        applicationId: 'PMJ2023005678',
        schemeId: 'pm-jay',
        schemeTitle: 'PM Jan Arogya Yojana',
        submissionDate: '2023-09-01',
        lastUpdate: '2023-09-05',
        status: 'Approved',
        details: 'Your PM-JAY e-card has been dispatched.',
        timeline: [
            { stage: 'Submitted', date: '2023-09-01', completed: true },
            { stage: 'Under Review', date: '2023-09-03', completed: true },
            { stage: 'Documents Verified', date: '2023-09-04', completed: true },
            { stage: 'Approved', date: '2023-09-05', completed: true }
        ],
        nextAction: 'Download E-Card'
    },
    {
        id: 'app-003',
        applicationId: 'APY2023009012',
        schemeId: 'atal-pension-yojana',
        schemeTitle: 'Atal Pension Yojana',
        submissionDate: getTodayDateString(),
        lastUpdate: getTodayDateString(),
        status: 'Submitted',
        details: 'Your application has been received and is pending processing.',
        timeline: [
            { stage: 'Submitted', date: getTodayDateString(), completed: true },
            { stage: 'Under Review', date: '', completed: false }
        ]
    },
    {
        id: 'app-004',
        applicationId: 'SSY2023003456',
        schemeId: 'sukanya-samridhi',
        schemeTitle: 'Sukanya Samriddhi Account Scheme',
        submissionDate: '2023-08-20',
        lastUpdate: '2023-08-25',
        status: 'Rejected',
        details: 'Incomplete address proof provided. Please re-apply with valid documents.',
        timeline: [
            { stage: 'Submitted', date: '2023-08-20', completed: true },
            { stage: 'Under Review', date: '2023-08-25', completed: true },
            { stage: 'Rejected', date: '2023-08-25', completed: true }
        ],
        nextAction: 'Re-upload valid address proof',
        officerName: 'Anjali Desai'
    }
];

export const MOCK_DOCUMENTS: Document[] = [
    {
        id: 'doc-1',
        name: 'Aadhaar Card.pdf',
        type: 'application/pdf',
        size: 245760, // 240 KB
        uploadDate: '2023-08-15',
        category: 'Identity'
    },
    {
        id: 'doc-2',
        name: 'Income Certificate.png',
        type: 'image/png',
        size: 153600, // 150 KB
        uploadDate: '2023-08-16',
        category: 'Income'
    },
    {
        id: 'doc-3',
        name: 'Caste Certificate.pdf',
        type: 'application/pdf',
        size: 307200, // 300 KB
        uploadDate: '2023-09-10',
        category: 'Identity'
    },
    {
        id: 'doc-4',
        name: 'Class 10 Marksheet.jpg',
        type: 'image/jpeg',
        size: 409600, // 400 KB
        uploadDate: '2023-08-20',
        category: 'Other'
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
