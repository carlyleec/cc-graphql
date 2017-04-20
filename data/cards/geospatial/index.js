const fs = require('fs');

module.exports = {
  id: 'geospatial',
  title: 'GEOSPATIAL',
  image: '/assets/images/geospatial_1492206703084.png',
  linkTo: 'NULL',
  page: '/expertise/data',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
