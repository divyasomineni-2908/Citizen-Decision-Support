import React, { useState } from 'react';
import { Application } from '../types';
import { CloseIcon } from './Icons';
import { getTranslator } from '../services/translations';


interface AddApplicationModalProps {
  onClose: () => void;
  onAddApplication: (application: Omit<Application, 'id' | 'schemeId'>) => void;
  language: string;
}

const AddApplicationModal: React.FC<AddApplicationModalProps> = ({ onClose, onAddApplication, language }) => {
  const t = getTranslator(language);
  const [schemeTitle, setSchemeTitle] = useState('');
  const [submissionDate, setSubmissionDate] = useState('');
  const [status, setStatus] = useState<Application['status']>('Submitted');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!schemeTitle || !submissionDate) {
        alert('Please fill in the Scheme Name and Submission Date.');
        return;
    }
    onAddApplication({ schemeTitle, submissionDate, status, details });
  };
  
  const statusOptions: Application['status'][] = ['Submitted', 'In Review', 'Approved', 'Rejected'];
  const statusKeys: Record<Application['status'], string> = {
      'Submitted': 'appStatusSubmitted',
      'In Review': 'appStatusInReview',
      'Approved': 'appStatusApproved',
      'Rejected': 'appStatusRejected'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" aria-modal="true" role="dialog">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
        <form onSubmit={handleSubmit}>
          <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-primary" id="modal-title">{t('addAppTitle')}</h2>
            <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          
          <div className="p-6 space-y-4">
            <div>
              <label htmlFor="schemeTitle" className="block text-sm font-medium text-gray-700">{t('addAppSchemeLabel')}</label>
              <input 
                type="text" 
                id="schemeTitle" 
                value={schemeTitle}
                onChange={e => setSchemeTitle(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" 
                required 
              />
            </div>
            <div>
              <label htmlFor="submissionDate" className="block text-sm font-medium text-gray-700">{t('addAppDateLabel')}</label>
              <input 
                type="date" 
                id="submissionDate" 
                value={submissionDate}
                onChange={e => setSubmissionDate(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" 
                required 
              />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">{t('addAppStatusLabel')}</label>
              <select 
                id="status" 
                value={status}
                onChange={e => setStatus(e.target.value as Application['status'])}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              >
                {statusOptions.map(option => (
                    <option key={option} value={option}>{t(statusKeys[option])}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700">{t('addAppDetailsLabel')}</label>
              <textarea 
                id="details" 
                value={details}
                onChange={e => setDetails(e.target.value)}
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" 
                placeholder={t('addAppDetailsPlaceholder')}
              />
            </div>
          </div>
          
          <div className="sticky bottom-0 bg-gray-50 p-4 border-t border-gray-200 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors"
            >
              {t('addAppCancelBtn')}
            </button>
            <button
              type="submit"
              className="bg-secondary text-white font-bold py-2 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors"
            >
              {t('addAppSaveBtn')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddApplicationModal;