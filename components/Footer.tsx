import React from 'react';
import { getTranslator } from '../services/translations';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = getTranslator(language);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <p className="text-center text-sm text-gray-500 md:text-left">
            {t('copyright', { year })}
          </p>
          <div className="flex justify-center space-x-6 md:justify-end">
            <a href="#" className="text-sm text-gray-500 hover:text-primary">
              {t('privacyPolicy')}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary">
              {t('termsOfService')}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary">
              {t('contactUs')}
            </a>
            <a
              href="/admin"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/admin');
                // Trigger a popstate event to let App.tsx know (though App.tsx handles mount check, 
                // we might need to force reload or handle pushState. 
                // For now, simple href is safer if we want full page reload to trigger the useEffect, 
                // OR we rely on manual navigation. 
                // Actually, purely client side, let's just reload to trigger the useEffect logic in App.tsx
                window.location.href = '/admin';
              }}
              className="text-sm text-gray-500 hover:text-primary"
            >
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;