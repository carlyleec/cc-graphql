const fs = require('fs');

module.exports = {
  id: 'ui',
  title: 'UI',
  image: '/assets/images/ui_1492207508522.png',
  linkTo: 'NULL',
  page: '/expertise/design',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
