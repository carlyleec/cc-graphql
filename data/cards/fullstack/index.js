const fs = require('fs');

module.exports = {
  id: 'fullstack',
  title: 'FULL-STACK',
  image: '/assets/images/fullstack_1492207463314.png',
  linkTo: 'NULL',
  page: '/expertise/design',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
