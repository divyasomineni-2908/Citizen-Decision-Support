import React from 'react';
import { Scheme } from '../types';
import { StarIcon } from './Icons';
import { getTranslator } from '../services/translations';

interface SchemeCardProps {
  scheme: Scheme;
  onViewDetails: (scheme: Scheme) => void;
  onHowToApply: (scheme: Scheme) => void;
  onToggleFavorite: (schemeId: string) => void;
  language: string;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, onViewDetails, onHowToApply, onToggleFavorite, language }) => {
  const t = getTranslator(language);
  const titleToShow = scheme.title;
  const descriptionToShow = scheme.description;
  const categoryToShow = scheme.category;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start gap-4">
            <div className="flex-shrink-0">
                <div className="text-sm text-secondary font-semibold uppercase tracking-wide">{categoryToShow}</div>
                {scheme.matchScore !== undefined && (
                    <div className="mt-1 text-xs font-bold text-green-800 bg-green-100 px-2 py-1 rounded-full w-fit">
                        Match Score: {scheme.matchScore}
                    </div>
                )}
            </div>
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(scheme.id);
                }}
                className={`text-gray-400 hover:text-accent flex-shrink-0 ${scheme.isFavorite ? 'text-accent' : ''}`}
                aria-label={scheme.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
                <StarIcon className="w-6 h-6" isFavorite={scheme.isFavorite} />
            </button>
        </div>
        <h3 className="mt-2 text-xl font-bold text-dark">{titleToShow}</h3>
        <p className="mt-3 text-gray-600 text-sm line-clamp-3">{descriptionToShow}</p>
      </div>
      <div className="p-6 bg-gray-50 grid grid-cols-2 gap-3">
        <button
          onClick={() => onHowToApply(scheme)}
          className="w-full bg-blue-100 text-primary font-bold py-2 px-4 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          {t('howToApply')}
        </button>
        <button
          onClick={() => onViewDetails(scheme)}
          className="w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          {t('viewDetails')}
        </button>
      </div>
    </div>
  );
};

export default SchemeCard;