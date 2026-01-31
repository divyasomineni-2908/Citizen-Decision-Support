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
import { ChatIcon } from './components/Icons';
import { View, Scheme } from './types';
import { EXPANDED_MOCK_SCHEMES } from './constants';
import { languages } from './services/translations';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [isChatbotOpen, setChatbotOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState('English');
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
      default:
        return <Home setCurrentView={setCurrentView} language={language} />;
    }
  }, [currentView, schemes, language]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-dark flex flex-col">
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        language={language}
      />
      <div className="fixed top-20 right-4 sm:right-6 lg:right-8 z-40">
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
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
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto flex-grow w-full">
        {renderView()}
      </main>
      <Footer language={language} />
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
    </div>
  );
};

export default App;