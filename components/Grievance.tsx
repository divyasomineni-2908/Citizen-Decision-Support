import React from 'react';
import { getTranslator } from '../services/translations';

interface GrievanceProps {
    language: string;
}

const Grievance: React.FC<GrievanceProps> = ({ language }) => {
  const t = getTranslator(language);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-dark tracking-tight">{t('grievanceTitle')}</h1>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-500">
          {t('grievanceSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Submit Grievance Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-dark mb-6">{t('submitNewGrievance')}</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="applicationId" className="block text-sm font-medium text-gray-700">Application ID (Optional)</label>
              <input type="text" id="applicationId" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="e.g., app-001" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Briefly describe your issue" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Detailed Description</label>
              <textarea id="description" rows={5} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Please provide all relevant details..."></textarea>
            </div>
             <div>
              <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Attach File (Optional)</label>
              <input type="file" id="attachment" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-primary hover:file:bg-blue-100"/>
            </div>
            <div className="text-right">
              <button type="submit" className="bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                Submit Grievance
              </button>
            </div>
          </form>
        </div>

        {/* Track Grievance Status */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-dark mb-6">Track Your Grievance</h2>
           <form className="space-y-6">
            <div>
              <label htmlFor="grievanceId" className="block text-sm font-medium text-gray-700">Grievance ID</label>
              <input type="text" id="grievanceId" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter your tracking ID" />
            </div>
            <div className="text-right">
              <button type="submit" className="bg-secondary text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors">
                Check Status
              </button>
            </div>
          </form>
          <div className="mt-8 border-t pt-6">
             <h3 className="text-lg font-semibold text-dark">Status:</h3>
             <p className="mt-2 text-gray-500">Please enter a Grievance ID to see its status.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grievance;