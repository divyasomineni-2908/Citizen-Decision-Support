import React, { useState } from 'react';
import { View } from '../types';
import { getTranslator } from '../services/translations';
import { MenuIcon, CloseIcon } from './Icons';


interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  language: string;
}

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView, language }) => {
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
  
  const getNavItemClass = (view: View, isMobile: boolean = false) => {
    const baseDesktop = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    const baseMobile = "block px-3 py-2 rounded-md text-base font-medium transition-colors";

    const activeClass = 'bg-primary text-white';
    const inactiveClass = 'text-gray-700 hover:bg-gray-200';
    
    return `${isMobile ? baseMobile : baseDesktop} ${
      currentView === view ? activeClass : inactiveClass
    }`;
  };

  const handleNavClick = (view: View) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick(View.HOME)}>
              <h1 className="text-xl font-bold text-primary">GovWelfare Connect</h1>
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
        <div className="lg:hidden" id="mobile-menu">
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
