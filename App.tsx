import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SchemeDirectory from './components/SchemeDirectory';
import EligibilityChecker from './components/EligibilityChecker';
import Profile from './components/Dashboard';
import Transparency from './components/Transparency';
import Grievance from './components/Grievance';
import Chatbot from './components/Chatbot';
import DocumentVault from './components/DocumentVault';
import ApplicationStatusTracking from './components/ApplicationStatusTracking';
import SchemeComparison from './components/SchemeComparison';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import FAQSection from './components/FAQSection';
import VideoTutorials from './components/VideoTutorials';
import VoiceAssistant from './components/VoiceAssistant';
import TextToSpeech from './components/TextToSpeech';
import NotificationCenter from './components/NotificationCenter';
import { ChatIcon } from './components/Icons';
import { View, Scheme } from './types';
import { EXPANDED_MOCK_SCHEMES } from './constants';
import { languages } from './services/translations';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [isChatbotOpen, setChatbotOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState('English');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [schemes, setSchemes] = useState<Scheme[]>(
    EXPANDED_MOCK_SCHEMES.map(scheme => ({ ...scheme, isFavorite: false }))
  );

  const handleToggleFavorite = (schemeId: string) => {
    setSchemes(prevSchemes =>
      prevSchemes.map(scheme =>
        scheme.id === schemeId ? { ...scheme, isFavorite: !scheme.isFavorite } : scheme
      )
    );
  };

  const renderView = useCallback(() => {
    switch (currentView) {
      case View.HOME:
        return <Home setCurrentView={setCurrentView} language={language} />;
      case View.SCHEMES:
        return <SchemeDirectory schemes={schemes} onToggleFavorite={handleToggleFavorite} language={language} />;
      case View.ELIGIBILITY:
        return <EligibilityChecker schemes={schemes} onToggleFavorite={handleToggleFavorite} language={language} />;
      case View.PROFILE:
        return <Profile schemes={schemes} onToggleFavorite={handleToggleFavorite} language={language} />;
       case View.TRANSPARENCY:
        return <Transparency language={language}/>;
      case View.GRIEVANCE:
        return <Grievance language={language}/>;
      case View.DOCUMENTS:
        return <DocumentVault language={language}/>;
      case View.TRACKING:
        return <ApplicationStatusTracking language={language}/>;
      case View.COMPARISON:
        return <SchemeComparison schemes={schemes} language={language}/>;
      case View.ANALYTICS:
        return <AnalyticsDashboard schemes={schemes} language={language}/>;
      case View.FAQ:
        return <FAQSection language={language}/>;
      case View.TUTORIALS:
        return <VideoTutorials language={language}/>;
      default:
        return <Home setCurrentView={setCurrentView} language={language} />;
    }
  }, [currentView, schemes, language, darkMode]);

  return (
    <div className={`min-h-screen font-sans flex flex-col ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-dark'}`}>
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        language={language}
        darkMode={darkMode}
      />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-2 rounded-md shadow-lg transition-colors ${
            darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-white text-gray-700'
          }`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className={`block w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md shadow-lg ${
              darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-300'
            }`}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-white shadow-lg"
            aria-label="Select language"
        >
            {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                    {lang.label}
                </option>
            ))}
        </select>
      </div>
      <>
        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto flex-grow w-full">
          {renderView()}
        </main>
        <Footer language={language} />
        
        {/* Notification Center */}
        <NotificationCenter language={language} />
        
        {/* Voice Assistant */}
        <VoiceAssistant 
          language={language} 
          onCommand={(command) => console.log('Voice command:', command)} 
        />
        
        {/* Text-to-Speech */}
        <TextToSpeech language={language} />
        
        {/* Chatbot Button */}
        <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setChatbotOpen(!isChatbotOpen)}
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label="Toggle Chatbot"
        >
          <ChatIcon className="h-8 w-8" />
        </button>
        </div>
        {isChatbotOpen && <Chatbot setIsOpen={setChatbotOpen} language={language} />}
      </>
    </div>
  );
};

export default App;