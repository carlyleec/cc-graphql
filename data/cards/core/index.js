const fs = require('fs');

module.exports = {
  id: 'core',
  title: 'CORE',
  image: '/assets/images/core_1492207596175.png',
  linkTo: 'NULL',
  page: '/expertise/development',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
