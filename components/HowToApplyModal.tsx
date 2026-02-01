import React from 'react';
import { Scheme } from '../types';
import { getTranslator } from '../services/translations';
import { CloseIcon, ClipboardListIcon } from './Icons';

interface HowToApplyModalProps {
  scheme: Scheme;
  onClose: () => void;
  language: string;
}

const HowToApplyModal: React.FC<HowToApplyModalProps> = ({ scheme, onClose, language }) => {
  const t = getTranslator(language);
  const stepsToShow = scheme.applicationProcess;
  const titleToShow = scheme.title;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-60 flex justify-center items-center p-4" aria-modal="true" role="dialog">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary flex items-center gap-3">
            <ClipboardListIcon className="w-6 h-6"/>
            <span id="modal-title">{t('howToApplyTitle', { schemeName: titleToShow })}</span>
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
            <h3 className="font-semibold text-lg text-dark mb-4">{t('applicationProcessSteps')}</h3>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              {stepsToShow.map((step, index) => (
                <li key={index} className="pl-2">
                   {step}
                </li>
              ))}
            </ol>
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
