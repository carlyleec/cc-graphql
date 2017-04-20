const fs = require('fs');

module.exports = {
  id: 'oneasheville',
  title: 'OneAsheville',
  image: '/assets/images/oneasheville_1492207709629.png',
  linkTo: 'NULL',
  page: '/expertise/development',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
