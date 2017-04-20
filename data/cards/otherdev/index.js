const fs = require('fs');

module.exports = {
  id: 'otherdev',
  title: 'OTHER',
  image: '/assets/images/other_1492207754737.png',
  linkTo: 'NULL',
  page: '/expertise/development',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
