const fs = require('fs');

module.exports = {
  id: 'usarmy',
  title: 'Transportation Management Coordinator',
  place: 'Livorno, Italy',
  latitude: 10.34983,
  longitude: 43.621509,
  organization: 'US Army',
  organization_link: 'https://www.kbr.com/',
  start: 'Sep, 2001',
  end: 'Sep, 2005',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
