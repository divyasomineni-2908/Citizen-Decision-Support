import React, { useState, useEffect, useRef } from 'react';
import { Scheme } from '../types';
import { translateText } from '../services/geminiService';
import { getTranslator } from '../services/translations';
import { CloseIcon, ClipboardListIcon } from './Icons';

interface HowToApplyModalProps {
  scheme: Scheme;
  onClose: () => void;
  language: string;
}

const HowToApplyModal: React.FC<HowToApplyModalProps> = ({ scheme, onClose, language }) => {
  const t = getTranslator(language);
  const [translatedSteps, setTranslatedSteps] = useState<string[] | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const translationCache = useRef<{ [key: string]: string[] }>({});

  useEffect(() => {
    const translateSteps = async () => {
        if (language === 'English' || !scheme.applicationProcess) {
            setTranslatedSteps(null);
            return;
        }

        const cacheKey = `${scheme.id}-steps-${language}`;
        if (translationCache.current[cacheKey]) {
            setTranslatedSteps(translationCache.current[cacheKey]);
            return;
        }

        setIsTranslating(true);
        try {
            const steps = await translateText(scheme.applicationProcess, language) as string[];
            translationCache.current[cacheKey] = steps;
            setTranslatedSteps(steps);
        } catch (err) {
            console.error("Could not translate application steps.", err);
            // Fallback to original text on error
            setTranslatedSteps(scheme.applicationProcess);
        } finally {
            setIsTranslating(false);
        }
    };

    translateSteps();
  }, [scheme, language]);

  const stepsToShow = translatedSteps || scheme.applicationProcess;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-60 flex justify-center items-center p-4" aria-modal="true" role="dialog">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary flex items-center gap-3">
            <ClipboardListIcon className="w-6 h-6"/>
            <span id="modal-title">{t('howToApplyTitle', { schemeName: t(scheme.id) })}</span>
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
            <h3 className="font-semibold text-lg text-dark mb-4">{t('applicationProcessSteps')}</h3>
            {isTranslating ? (
                <div className="space-y-3">
                    {[...Array(3)].map((_, i) => <div key={i} className="h-5 bg-gray-200 rounded animate-pulse w-full"></div>)}
                </div>
            ) : (
                <ol className="space-y-4 list-decimal list-inside text-gray-700">
                    {stepsToShow.map((step, index) => (
                        <li key={index} className="pl-2">
                           {step}
                        </li>
                    ))}
                </ol>
            )}
        </div>
        
        <div className="sticky bottom-0 bg-gray-50 p-4 border-t border-gray-200 text-right">
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
  );
};

export default HowToApplyModal;
