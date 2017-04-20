const fs = require('fs');

module.exports = {
  id: 'locusse',
  title: 'Software Engineer',
  place: 'Asheville, NC',
  latitude: -82.554188,
  longitude: 35.486468,
  organization: 'Locus Technologies',
  organization_link: 'http://locustec.com/',
  start: 'Aug, 2013',
  end: 'Jul, 2014',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
