const fs = require('fs');

module.exports = {
  id: 'simplicity',
  title: 'SimpliCity',
  image: '/assets/images/simplicity_1492207873995.png',
  linkTo: 'NULL',
  page: '/expertise/development',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
