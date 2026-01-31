import React, { useState } from 'react';
import { View } from '../types';
import { getTranslator } from '../services/translations';
import { MenuIcon, CloseIcon } from './Icons';


interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  language: string;
  darkMode?: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView, language, darkMode }) => {
  const t = getTranslator(language);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: View.HOME, label: t('navHome') },
    { id: View.SCHEMES, label: t('navSchemes') },
    { id: View.ELIGIBILITY, label: t('navEligibility') },
    { id: View.TRANSPARENCY, label: t('navTransparency') },
    { id: View.GRIEVANCE, label: t('navGrievance') },
    { id: View.PROFILE, label: t('navProfile') },
  ];

  const moreItems = [
    { id: View.DOCUMENTS, label: language === 'Hindi' ? '📁 दस्तावेज़' : '📁 Documents' },
    { id: View.TRACKING, label: language === 'Hindi' ? '📊 ट्रैकिंग' : '📊 Tracking' },
    { id: View.COMPARISON, label: language === 'Hindi' ? '⚖️ तुलना' : '⚖️ Compare' },
    { id: View.ANALYTICS, label: language === 'Hindi' ? '📈 विश्लेषण' : '📈 Analytics' },
    { id: View.FAQ, label: language === 'Hindi' ? '❓ FAQ' : '❓ FAQ' },
    { id: View.TUTORIALS, label: language === 'Hindi' ? '🎥 ट्यूटोरियल' : '🎥 Tutorials' },
  ];
  
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  
  const getNavItemClass = (view: View, isMobile: boolean = false) => {
    const baseDesktop = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    const baseMobile = "block px-3 py-2 rounded-md text-base font-medium transition-colors";

    const activeClass = 'bg-primary text-white';
    const inactiveClass = darkMode 
      ? 'text-gray-200 hover:bg-gray-700' 
      : 'text-gray-700 hover:bg-gray-200';
    
    return `${isMobile ? baseMobile : baseDesktop} ${
      currentView === view ? activeClass : inactiveClass
    }`;
  };

  const handleNavClick = (view: View) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <header className={`shadow-md sticky top-0 z-40 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick(View.HOME)}>
              <h1 className={`text-xl font-bold ${darkMode ? 'text-blue-400' : 'text-primary'}`}>GovWelfare Connect</h1>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={getNavItemClass(item.id)}
                  aria-current={currentView === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
              {/* More Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowMoreMenu(!showMoreMenu)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    darkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {language === 'Hindi' ? 'अधिक ▼' : 'More ▼'}
                </button>
                {showMoreMenu && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowMoreMenu(false)}
                    />
                    <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-20 ${
                      darkMode ? 'bg-gray-700' : 'bg-white'
                    } ring-1 ring-black ring-opacity-5`}>
                      <div className="py-1">
                        {moreItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              handleNavClick(item.id);
                              setShowMoreMenu(false);
                            }}
                            className={`block w-full text-left px-4 py-2 text-sm ${
                              currentView === item.id
                                ? 'bg-primary text-white'
                                : darkMode
                                ? 'text-gray-200 hover:bg-gray-600'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <CloseIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${getNavItemClass(item.id, true)} w-full text-left`}
                aria-current={currentView === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
            <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} my-2`}></div>
            {moreItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${getNavItemClass(item.id, true)} w-full text-left`}
                aria-current={currentView === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
