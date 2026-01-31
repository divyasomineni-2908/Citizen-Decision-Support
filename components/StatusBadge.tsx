import React from 'react';
import { Application } from '../types';
import { CheckCircleIcon, ClockIcon, InfoIcon, XCircleIcon } from './Icons';
import { getTranslator } from '../services/translations';

interface StatusBadgeProps {
    status: Application['status'];
    submissionDate: string;
    language: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, submissionDate, language }) => {
    const t = getTranslator(language);
    const isNew = () => {
        if (!submissionDate) return false;
        const submission = new Date(submissionDate);
        const today = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);
        // Ensure the submission date is within the last 7 days and not in the future.
        return submission >= sevenDaysAgo && submission <= today;
    };

    const baseClasses = "flex items-center text-sm font-medium px-3 py-1 rounded-full w-fit";
    let statusComponent;

    switch (status) {
        case 'Approved':
            statusComponent = <div className={`${baseClasses} bg-green-100 text-green-800`}><CheckCircleIcon className="w-4 h-4 mr-1.5" /> {t('appStatusApproved')}</div>;
            break;
        case 'In Review':
            statusComponent = <div className={`${baseClasses} bg-yellow-100 text-yellow-800`}><ClockIcon className="w-4 h-4 mr-1.5" /> {t('appStatusInReview')}</div>;
            break;
        case 'Submitted':
            statusComponent = <div className={`${baseClasses} bg-blue-100 text-blue-800`}><InfoIcon className="w-4 h-4 mr-1.5" /> {t('appStatusSubmitted')}</div>;
            break;
        case 'Rejected':
            statusComponent = <div className={`${baseClasses} bg-red-100 text-red-800`}><XCircleIcon className="w-4 h-4 mr-1.5" /> {t('appStatusRejected')}</div>;
            break;
        default:
            return null;
    }

    return (
        <div className="flex items-center">
            {statusComponent}
            {isNew() && (
                 <span className="ml-2 text-xs font-bold text-accent bg-yellow-100 px-2 py-1 rounded-full animate-pulse">
                    {t('statusNew')}
                </span>
            )}
        </div>
    )
};