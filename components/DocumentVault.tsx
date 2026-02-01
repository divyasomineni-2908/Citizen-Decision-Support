import React, { useState } from 'react';
import { Document } from '../types';

interface DocumentVaultProps {
  language: string;
  documents: Document[];
  onAddDocument: (doc: Document) => void;
  onDeleteDocument: (id: string) => void;
}

const DocumentVault: React.FC<DocumentVaultProps> = ({ language, documents, onAddDocument, onDeleteDocument }) => {
  // Local documents state removed in favor of props
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    setUploading(true);

    // Simulate upload with delay
    setTimeout(() => {
      Array.from(files).forEach((file: File, index) => {
        const newDoc: Document = {
          id: `${Date.now()}-${index}`,
          name: file.name,
          type: file.type,
          size: file.size,
          uploadDate: new Date().toISOString().split('T')[0],
          category: 'Other'
        };
        onAddDocument(newDoc);
      });

      setUploading(false);
    }, 1500);
  };

  const deleteDocument = (id: string) => {
    onDeleteDocument(id);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const getCategoryColor = (category: Document['category']) => {
    const colors = {
      Identity: 'bg-blue-100 text-blue-800',
      Income: 'bg-green-100 text-green-800',
      Residence: 'bg-purple-100 text-purple-800',
      Other: 'bg-gray-100 text-gray-800'
    };
    return colors[category];
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            📁 {language === 'Hindi' ? 'दस्तावेज़ तिजोरी' : 'Document Vault'}
          </h2>
          <label className="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            {uploading ? 'Uploading...' : language === 'Hindi' ? 'अपलोड करें' : 'Upload'}
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
              disabled={uploading}
            />
          </label>
        </div>

        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            💡 {language === 'Hindi'
              ? 'आपके दस्तावेज़ सुरक्षित रूप से एन्क्रिप्ट किए गए हैं। कई योजनाओं में आवेदन के लिए उनका पुन: उपयोग करें।'
              : 'Your documents are securely encrypted. Reuse them for multiple scheme applications.'}
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-50 dark:bg-gray-700"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-white truncate max-w-[150px]">
                      {doc.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formatFileSize(doc.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => deleteDocument(doc.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Delete document"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-1 rounded ${getCategoryColor(doc.category)}`}>
                  {doc.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {doc.uploadDate}
                </span>
              </div>
            </div>
          ))}
        </div>

        {documents.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p>{language === 'Hindi' ? 'कोई दस्तावेज़ अपलोड नहीं किया गया' : 'No documents uploaded yet'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentVault;
