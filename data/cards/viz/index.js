const fs = require('fs');

module.exports = {
  id: 'viz',
  title: 'ANALYSIS AND VISUALIZATION',
  image: '/assets/images/viz_1492206978022.png',
  linkTo: 'NULL',
  page: '/expertise/data',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
