const fs = require('fs');

module.exports = {
  id: 'coasasr',
  title: 'Software Developer: Systems Analyst Senior',
  place: 'Asheville, NC',
  latitude: -82.548876,
  longitude: 35.595564,
  organization: 'The City of Asheville',
  organization_link: 'http://www.ashevillenc.gov/',
  start: 'Jan, 2016',
  end: 'Mar, 2017',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
