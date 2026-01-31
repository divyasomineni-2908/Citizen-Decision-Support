
export interface Scheme {
  id: string;
  title: string;
  department: string;
  description: string;
  category: string;
  benefits: string[];
  eligibility: {
    minAge?: number;
    maxAge?: number;
    minIncome?: number;
    maxIncome?: number;
    state?: string;
    category?: 'SC' | 'ST' | 'OBC' | 'General' | 'EWS';
    gender?: 'Male' | 'Female' | 'Any';
    residence?: 'Rural' | 'Urban' | 'Any';
    isForStudents?: boolean;
    isForPwD?: boolean; // Person with Disability
  };
  applicationProcess: string[];
  applicationLink: string;
  isFavorite?: boolean;
  matchScore?: number;
}

export interface Application {
    id: string;
    schemeId: string;
    schemeTitle: string;
    submissionDate: string;
    status: 'Submitted' | 'In Review' | 'Approved' | 'Rejected';
    details: string;
}

export enum View {
    HOME = 'HOME',
    SCHEMES = 'SCHEMES',
    ELIGIBILITY = 'ELIGIBILITY',
    PROFILE = 'PROFILE',
    TRANSPARENCY = 'TRANSPARENCY',
    GRIEVANCE = 'GRIEVANCE',
    DOCUMENTS = 'DOCUMENTS',
    TRACKING = 'TRACKING',
    COMPARISON = 'COMPARISON',
    ANALYTICS = 'ANALYTICS',
    FAQ = 'FAQ',
    TUTORIALS = 'TUTORIALS'
}

export interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}

export interface SimplifiedScheme {
    description: string;
    benefits: string[];
    eligibility: string;
}

export interface UserProfile {
    gender: 'Male' | 'Female' | 'Other';
    age: number;
    state: string;
    residence: 'Rural' | 'Urban';
    category: 'SC' | 'ST' | 'OBC' | 'General' | 'EWS';
    annualIncome: number;
    isStudent: boolean;
    isPwD: boolean;
}

export interface FailedCriterion {
    key: keyof Scheme['eligibility'];
    criterion: string;
    expected: string;
    actual: string;
}

export interface EligibilityCheckResult {
    scheme: Scheme;
    isEligible: boolean;
    failedCriteria: FailedCriterion[];
}

export interface EligibilityAdvice {
    ineligibilityReason: string;
    eligibilitySuggestions: string[];
    alternativeSchemesSuggestion: string;
}