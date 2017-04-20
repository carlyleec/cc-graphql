const fs = require('fs');

module.exports = {
  id: 'development',
  title: 'DEVELOPMENT',
  image: '/assets/images/development_1492208173760.png',
  linkTo: '/expertise/development',
  page: '/expertise',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
