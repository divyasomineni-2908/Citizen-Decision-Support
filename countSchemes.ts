// Count total schemes
import REAL_GOVT_SCHEMES from './services/realSchemes';

console.log('='.repeat(60));
console.log('GOVERNMENT WELFARE SCHEMES DATABASE - SCHEME COUNT');
console.log('='.repeat(60));
console.log(`\nTotal Schemes: ${REAL_GOVT_SCHEMES.length}`);

// Count by category
const categories: Record<string, number> = {};
REAL_GOVT_SCHEMES.forEach(scheme => {
  categories[scheme.category] = (categories[scheme.category] || 0) + 1;
});

console.log('\n--- Schemes by Category ---');
Object.entries(categories)
  .sort((a, b) => b[1] - a[1])
  .forEach(([category, count]) => {
    console.log(`${category.padEnd(25)} : ${count}`);
  });

// Count by department
const departments: Record<string, number> = {};
REAL_GOVT_SCHEMES.forEach(scheme => {
  const dept = scheme.department.split(' - ')[0];
  departments[dept] = (departments[dept] || 0) + 1;
});

console.log('\n--- Top Departments (by scheme count) ---');
Object.entries(departments)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15)
  .forEach(([dept, count]) => {
    const truncDept = dept.length > 40 ? dept.substring(0, 37) + '...' : dept;
    console.log(`${truncDept.padEnd(40)} : ${count}`);
  });

// Count schemes by eligibility
let withIncomeLimit = 0;
let forStudents = 0;
let forWomen = 0;
let forPwD = 0;
let forRural = 0;
let forUrban = 0;
let stateSpecific = 0;

REAL_GOVT_SCHEMES.forEach(scheme => {
  if (scheme.eligibility.maxIncome) withIncomeLimit++;
  if (scheme.eligibility.isForStudents) forStudents++;
  if (scheme.eligibility.gender === 'Female') forWomen++;
  if (scheme.eligibility.isForPwD) forPwD++;
  if (scheme.eligibility.residence === 'Rural') forRural++;
  if (scheme.eligibility.residence === 'Urban') forUrban++;
  if (scheme.eligibility.state) stateSpecific++;
});

console.log('\n--- Scheme Eligibility Analysis ---');
console.log(`Schemes with income limit       : ${withIncomeLimit}`);
console.log(`Schemes for students             : ${forStudents}`);
console.log(`Schemes for women                : ${forWomen}`);
console.log(`Schemes for persons with disability: ${forPwD}`);
console.log(`Rural-focused schemes            : ${forRural}`);
console.log(`Urban-focused schemes            : ${forUrban}`);
console.log(`State-specific schemes           : ${stateSpecific}`);

console.log('\n' + '='.repeat(60));
