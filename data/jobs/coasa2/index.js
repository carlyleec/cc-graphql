const fs = require('fs');

module.exports = {
  id: 'coasa2',
  title: 'Civic Programmer: Systems Analyst II',
  place: 'Asheville, NC',
  latitude: -82.548876,
  longitude: 35.595564,
  organization: 'The City of Asheville',
  organization_link: 'http://www.ashevillenc.gov/',
  start: 'Jul, 2014',
  end: 'Jan, 2016',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
