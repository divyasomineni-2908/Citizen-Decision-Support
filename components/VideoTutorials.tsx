import React, { useState } from 'react';

interface VideoTutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  views: number;
}

interface VideoTutorialsProps {
  language: string;
}

const VideoTutorials: React.FC<VideoTutorialsProps> = ({ language }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoTutorial | null>(null);
  const [filter, setFilter] = useState('All');

  const tutorials: VideoTutorial[] = language === 'Hindi' ? [
    {
      id: '1',
      title: 'प्लेटफॉर्म का उपयोग कैसे करें',
      description: 'योजनाओं को ब्राउज़ करने और आवेदन जमा करने के बारे में चरण-दर-चरण मार्गदर्शिका।',
      duration: '5:30',
      thumbnail: '🎬',
      videoUrl: '#',
      category: 'शुरुआती',
      views: 12500
    },
    {
      id: '2',
      title: 'पात्रता जांचकर्ता का उपयोग',
      description: 'अपनी पात्रता की जांच करें और सर्वोत्तम योजनाओं का पता लगाएं।',
      duration: '4:15',
      thumbnail: '✅',
      videoUrl: '#',
      category: 'शुरुआती',
      views: 9800
    },
    {
      id: '3',
      title: 'दस्तावेज़ अपलोड करना',
      description: 'अपने दस्तावेज़ों को सुरक्षित रूप से अपलोड और प्रबंधित करना सीखें।',
      duration: '3:45',
      thumbnail: '📄',
      videoUrl: '#',
      category: 'दस्तावेज़',
      views: 7200
    },
    {
      id: '4',
      title: 'आवेदन स्थिति ट्रैकिंग',
      description: 'वास्तविक समय में अपने आवेदनों को ट्रैक करें।',
      duration: '3:20',
      thumbnail: '📊',
      videoUrl: '#',
      category: 'आवेदन',
      views: 8500
    },
    {
      id: '5',
      title: 'PM-KISAN के लिए आवेदन कैसे करें',
      description: 'PM-KISAN योजना के लिए आवेदन करने की पूर्ण प्रक्रिया।',
      duration: '6:40',
      thumbnail: '🌾',
      videoUrl: '#',
      category: 'योजनाएं',
      views: 15300
    },
    {
      id: '6',
      title: 'शिकायत दर्ज करना',
      description: 'शिकायत दर्ज करने और उसका समाधान कैसे प्राप्त करें।',
      duration: '4:00',
      thumbnail: '📝',
      videoUrl: '#',
      category: 'समर्थन',
      views: 5400
    }
  ] : [
    {
      id: '1',
      title: 'How to Use the Platform',
      description: 'Step-by-step guide on browsing schemes and submitting applications.',
      duration: '5:30',
      thumbnail: '🎬',
      videoUrl: '#',
      category: 'Getting Started',
      views: 12500
    },
    {
      id: '2',
      title: 'Using Eligibility Checker',
      description: 'Learn how to check your eligibility and find the best schemes.',
      duration: '4:15',
      thumbnail: '✅',
      videoUrl: '#',
      category: 'Getting Started',
      views: 9800
    },
    {
      id: '3',
      title: 'Uploading Documents',
      description: 'Learn how to securely upload and manage your documents.',
      duration: '3:45',
      thumbnail: '📄',
      videoUrl: '#',
      category: 'Documents',
      views: 7200
    },
    {
      id: '4',
      title: 'Application Status Tracking',
      description: 'Track your applications in real-time.',
      duration: '3:20',
      thumbnail: '📊',
      videoUrl: '#',
      category: 'Application',
      views: 8500
    },
    {
      id: '5',
      title: 'How to Apply for PM-KISAN',
      description: 'Complete process to apply for PM-KISAN scheme.',
      duration: '6:40',
      thumbnail: '🌾',
      videoUrl: '#',
      category: 'Schemes',
      views: 15300
    },
    {
      id: '6',
      title: 'Filing a Grievance',
      description: 'How to file and track grievances.',
      duration: '4:00',
      thumbnail: '📝',
      videoUrl: '#',
      category: 'Support',
      views: 5400
    }
  ];

  const categories = ['All', ...Array.from(new Set(tutorials.map(t => t.category)))];

  const filteredTutorials = filter === 'All' 
    ? tutorials 
    : tutorials.filter(t => t.category === filter);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          🎥 {language === 'Hindi' ? 'वीडियो ट्यूटोरियल' : 'Video Tutorials'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {language === 'Hindi' 
            ? 'चरण-दर-चरण वीडियो गाइड के साथ सीखें'
            : 'Learn with step-by-step video guides'}
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              filter === category
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutorials.map(tutorial => (
          <div
            key={tutorial.id}
            onClick={() => setSelectedVideo(tutorial)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            {/* Thumbnail */}
            <div className="relative bg-gradient-to-br from-primary to-blue-600 h-48 flex items-center justify-center">
              <span className="text-6xl">{tutorial.thumbnail}</span>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                {tutorial.duration}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-40">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                  {tutorial.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {tutorial.views.toLocaleString()} {language === 'Hindi' ? 'दृश्य' : 'views'}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {tutorial.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {tutorial.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Player Placeholder */}
              <div className="relative bg-black aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  <p className="text-sm">
                    {language === 'Hindi' 
                      ? 'वीडियो प्लेयर (डेमो मोड)'
                      : 'Video Player (Demo Mode)'}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    {language === 'Hindi'
                      ? 'प्रोडक्शन में, यहां एक वीडियो प्लेयर होगा'
                      : 'In production, a video player would be embedded here'}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                    {selectedVideo.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {selectedVideo.duration}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {selectedVideo.views.toLocaleString()} {language === 'Hindi' ? 'दृश्य' : 'views'}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedVideo.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Help Section */}
      <div className="mt-8 bg-blue-50 dark:bg-blue-900 rounded-lg p-6 text-center">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          {language === 'Hindi' ? 'और मदद चाहिए?' : 'Need More Help?'}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {language === 'Hindi'
            ? 'FAQ देखें या सीधे समर्थन से संपर्क करें'
            : 'Check our FAQ section or contact support directly'}
        </p>
        <div className="flex justify-center gap-3">
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            ❓ {language === 'Hindi' ? 'FAQ देखें' : 'View FAQ'}
          </button>
          <button className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            💬 {language === 'Hindi' ? 'चैट शुरू करें' : 'Start Chat'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorials;
