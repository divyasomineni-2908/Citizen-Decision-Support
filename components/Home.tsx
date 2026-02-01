import React from 'react';
import { View } from '../types';
import { getTranslator } from '../services/translations';

interface HomeProps {
  setCurrentView: (view: View) => void;
  language: string;
  onSelectCategory?: (category: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentView, language, onSelectCategory }) => {
  const t = getTranslator(language);

  const categories = [
    { name: 'Agriculture', icon: '🌾' },
    { name: 'Education', icon: '🎓' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Housing', icon: '🏠' },
    { name: 'Social Security', icon: '🛡️' },
    { name: 'Employment', icon: '💼' },
    { name: 'Self-Employment', icon: '🧑‍💼' }, // Matches "Employment" often but specific to schema data
    { name: 'Women & Child', icon: '👩‍👧' }, // Might need mapping to "Social Security" or specific category if not exact
    { name: 'Sports & Culture', icon: '🎨' },
    { name: 'Infrastructure', icon: '🏗️' }
  ];

  const categoryTranslationMap: { [key: string]: string } = {
    'Agriculture': 'catAgriculture',
    'Education': 'catEducation',
    'Healthcare': 'catHealthcare',
    'Housing': 'catHousing',
    'Social Security': 'catSocialSecurity',
    'Employment': 'catEmployment',
    'Self-Employment': 'catSelfEmployment',
    'Women & Child': 'catWomenChild',
    'Sports & Culture': 'catSportsCulture',
    'Infrastructure': 'catInfrastructure'
  };

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
          onClick={() => {
            if (onSelectCategory) onSelectCategory('');
            setCurrentView(View.SCHEMES);
          }}
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

      {/* Browse by Category Section */}
      <div className="mt-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-dark mb-8">{t('browseByCategory')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => onSelectCategory && onSelectCategory(cat.name)}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border border-gray-100"
            >
              <span className="text-4xl mb-4" role="img" aria-label={cat.name}>{cat.icon}</span>
              <span className="text-sm font-semibold text-gray-700">{t(categoryTranslationMap[cat.name] || cat.name)}</span>
            </button>
          ))}
        </div>
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