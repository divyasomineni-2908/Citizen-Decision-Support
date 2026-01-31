import React, { useState, useMemo } from 'react';
import { Scheme, UserProfile, EligibilityCheckResult, FailedCriterion } from '../types';
import SchemeCard from './SchemeCard';
import SchemeDetail from './SchemeDetail';
import IneligibleSchemeCard from './IneligibleSchemeCard';
import { getTranslator } from '../services/translations';
import { MOCK_USER_PROFILE } from '../constants';
import { UserIcon } from './Icons';
// FIX: Import HowToApplyModal to handle 'how to apply' functionality.
import HowToApplyModal from './HowToApplyModal';

interface EligibilityCheckerProps {
  schemes: Scheme[];
  onToggleFavorite: (schemeId: string) => void;
  language: string;
}

const checkSchemeEligibility = (scheme: Scheme, user: UserProfile): EligibilityCheckResult => {
    const failedCriteria: FailedCriterion[] = [];
    const { eligibility: el } = scheme;
    const { age, annualIncome, gender, residence, category, isStudent, isPwD } = user;

    if (el.minAge && age < el.minAge) {
        failedCriteria.push({ key: 'minAge', criterion: 'Minimum Age', expected: `${el.minAge} years`, actual: `${age} years` });
    }
    if (el.maxAge && age > el.maxAge) {
        failedCriteria.push({ key: 'maxAge', criterion: 'Maximum Age', expected: `${el.maxAge} years`, actual: `${age} years` });
    }
    if (el.maxIncome && annualIncome > el.maxIncome) {
        failedCriteria.push({ key: 'maxIncome', criterion: 'Maximum Annual Income', expected: `₹${el.maxIncome.toLocaleString()}`, actual: `₹${annualIncome.toLocaleString()}` });
    }
    if (el.gender && el.gender !== 'Any' && gender !== el.gender) {
        failedCriteria.push({ key: 'gender', criterion: 'Gender', expected: el.gender, actual: gender });
    }
    if (el.residence && el.residence !== 'Any' && residence !== el.residence) {
        failedCriteria.push({ key: 'residence', criterion: 'Area of Residence', expected: el.residence, actual: residence });
    }
    if (el.category && category !== el.category) {
        failedCriteria.push({ key: 'category', criterion: 'Social Category', expected: el.category, actual: category });
    }
    if (el.isForStudents && !isStudent) {
        failedCriteria.push({ key: 'isForStudents', criterion: 'Must be a Student', expected: 'Yes', actual: 'No' });
    }
    if (el.isForPwD && !isPwD) {
        failedCriteria.push({ key: 'isForPwD', criterion: 'Must be a Person with Disability', expected: 'Yes', actual: 'No' });
    }

    return { scheme, isEligible: failedCriteria.length === 0, failedCriteria };
};

const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ schemes, onToggleFavorite, language }) => {
  const t = getTranslator(language);
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  // FIX: Add state to manage the 'How to Apply' modal visibility.
  const [schemeForHowToApply, setSchemeForHowToApply] = useState<Scheme | null>(null);
  const userProfile = MOCK_USER_PROFILE;

  const eligibilityResults = useMemo(() => {
    return schemes.map(scheme => checkSchemeEligibility(scheme, userProfile));
  }, [schemes, userProfile]);

  const eligibleSchemes = useMemo(() => {
    return eligibilityResults.filter(r => r.isEligible).map(r => r.scheme);
  }, [eligibilityResults]);

  const ineligibleSchemes = useMemo(() => {
      return eligibilityResults.filter(r => !r.isEligible);
  }, [eligibilityResults]);


  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-dark tracking-tight">{t('eligibilityCheckerTitle')}</h1>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-500">
          Here is a personalized report based on your profile.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-10 flex items-center gap-6">
        <div className="bg-primary/10 p-4 rounded-full">
            <UserIcon className="w-10 h-10 text-primary" />
        </div>
        <div>
            <h2 className="text-xl font-bold text-dark">Citizen User's Profile</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-gray-600 mt-1 text-sm">
                <span><strong>Age:</strong> {userProfile.age}</span>
                <span><strong>Income:</strong> ₹{userProfile.annualIncome.toLocaleString()}</span>
                <span><strong>Residence:</strong> {userProfile.residence}</span>
                <span><strong>Category:</strong> {userProfile.category}</span>
            </div>
        </div>
      </div>
      
      <div>
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-dark mb-2">Schemes You May Be Eligible For ✅</h2>
            <p className="text-gray-500 mb-6">Based on your profile, you meet the primary criteria for these {eligibleSchemes.length} schemes.</p>
            {eligibleSchemes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eligibleSchemes.map(scheme => (
                    <SchemeCard 
                        key={scheme.id} 
                        scheme={scheme} 
                        onViewDetails={setSelectedScheme}
                        onHowToApply={setSchemeForHowToApply}
                        onToggleFavorite={onToggleFavorite}
                        language={language}
                    />
                ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 py-10 bg-gray-50 rounded-lg">No schemes match your current profile.</p>
            )}
        </div>

        <div>
            <h2 className="text-3xl font-bold text-dark mb-2">Schemes You Are Not Eligible For ❌</h2>
            <p className="text-gray-500 mb-6">This section explains why you are not currently eligible for certain schemes and what you can do.</p>
            {ineligibleSchemes.length > 0 ? (
                <div className="space-y-6">
                    {ineligibleSchemes.map(result => (
                        <IneligibleSchemeCard 
                            key={result.scheme.id}
                            result={result}
                            userProfile={userProfile}
                            language={language}
                        />
                    ))}
                </div>
            ) : (
                 <p className="text-center text-gray-500 py-10 bg-gray-50 rounded-lg">Congratulations! You appear to be eligible for all schemes in our directory.</p>
            )}
        </div>
      </div>
      
      {selectedScheme && <SchemeDetail scheme={selectedScheme} onClose={() => setSelectedScheme(null)} language={language} />}
      {/* FIX: Render the HowToApplyModal when a scheme is selected for it. */}
      {schemeForHowToApply && <HowToApplyModal scheme={schemeForHowToApply} onClose={() => setSchemeForHowToApply(null)} language={language} />}
    </div>
  );
};

export default EligibilityChecker;