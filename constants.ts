import { Scheme, Application, UserProfile } from './types';
import REAL_GOVT_SCHEMES from './services/realSchemes';

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

// Using real Indian government schemes database with 30+ verified schemes
export const MOCK_SCHEMES: Scheme[] = REAL_GOVT_SCHEMES;

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
        schemeId: 'atal-pension-yojana',
        schemeTitle: 'Atal Pension Yojana',
        submissionDate: getTodayDateString(),
        status: 'Submitted',
        details: 'Your application has been received and is pending processing.'
    },
    {
        id: 'app-004',
        schemeId: 'sukanya-samridhi',
        schemeTitle: 'Sukanya Samriddhi Account Scheme',
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
