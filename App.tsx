import React, { useState, useCallback, useEffect, useRef } from 'react';
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
import { View, Scheme, UserProfile, Application, Document } from './types';
import { MOCK_SCHEMES, MOCK_APPLICATIONS, MOCK_USER_PROFILE, MOCK_DOCUMENTS } from './constants';
import { getTranslator, languages, translations } from './services/translations';
import { translateText } from './services/geminiService';
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [isChatbotOpen, setChatbotOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState('English');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [schemes, setSchemes] = useState<Scheme[]>(
    MOCK_SCHEMES.map(scheme => ({ ...scheme, isFavorite: false }))
  );
  const [translatedSchemes, setTranslatedSchemes] = useState<Scheme[]>(schemes);
  const translationCacheRef = useRef<Record<string, Record<string, Partial<Scheme>>>>({});
  const [userProfile, setUserProfile] = useState<UserProfile>(MOCK_USER_PROFILE);
  const [documents, setDocuments] = useState<Document[]>(MOCK_DOCUMENTS);
  const [applications, setApplications] = useState<Application[]>(MOCK_APPLICATIONS);

  const handleAddApplication = (newApp: Application) => {
    setApplications(prev => [newApp, ...prev]);
  };

  const handleAddDocument = (newDoc: Document) => {
    setDocuments(prev => [newDoc, ...prev]);
  };

  const handleDeleteDocument = (docId: string) => {
    setDocuments(prev => prev.filter(d => d.id !== docId));
  };

  const [initialCategory, setInitialCategory] = useState<string>('');

  const handleToggleFavorite = (schemeId: string) => {
    setSchemes(prevSchemes =>
      prevSchemes.map(scheme =>
        scheme.id === schemeId ? { ...scheme, isFavorite: !scheme.isFavorite } : scheme
      )
    );
  };

  // Simple mock routing for Admin
  useEffect(() => {
    if (window.location.pathname === '/admin') {
      setCurrentView(View.ADMIN);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const translateAllSchemes = async () => {
      if (language === 'English') {
        setTranslatedSchemes(schemes);
        return;
      }

      const translator = getTranslator(language);
      const cacheForLanguage = translationCacheRef.current[language] || {};
      translationCacheRef.current[language] = cacheForLanguage;

      const translatedList = await Promise.all(
        schemes.map(async (scheme) => {
          const cached = cacheForLanguage[scheme.id];
          if (cached) {
            return { ...scheme, ...cached };
          }

          const translationEntry = translations[scheme.id as keyof typeof translations] as
            | Record<string, string>
            | undefined;
          const hasLanguageTitle = Boolean(translationEntry && translationEntry[language]);
          const titleFromTranslations = hasLanguageTitle ? translationEntry![language] : scheme.title;
          const shouldTranslateTitle = !hasLanguageTitle;

          const targets: Array<{ field: 'title' | 'description' | 'category' | 'department'; value: string }> = [];
          if (shouldTranslateTitle) {
            targets.push({ field: 'title', value: scheme.title });
          }
          targets.push(
            { field: 'description', value: scheme.description },
            { field: 'category', value: scheme.category },
            { field: 'department', value: scheme.department }
          );

          const [fieldsResult, benefitsResult, processResult] = await Promise.allSettled([
            translateText(targets.map(target => target.value), language) as Promise<string[]>,
            translateText(scheme.benefits, language) as Promise<string[]>,
            translateText(scheme.applicationProcess, language) as Promise<string[]>,
          ]);

          const translatedFields = fieldsResult.status === 'fulfilled'
            ? fieldsResult.value
            : targets.map(target => target.value);
          const translatedBenefits = benefitsResult.status === 'fulfilled'
            ? benefitsResult.value
            : scheme.benefits;
          const translatedProcess = processResult.status === 'fulfilled'
            ? processResult.value
            : scheme.applicationProcess;

          const mappedFields = targets.reduce<Record<string, string>>((acc, target, index) => {
            acc[target.field] = translatedFields[index] ?? target.value;
            return acc;
          }, {});

          const translatedScheme: Partial<Scheme> = {
            title: shouldTranslateTitle ? (mappedFields.title ?? scheme.title) : titleFromTranslations,
            description: mappedFields.description ?? scheme.description,
            category: mappedFields.category ?? scheme.category,
            department: mappedFields.department ?? scheme.department,
            benefits: translatedBenefits,
            applicationProcess: translatedProcess,
          };

          cacheForLanguage[scheme.id] = translatedScheme;
          return { ...scheme, ...translatedScheme };
        })
      );

      if (isMounted) {
        setTranslatedSchemes(translatedList);
      }
    };

    translateAllSchemes();

    return () => {
      isMounted = false;
    };
  }, [language, schemes]);

  const schemesToRender = language === 'English' ? schemes : translatedSchemes;

  const renderView = useCallback(() => {
    switch (currentView) {
      case View.HOME:
        return (
          <Home
            setCurrentView={setCurrentView}
            language={language}
            onSelectCategory={(category) => {
              setInitialCategory(category);
              setCurrentView(View.SCHEMES);
            }}
          />
        );
      case View.SCHEMES:
        return (
          <SchemeDirectory
            schemes={schemesToRender}
            onToggleFavorite={handleToggleFavorite}
            language={language}
            initialCategory={initialCategory}
          />
        );
      case View.ELIGIBILITY:
        return <EligibilityChecker schemes={schemesToRender} onToggleFavorite={handleToggleFavorite} userProfile={userProfile} language={language} />;
      case View.PROFILE:
        return (
          <Profile
            schemes={schemesToRender}
            onToggleFavorite={handleToggleFavorite}
            userProfile={userProfile}
            onUpdateProfile={setUserProfile}
            language={language}
            applications={applications}
            onAddApplication={handleAddApplication}
          />
        );
      case View.TRANSPARENCY:
        return <Transparency language={language} />;
      case View.GRIEVANCE:
        return <Grievance language={language} />;
      case View.DOCUMENTS:
        return (
          <DocumentVault
            language={language}
            documents={documents}
            onAddDocument={handleAddDocument}
            onDeleteDocument={handleDeleteDocument}
          />
        );
      case View.TRACKING:
        return <ApplicationStatusTracking language={language} applications={applications} />;
      case View.COMPARISON:
        return <SchemeComparison schemes={schemesToRender} language={language} />;
      case View.ANALYTICS:
        return <AnalyticsDashboard schemes={schemesToRender} language={language} />;
      case View.FAQ:
        return <FAQSection language={language} />;
      case View.TUTORIALS:
        return <VideoTutorials language={language} />;
      case View.ADMIN:
        return <AdminDashboard language={language} />;
      default:
        return <Home setCurrentView={setCurrentView} language={language} />;
    }
  }, [currentView, schemes, schemesToRender, language, darkMode, userProfile]);

  return (
    <div className={`min-h-screen font-sans flex flex-col ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-dark'}`}>
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        language={language}
        darkMode={darkMode}
      />
      <div className="flex gap-2 p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-2 rounded-md shadow-lg transition-colors ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-white text-gray-700'
            }`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={`block w-40 pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md shadow-lg ${darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-900 border-gray-300'
            }`}
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
    </div>
  );
};

export default App;