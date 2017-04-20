const fs = require('fs');

module.exports = {
  id: 'hg',
  title: 'Service Technician (Gutter Monkey)',
  place: 'Asheville, NC',
  latitude: -82.593201,
  longitude: 35.576005,
  organization: 'Higher Ground Rainwater Systems',
  organization_link: 'http://hg-rainwater.com/',
  start: 'Jan, 2011',
  end: 'Aug, 2011',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
