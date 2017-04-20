const fs = require('fs');

module.exports = {
  id: 'steepslope',
  title: 'Steep Slope',
  image: '/assets/images/steepslope_1492207947318.png',
  linkTo: 'NULL',
  page: '/expertise/development',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
