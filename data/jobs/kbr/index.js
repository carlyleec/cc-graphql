const fs = require('fs');

module.exports = {
  id: 'kbr',
  title: 'Logistics Coordinator',
  place: 'Al Asad, Iraq',
  latitude: 10.34983,
  longitude: 43.621509,
  organization: 'Kellog Brown and Root- LOGCAP III',
  organization_link: 'https://www.kbr.com/',
  start: 'Oct, 2005',
  end: 'Nov, 2006',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
