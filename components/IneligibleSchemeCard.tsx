import React, { useState, useEffect } from 'react';
import { EligibilityCheckResult, UserProfile, EligibilityAdvice } from '../types';
import { XCircleIcon, QuestionMarkCircleIcon, SparklesIcon, CheckCircleIcon } from './Icons';
import { generateEligibilitySuggestions } from '../services/geminiService';
import { getTranslator } from '../services/translations';

interface IneligibleSchemeCardProps {
    result: EligibilityCheckResult;
    userProfile: UserProfile;
    language: string;
}

const IneligibleSchemeCard: React.FC<IneligibleSchemeCardProps> = ({ result, userProfile, language }) => {
    const t = getTranslator(language);
    const [advice, setAdvice] = useState<EligibilityAdvice | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        // When the language changes, we must clear the old, cached advice
        // so that it can be re-fetched in the new language if requested.
        setAdvice(null);
        // We also collapse the card to avoid showing a loading state for a language
        // the user might not be interested in for this specific card.
        if (isExpanded) {
            setIsExpanded(false);
        }
    }, [language]);

    const handleExplainClick = async () => {
        setIsExpanded(true);
        if (advice) return; // Don't re-fetch if we already have the advice for the current language

        setIsLoading(true);
        setError(null);
        try {
            const generatedAdvice = await generateEligibilitySuggestions(result.scheme, userProfile, result.failedCriteria, language);
            setAdvice(generatedAdvice);
        } catch (err) {
            setError(t('ineligibleCardError'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="p-6">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <div className="text-sm text-secondary font-semibold uppercase tracking-wide">{result.scheme.category}</div>
                        <h3 className="mt-1 text-xl font-bold text-dark">{t(result.scheme.id)}</h3>
                    </div>
                    <span className="text-xs font-bold text-red-800 bg-red-100 px-3 py-1 rounded-full whitespace-nowrap">{t('ineligibleCardTitle')}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">{t('ineligibleCardReasons')}</h4>
                    <ul className="space-y-2">
                        {result.failedCriteria.map(fc => (
                            <li key={fc.key} className="flex items-start text-sm">
                                <XCircleIcon className="w-5 h-5 text-red-500 mr-2 mt-px flex-shrink-0" />
                                <div>
                                    <span className="font-medium text-gray-800">{fc.criterion}:</span>
                                    <span className="text-gray-600 ml-1">{t('ineligibleCardRequires')} <span className="font-semibold">{fc.expected}</span>, {t('ineligibleCardYourProfile')} <span className="font-semibold">{fc.actual}</span>.</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="px-6 pb-4">
                {!isExpanded ? (
                    <button
                        onClick={handleExplainClick}
                        className="w-full bg-blue-50 text-primary font-bold py-2 px-4 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors flex items-center justify-center gap-2"
                    >
                        <QuestionMarkCircleIcon className="w-5 h-5" />
                        {t('ineligibleCardExplainButton')}
                    </button>
                ) : (
                    <div className="animate-fade-in-up mt-4 pt-4 border-t border-dashed">
                        {isLoading && (
                            <div className="text-center py-4">
                                <SparklesIcon className="w-6 h-6 text-primary animate-pulse mx-auto mb-2" />
                                <p className="text-sm text-gray-500">{t('ineligibleCardGeneratingAdvice')}</p>
                            </div>
                        )}
                        {error && <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</p>}
                        {advice && (
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-md text-dark flex items-center gap-2">
                                        <SparklesIcon className="w-5 h-5 text-accent" />
                                        {t('ineligibleCardAIExplanation')}
                                    </h4>
                                    <p className="mt-1 text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-200">{advice.ineligibilityReason}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-md text-dark">{t('ineligibleCardHowToBecomeEligible')}</h4>
                                    <ul className="mt-2 space-y-2">
                                        {advice.eligibilitySuggestions.map((suggestion, index) => (
                                            <li key={index} className="flex items-start text-sm text-gray-800">
                                                <CheckCircleIcon className="w-5 h-5 text-secondary mr-2 mt-px flex-shrink-0" />
                                                <span>{suggestion}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                 <div>
                                    <h4 className="font-semibold text-md text-dark">{t('ineligibleCardAlternativeSchemes')}</h4>
                                    <p className="mt-1 text-sm text-gray-800">{advice.alternativeSchemesSuggestion}</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default IneligibleSchemeCard;