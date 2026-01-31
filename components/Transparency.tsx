import React from 'react';
import BarChart from './BarChart';
import { getTranslator } from '../services/translations';

interface TransparencyProps {
    language: string;
}
// Mock data for visualizations
const schemeCategoryData = [
    { label: 'Agriculture', value: 48, color: '#34D399' },
    { label: 'Healthcare', value: 25, color: '#60A5FA' },
    { label: 'Education', value: 32, color: '#FBBF24' },
    { label: 'Social Welfare', value: 55, color: '#F87171' },
    { label: 'Pension', value: 18, color: '#A78BFA' },
    { label: 'W&CD', value: 22, color: '#EC4899' },
];

const beneficiariesByStateData = [
    { label: 'Uttar Pradesh', value: 12543210, color: '#60A5FA' },
    { label: 'Maharashtra', value: 9876543, color: '#34D399' },
    { label: 'Bihar', value: 8543210, color: '#FBBF24' },
    { label: 'West Bengal', value: 7210987, color: '#F87171' },
    { label: 'Rajasthan', value: 6987654, color: '#A78BFA' },
];

const Transparency: React.FC<TransparencyProps> = ({ language }) => {
  const t = getTranslator(language);
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-dark tracking-tight">{t('navTransparency')}</h1>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-500">
          Visualizing the impact and reach of welfare schemes across the nation with public data.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-dark mb-6">Public Data Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-primary">Total Beneficiaries</h3>
            <p className="text-3xl font-bold text-dark mt-2">4.51 Cr</p>
            <p className="text-sm text-gray-500 mt-1">Updated in real-time</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-primary">Funds Disbursed (FY)</h3>
            <p className="text-3xl font-bold text-dark mt-2">₹1.2 Lakh Cr</p>
            <p className="text-sm text-gray-500 mt-1">Across all schemes</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-primary">Applications Processed</h3>
            <p className="text-3xl font-bold text-dark mt-2">1.8 Cr</p>
            <p className="text-sm text-gray-500 mt-1">This month</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <BarChart data={schemeCategoryData} title="Scheme Distribution by Category" />
            <BarChart data={beneficiariesByStateData} title="Top 5 States by Beneficiaries" />
        </div>
      </div>
    </div>
  );
};

export default Transparency;