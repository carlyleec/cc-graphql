const fs = require('fs');

module.exports = {
  id: 'js',
  title: 'JAVASCRIPT',
  image: '/assets/images/js_1492207640951.png',
  linkTo: 'NULL',
  page: '/expertise/development',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
