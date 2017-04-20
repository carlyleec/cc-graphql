const fs = require('fs');

module.exports = {
  id: 'ux',
  title: 'UX',
  image: '/assets/images/ux_1492207555038.png',
  linkTo: 'NULL',
  page: '/expertise/design',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
