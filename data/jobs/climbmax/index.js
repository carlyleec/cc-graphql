const fs = require('fs');

module.exports = {
  id: 'climbax',
  title: 'Staff and Router Setter',
  place: 'Asheville, NC',
  latitude: -82.555972,
  longitude: 35.594748,
  organization: 'Climbmax Climbing Center',
  organization_link: 'http://www.climbmaxnc.com/',
  start: 'Mar, 2009',
  end: 'Aug, 2011',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
