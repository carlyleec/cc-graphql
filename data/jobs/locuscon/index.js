const fs = require('fs');

module.exports = {
  id: 'locuscon',
  title: 'Contractor',
  place: 'Asheville, NC',
  latitude: -82.554188,
  longitude: 35.486468,
  organization: 'Locus Technologies',
  organization_link: 'http://locustec.com/',
  start: 'Apr, 2013',
  end: 'Aug, 2013',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
