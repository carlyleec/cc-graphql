const fs = require('fs');

module.exports = {
  id: 'carlylegen',
  title: 'Clerk',
  place: 'Pisgah Forest, NC',
  latitude: -82.703822,
  longitude: 35.273314,
  organization: 'Carlyle General Store',
  organization_link: null,
  start: 'Jan, 2007',
  end: 'Aug, 2008',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
