import React, { useState } from 'react';
import { Scheme } from '../types';

interface SchemeComparisonProps {
  schemes: Scheme[];
  language: string;
}

const SchemeComparison: React.FC<SchemeComparisonProps> = ({ schemes, language }) => {
  const [selectedSchemes, setSelectedSchemes] = useState<string[]>([]);
  const [compareMode, setCompareMode] = useState(false);

  const toggleSchemeSelection = (schemeId: string) => {
    if (selectedSchemes.includes(schemeId)) {
      setSelectedSchemes(selectedSchemes.filter(id => id !== schemeId));
    } else if (selectedSchemes.length < 3) {
      setSelectedSchemes([...selectedSchemes, schemeId]);
    } else {
      alert('You can compare up to 3 schemes at a time');
    }
  };

  const selectedSchemeData = schemes.filter(s => selectedSchemes.includes(s.id));

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          ⚖️ {language === 'Hindi' ? 'योजना तुलना' : 'Scheme Comparison'}
        </h2>
        {selectedSchemes.length >= 2 && (
          <button
            onClick={() => setCompareMode(!compareMode)}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {compareMode ? 'Back to Selection' : `Compare (${selectedSchemes.length})`}
          </button>
        )}
      </div>

      {!compareMode ? (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {language === 'Hindi' 
              ? 'तुलना करने के लिए 2-3 योजनाएँ चुनें (आप अधिकतम 3 चुन सकते हैं)'
              : 'Select 2-3 schemes to compare (max 3)'}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schemes.slice(0, 9).map((scheme) => (
              <div
                key={scheme.id}
                onClick={() => toggleSchemeSelection(scheme.id)}
                className={`p-5 rounded-lg cursor-pointer transition-all ${
                  selectedSchemes.includes(scheme.id)
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{scheme.title}</h3>
                  {selectedSchemes.includes(scheme.id) && (
                    <span className="text-2xl">✓</span>
                  )}
                </div>
                <p className="text-sm opacity-90 mb-2">{scheme.department}</p>
                <span className={`text-xs px-2 py-1 rounded ${
                  selectedSchemes.includes(scheme.id)
                    ? 'bg-white text-primary'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {scheme.category}
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">
                    Feature
                  </th>
                  {selectedSchemeData.map((scheme) => (
                    <th key={scheme.id} className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">
                      {scheme.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {/* Department */}
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    Department
                  </td>
                  {selectedSchemeData.map((scheme) => (
                    <td key={scheme.id} className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {scheme.department}
                    </td>
                  ))}
                </tr>

                {/* Category */}
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    Category
                  </td>
                  {selectedSchemeData.map((scheme) => (
                    <td key={scheme.id} className="px-6 py-4">
                      <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {scheme.category}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Benefits */}
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    Benefits
                  </td>
                  {selectedSchemeData.map((scheme) => (
                    <td key={scheme.id} className="px-6 py-4">
                      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                        {scheme.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Age Eligibility */}
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    Age Requirement
                  </td>
                  {selectedSchemeData.map((scheme) => (
                    <td key={scheme.id} className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {scheme.eligibility.minAge || scheme.eligibility.maxAge
                        ? `${scheme.eligibility.minAge || 'Any'} - ${scheme.eligibility.maxAge || 'Any'} years`
                        : 'No restriction'}
                    </td>
                  ))}
                </tr>

                {/* Income Eligibility */}
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    Income Requirement
                  </td>
                  {selectedSchemeData.map((scheme) => (
                    <td key={scheme.id} className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {scheme.eligibility.maxIncome
                        ? `Up to ₹${scheme.eligibility.maxIncome.toLocaleString()}`
                        : 'No restriction'}
                    </td>
                  ))}
                </tr>

                {/* Residence */}
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    Residence
                  </td>
                  {selectedSchemeData.map((scheme) => (
                    <td key={scheme.id} className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {scheme.eligibility.residence || 'Any'}
                    </td>
                  ))}
                </tr>

                {/* Category */}
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    Social Category
                  </td>
                  {selectedSchemeData.map((scheme) => (
                    <td key={scheme.id} className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {scheme.eligibility.category || 'All'}
                    </td>
                  ))}
                </tr>

                {/* Application Link */}
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    Apply
                  </td>
                  {selectedSchemeData.map((scheme) => (
                    <td key={scheme.id} className="px-6 py-4">
                      <a
                        href={scheme.applicationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        Apply Now →
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchemeComparison;
