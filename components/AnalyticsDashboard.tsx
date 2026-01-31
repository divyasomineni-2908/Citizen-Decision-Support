import React from 'react';
import { Scheme } from '../types';

interface AnalyticsDashboardProps {
  schemes: Scheme[];
  language: string;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ schemes, language }) => {
  // Calculate analytics
  const totalSchemes = schemes.length;
  const categoryBreakdown = schemes.reduce((acc, scheme) => {
    acc[scheme.category] = (acc[scheme.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const departmentBreakdown = schemes.reduce((acc, scheme) => {
    acc[scheme.department] = (acc[scheme.department] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topCategories = Object.entries(categoryBreakdown)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const successStories = [
    {
      name: language === 'Hindi' ? 'राजेश कुमार' : 'Rajesh Kumar',
      scheme: 'PM-KISAN',
      story: language === 'Hindi'
        ? 'मुझे ₹6,000 की वार्षिक सहायता मिली जिससे मेरी खेती में सुधार हुआ।'
        : 'Received ₹6,000 annual support which improved my farming.',
      location: 'Maharashtra',
      year: '2025'
    },
    {
      name: language === 'Hindi' ? 'सुनीता देवी' : 'Sunita Devi',
      scheme: 'PM-JAY',
      story: language === 'Hindi'
        ? '₹5 लाख के स्वास्थ्य कवर ने मेरे परिवार को बचाया।'
        : '₹5 lakh health cover saved my family during medical emergency.',
      location: 'Bihar',
      year: '2024'
    },
    {
      name: language === 'Hindi' ? 'अमित शर्मा' : 'Amit Sharma',
      scheme: 'Skill Development',
      story: language === 'Hindi'
        ? 'कौशल प्रशिक्षण के बाद मुझे अच्छी नौकरी मिली।'
        : 'Got a good job after skill training program.',
      location: 'Delhi',
      year: '2025'
    }
  ];

  const mockStats = {
    totalApplications: 2456789,
    approvedApplications: 2123456,
    totalBeneficiaries: 1987654,
    totalFundsDistributed: '₹12,345 Cr'
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        📊 {language === 'Hindi' ? 'विश्लेषण डैशबोर्ड' : 'Analytics Dashboard'}
      </h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 shadow-lg">
          <div className="text-3xl mb-2">📋</div>
          <div className="text-3xl font-bold">{totalSchemes}</div>
          <div className="text-blue-100 text-sm">
            {language === 'Hindi' ? 'कुल योजनाएं' : 'Total Schemes'}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6 shadow-lg">
          <div className="text-3xl mb-2">✅</div>
          <div className="text-3xl font-bold">{mockStats.approvedApplications.toLocaleString()}</div>
          <div className="text-green-100 text-sm">
            {language === 'Hindi' ? 'स्वीकृत आवेदन' : 'Approved Applications'}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 shadow-lg">
          <div className="text-3xl mb-2">👥</div>
          <div className="text-3xl font-bold">{mockStats.totalBeneficiaries.toLocaleString()}</div>
          <div className="text-purple-100 text-sm">
            {language === 'Hindi' ? 'लाभार्थी' : 'Beneficiaries'}
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-6 shadow-lg">
          <div className="text-3xl mb-2">💰</div>
          <div className="text-3xl font-bold">{mockStats.totalFundsDistributed}</div>
          <div className="text-orange-100 text-sm">
            {language === 'Hindi' ? 'वितरित धनराशि' : 'Funds Distributed'}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Category Breakdown */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            {language === 'Hindi' ? 'श्रेणी के अनुसार योजनाएं' : 'Schemes by Category'}
          </h3>
          <div className="space-y-3">
            {topCategories.map(([category, count], index) => {
              const percentage = (count / totalSchemes) * 100;
              const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500'];
              return (
                <div key={category}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{category}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{count} ({percentage.toFixed(1)}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className={`${colors[index]} h-2.5 rounded-full transition-all`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Application Success Rate */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            {language === 'Hindi' ? 'आवेदन सफलता दर' : 'Application Success Rate'}
          </h3>
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-200 dark:text-gray-700 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                ></circle>
                <circle
                  className="text-green-500 stroke-current"
                  strokeWidth="10"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.865)}`}
                  transform="rotate(-90 50 50)"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">86.5%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'Hindi' ? 'सफलता' : 'Success'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            {language === 'Hindi'
              ? '2.12M स्वीकृत / 2.45M कुल आवेदन'
              : '2.12M Approved / 2.45M Total Applications'}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          🌟 {language === 'Hindi' ? 'सफलता की कहानियां' : 'Success Stories'}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                  {story.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{story.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{story.location} • {story.year}</p>
                </div>
              </div>
              <div className="mb-2">
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                  {story.scheme}
                </span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                "{story.story}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
