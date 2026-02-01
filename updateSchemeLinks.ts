// Utility to update all scheme applicationLinks to myscheme.gov.in
// This updates the schemes to redirect to the official government portal

import REAL_GOVT_SCHEMES from './services/realSchemes';

// Update all schemes to use myscheme.gov.in
const updateSchemeLinks = () => {
  const MYSCHEME_URL = 'https://www.myscheme.gov.in/search';
  
  REAL_GOVT_SCHEMES.forEach(scheme => {
    scheme.applicationLink = MYSCHEME_URL;
  });
  
  console.log(`✓ Updated ${REAL_GOVT_SCHEMES.length} schemes to use myscheme.gov.in`);
};

// Run the update
updateSchemeLinks();

console.log('\n✓ All scheme application links now redirect to https://www.myscheme.gov.in/search');
console.log('\nUsers can search for specific schemes on the official government portal.');
