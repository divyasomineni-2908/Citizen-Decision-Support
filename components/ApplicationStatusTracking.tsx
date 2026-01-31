import React, { useState } from 'react';

interface ApplicationTracking {
  id: string;
  schemeTitle: string;
  applicationId: string;
  submissionDate: string;
  lastUpdate: string;
  status: 'Submitted' | 'Under Review' | 'Documents Verified' | 'Approved' | 'Rejected' | 'Disbursed';
  timeline: {
    stage: string;
    date: string;
    completed: boolean;
  }[];
  nextAction?: string;
  officerName?: string;
  officerContact?: string;
}

interface ApplicationTrackingProps {
  language: string;
}

const ApplicationStatusTracking: React.FC<ApplicationTrackingProps> = ({ language }) => {
  const [applications] = useState<ApplicationTracking[]>([
    {
      id: '1',
      schemeTitle: 'Pradhan Mantri Kisan Samman Nidhi',
      applicationId: 'PMK2026001234',
      submissionDate: '2026-01-10',
      lastUpdate: '2026-01-25',
      status: 'Documents Verified',
      timeline: [
        { stage: 'Submitted', date: '2026-01-10', completed: true },
        { stage: 'Under Review', date: '2026-01-15', completed: true },
        { stage: 'Documents Verified', date: '2026-01-25', completed: true },
        { stage: 'Approved', date: '', completed: false },
        { stage: 'Disbursed', date: '', completed: false }
      ],
      nextAction: 'Awaiting final approval from District Officer',
      officerName: 'Mr. Rajesh Kumar',
      officerContact: '+91-9876543210'
    },
    {
      id: '2',
      schemeTitle: 'PM-JAY Health Insurance',
      applicationId: 'PMJAY2026005678',
      submissionDate: '2026-01-05',
      lastUpdate: '2026-01-30',
      status: 'Approved',
      timeline: [
        { stage: 'Submitted', date: '2026-01-05', completed: true },
        { stage: 'Under Review', date: '2026-01-10', completed: true },
        { stage: 'Documents Verified', date: '2026-01-20', completed: true },
        { stage: 'Approved', date: '2026-01-30', completed: true },
        { stage: 'Card Issued', date: '', completed: false }
      ],
      nextAction: 'Health card will be sent to your registered address',
      officerName: 'Ms. Priya Sharma',
      officerContact: '+91-9876543211'
    }
  ]);

  const [selectedApp, setSelectedApp] = useState<ApplicationTracking | null>(null);

  const getStatusColor = (status: ApplicationTracking['status']) => {
    const colors = {
      'Submitted': 'bg-blue-100 text-blue-800',
      'Under Review': 'bg-yellow-100 text-yellow-800',
      'Documents Verified': 'bg-purple-100 text-purple-800',
      'Approved': 'bg-green-100 text-green-800',
      'Rejected': 'bg-red-100 text-red-800',
      'Disbursed': 'bg-green-600 text-white'
    };
    return colors[status];
  };

  const sendSMSReminder = (appId: string) => {
    alert(`SMS reminder sent for application ${appId}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        📊 {language === 'Hindi' ? 'आवेदन स्थिति ट्रैकिंग' : 'Application Status Tracking'}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Applications List */}
        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app.id}
              onClick={() => setSelectedApp(app)}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 cursor-pointer transition-all hover:shadow-lg ${
                selectedApp?.id === app.id ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  {app.schemeTitle}
                </h3>
                <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(app.status)}`}>
                  {app.status}
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p><strong>Application ID:</strong> {app.applicationId}</p>
                <p><strong>Submitted:</strong> {app.submissionDate}</p>
                <p><strong>Last Update:</strong> {app.lastUpdate}</p>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    sendSMSReminder(app.applicationId);
                  }}
                  className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  📱 SMS Reminder
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Details */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          {selectedApp ? (
            <>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Application Timeline
              </h3>
              
              <div className="mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Application ID:</strong> {selectedApp.applicationId}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Current Status:</strong> {selectedApp.status}
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {selectedApp.timeline.map((stage, index) => (
                  <div key={index} className="flex gap-4 mb-6">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          stage.completed
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}
                      >
                        {stage.completed ? '✓' : index + 1}
                      </div>
                      {index < selectedApp.timeline.length - 1 && (
                        <div
                          className={`w-1 h-12 ${
                            stage.completed ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {stage.stage}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {stage.date || 'Pending'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next Action */}
              {selectedApp.nextAction && (
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                    📌 Next Action
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    {selectedApp.nextAction}
                  </p>
                </div>
              )}

              {/* Officer Contact */}
              {selectedApp.officerName && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    👤 Contact Officer
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Name:</strong> {selectedApp.officerName}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Contact:</strong> {selectedApp.officerContact}
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <p>Select an application to view detailed timeline</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatusTracking;
