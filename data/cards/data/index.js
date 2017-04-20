const fs = require('fs');

module.exports = {
  id: 'data',
  title: 'DATA',
  image: '/assets/images/data_1492208102394.png',
  linkTo: '/expertise/data',
  page: '/expertise',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
