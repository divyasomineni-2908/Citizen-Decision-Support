import React from 'react';
import { View } from '../types';
import { getTranslator } from '../services/translations';

interface HomeProps {
    setCurrentView: (view: View) => void;
    language: string;
}

const Home: React.FC<HomeProps> = ({ setCurrentView, language }) => {
  const t = getTranslator(language);
  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark tracking-tight">
        {t('homeTitle')}
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
        {t('homeSubtitle')}
      </p>
      <div className="mt-8 flex justify-center flex-wrap gap-4">
        <button
          onClick={() => setCurrentView(View.SCHEMES)}
          className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 transition-colors"
        >
          {t('exploreSchemes')}
        </button>
        <button
          onClick={() => setCurrentView(View.ELIGIBILITY)}
          className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-blue-100 hover:bg-blue-200 transition-colors"
        >
          {t('checkEligibility')}
        </button>
      </div>

       <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-dark">{t('howItWorks')}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-secondary">{t('discoverTitle')}</h3>
                <p className="mt-2 text-gray-600">
                    {t('discoverDesc')}
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-secondary">{t('checkTitle')}</h3>
                <p className="mt-2 text-gray-600">
                    {t('checkDesc')}
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-secondary">{t('applyTitle')}</h3>
                <p className="mt-2 text-gray-600">
                    {t('applyDesc')}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;