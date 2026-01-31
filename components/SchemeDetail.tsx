import React, { useState, useEffect, useRef } from 'react';
import { Scheme, SimplifiedScheme } from '../types';
import { simplifySchemeDetails, translateText } from '../services/geminiService';
import { getTranslator } from '../services/translations';
import { CloseIcon, CheckCircleIcon, SparklesIcon } from './Icons';
import HowToApplyModal from './HowToApplyModal';

interface SchemeDetailProps {
  scheme: Scheme;
  onClose: () => void;
  language: string;
}

interface TranslatedContent {
    description: string;
    benefits: string[];
}

const SchemeDetail: React.FC<SchemeDetailProps> = ({ scheme, onClose, language }) => {
  const t = getTranslator(language);
  const [isSimplified, setIsSimplified] = useState(false);
  const [simplifiedContent, setSimplifiedContent] = useState<SimplifiedScheme | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [translatedContent, setTranslatedContent] = useState<TranslatedContent | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string | null>(null);
  const translationCache = useRef<{ [key: string]: TranslatedContent }>({});

  const [isHowToApplyOpen, setIsHowToApplyOpen] = useState(false);

  useEffect(() => {
    // Reset simplification when language changes to avoid confusion
    if (language !== 'English') {
        setIsSimplified(false);
    }
    
    const translateSchemeContent = async () => {
        if (language === 'English') {
            setTranslatedContent(null);
            return;
        }

        const cacheKey = `${scheme.id}-${language}`;
        if (translationCache.current[cacheKey]) {
            setTranslatedContent(translationCache.current[cacheKey]);
            return;
        }

        setIsTranslating(true);
        setTranslationError(null);
        try {
            const [description, benefits] = await Promise.all([
                translateText(scheme.description, language) as Promise<string>,
                translateText(scheme.benefits, language) as Promise<string[]>,
            ]);
            
            const content = { description, benefits };
            translationCache.current[cacheKey] = content;
            setTranslatedContent(content);

        } catch (err) {
            setTranslationError(`Could not translate content to ${language}.`);
        } finally {
            setIsTranslating(false);
        }
    };

    translateSchemeContent();
  }, [scheme, language]);

  const handleToggleSimplify = async () => {
    if (isSimplified) {
        setIsSimplified(false);
        return;
    }

    if (language !== 'English') return;

    setIsSimplified(true);
    if (!simplifiedContent) {
        setIsLoading(true);
        setError(null);
        try {
            const simplified = await simplifySchemeDetails(scheme);
            setSimplifiedContent(simplified);
        } catch (err) {
            setError("Sorry, we couldn't simplify this content right now. Please try again later.");
            setIsSimplified(false); // Revert toggle on error
        } finally {
            setIsLoading(false);
        }
    }
  };

  const descriptionToShow = isSimplified && simplifiedContent 
    ? simplifiedContent.description 
    : (language !== 'English' && translatedContent ? translatedContent.description : scheme.description);
  
  const benefitsToShow = isSimplified && simplifiedContent
    ? simplifiedContent.benefits
    : (language !== 'English' && translatedContent ? translatedContent.benefits : scheme.benefits);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
          <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-start gap-4">
            <h2 className="text-2xl font-bold text-primary">{t(scheme.id)}</h2>
            <div className="flex items-center flex-shrink-0 gap-2 sm:gap-4">
              <button
                  onClick={handleToggleSimplify}
                  disabled={isLoading || language !== 'English'}
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors py-1 px-3 rounded-full border border-primary/50 hover:bg-primary/10"
                  title={language !== 'English' ? 'Simplification is only available in English' : ''}
                >
                  <SparklesIcon className="w-4 h-4" />
                  <span className="whitespace-nowrap">{isSimplified ? t('showOriginal') : t('simplify')}</span>
              </button>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="p-6 space-y-6">
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                <p className="font-bold">Error</p>
                <p>{error}</p>
              </div>
            )}
            {translationError && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
                <p className="font-bold">Translation Notice</p>
                <p>{translationError} Showing original content instead.</p>
              </div>
            )}
            <div>
              <h3 className="font-semibold text-lg text-dark">{t('description')}</h3>
              {isLoading || isTranslating ? (
                  <div className="mt-2 space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                  </div>
              ) : (
                  <p className="mt-2 text-gray-600">
                      {descriptionToShow}
                  </p>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-dark">{t('keyBenefits')}</h3>
              {isLoading || isTranslating ? (
                  <div className="mt-2 space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
                  </div>
              ) : (
                  <ul className="mt-2 space-y-2">
                      {benefitsToShow.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{benefit}</span>
                          </li>
                      ))}
                  </ul>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-dark">{t('eligibilityCriteria')}</h3>
              {isSimplified && simplifiedContent ? (
                  <p className="mt-2 text-gray-600">{simplifiedContent.eligibility}</p>
              ) : (
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                      {language !== 'English' && <p className="col-span-full text-sm text-gray-500 italic">Eligibility details are best viewed in the original language for accuracy.</p>}
                      {scheme.eligibility.minAge != null && <p><strong>Minimum Age:</strong> {scheme.eligibility.minAge} years</p>}
                      {scheme.eligibility.maxAge != null && <p><strong>Maximum Age:</strong> {scheme.eligibility.maxAge} years</p>}
                      {scheme.eligibility.minIncome != null && <p><strong>Minimum Income:</strong> ₹{scheme.eligibility.minIncome.toLocaleString()}</p>}
                      {scheme.eligibility.maxIncome != null && <p><strong>Maximum Annual Income:</strong> ₹{scheme.eligibility.maxIncome.toLocaleString()}</p>}
                      {scheme.eligibility.gender != null && scheme.eligibility.gender !== 'Any' && <p><strong>Gender:</strong> {scheme.eligibility.gender}</p>}
                      {scheme.eligibility.residence != null && scheme.eligibility.residence !== 'Any' && <p><strong>Residence:</strong> {scheme.eligibility.residence}</p>}
                      {scheme.eligibility.category != null && <p><strong>Category:</strong> {scheme.eligibility.category}</p>}
                      {scheme.eligibility.isForStudents === true && <p><strong>For Students:</strong> Yes</p>}
                      {scheme.eligibility.isForPwD === true && <p><strong>For PwD:</strong> Yes</p>}
                  </div>
              )}
            </div>
          </div>
          <div className="sticky bottom-0 bg-gray-50 p-4 border-t border-gray-200 flex justify-end gap-4">
             <button
                onClick={() => setIsHowToApplyOpen(true)}
                className="bg-blue-100 text-primary font-bold py-2 px-6 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
             >
                {t('howToApply')}
             </button>
            <a
              href={scheme.applicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white font-bold py-2 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors"
            >
              {t('applyNow')}
            </a>
          </div>
        </div>
      </div>
      {isHowToApplyOpen && <HowToApplyModal scheme={scheme} onClose={() => setIsHowToApplyOpen(false)} language={language} />}
    </>
  );
};

export default SchemeDetail;