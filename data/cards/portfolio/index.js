const fs = require('fs');

module.exports = {
  id: 'portfolio',
  title: 'PORTFOLIO',
  image: '/assets/images/hydrasquid_1492207826341.png',
  linkTo: 'NULL',
  page: '/expertise/development',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
