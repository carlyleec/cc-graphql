const fs = require('fs');

module.exports = {
  id: 'storage',
  title: 'STORAGE AND INFRASTRUCTURE',
  image: '/assets/images/storage_1492206873990.png',
  linkTo: 'NULL',
  page: '/expertise/data',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
