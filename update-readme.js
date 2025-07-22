const fs = require('fs');

const startYear = 2016;
const currentYear = new Date().getFullYear();
const years = currentYear - startYear;

let content = fs.readFileSync('README.md', 'utf8');
content = content.replace(/Software Engineer.+experience\./, 
  `Software Engineer having ${years}+ years of experience working in various domains like full stack, backend.`);

fs.writeFileSync('README.md', content);
console.log('README.md updated successfully.');
