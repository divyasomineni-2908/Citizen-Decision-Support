import React from 'react';
import { Application } from '../types';
import { CloseIcon, CheckIcon, XCircleIcon } from './Icons';
import { StatusBadge } from './StatusBadge';
import { getTranslator } from '../services/translations';

const getTimelineSteps = (status: Application['status'], t: (key: string) => string) => {
    const steps = [
        { name: t('appStatusSubmitted'), completed: false },
        { name: t('appStatusInReview'), completed: false },
        { name: t('appStatusApproved'), completed: false }
    ];

    if (status === 'Submitted' || status === 'In Review' || status === 'Approved') {
        steps[0].completed = true;
    }
    if (status === 'In Review' || status === 'Approved') {
        steps[1].completed = true;
    }
    if (status === 'Approved') {
        steps[2].completed = true;
    }
    
    if (status === 'Rejected') {
        steps[0].completed = true;
    }

    return steps;
};


interface ApplicationDetailProps {
  application: Application;
  onClose: () => void;
  language: string;
}

const ApplicationDetail: React.FC<ApplicationDetailProps> = ({ application, onClose, language }) => {
  const t = getTranslator(language);
  const timelineSteps = getTimelineSteps(application.status, t);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" aria-modal="true" role="dialog">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary" id="modal-title">{t('appDetailTitle')}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <p className="text-sm font-medium text-gray-500">{t('appDetailSchemeName')}</p>
            <p className="text-lg font-semibold text-dark mt-1">{application.schemeTitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">{t('appDetailAppId')}</p>
              <p className="text-base text-dark mt-1 font-mono">{application.id}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{t('appDetailSubDate')}</p>
              <p className="text-base text-dark mt-1">{application.submissionDate}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">{t('appDetailCurrentStatus')}</p>
            <div className="mt-1">
              <StatusBadge status={application.status} submissionDate={application.submissionDate} language={language} />
            </div>
          </div>
          
           <div>
                <p className="text-sm font-medium text-gray-500">{t('appDetailProgress')}</p>
                <div className="mt-4">
                    <ol className="relative border-l border-gray-200 ml-3">
                        {timelineSteps.map((step) => (
                            <li key={step.name} className="mb-8 ml-8">
                                <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white ${step.completed ? 'bg-secondary' : 'bg-gray-300'}`}>
                                    {step.completed && <CheckIcon className="w-4 h-4 text-white" />}
                                </span>
                                <h3 className={`font-semibold ${step.completed ? 'text-dark' : 'text-gray-500'}`}>{step.name}</h3>
                            </li>
                        ))}
                        {application.status === 'Rejected' && (
                            <li className="ml-8">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-red-500 rounded-full -left-3 ring-8 ring-white">
                                    <XCircleIcon className="w-6 h-6 text-white" />
                                </span>
                                <h3 className="font-semibold text-red-600">{t('appStatusRejected')}</h3>
                            </li>
                        )}
                    </ol>
                </div>
            </div>

          <div>
            <p className="text-sm font-medium text-gray-500">{t('appDetailUpdates')}</p>
            <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-gray-800">{application.details}</p>
            </div>
          </div>
        </div>
        
        <div className="sticky bottom-0 bg-gray-50 p-4 border-t border-gray-200 text-right">
          <button
            onClick={onClose}
            className="bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            {t('commonClose')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;