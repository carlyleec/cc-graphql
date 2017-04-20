const fs = require('fs');

module.exports = {
  id: 'design',
  title: 'DESIGN',
  linkTo: '/expertise/design',
  image: '/assets/images/design_1492208140834.png',
  page: '/expertise',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
