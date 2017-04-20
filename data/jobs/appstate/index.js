const fs = require('fs');

module.exports = {
  id: 'appstate',
  title: 'Research-Teaching Assistant',
  place: 'Boone, NC',
  latitude: -81.678829,
  longitude: 36.212527,
  organization: 'Appalachian State University',
  organization_link: 'http://www.appstate.edu/',
  start: 'Aug, 2011',
  end: 'May, 2013',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
