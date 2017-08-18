const fs = require('fs');

module.exports = {
  id: 'grow',
  title: 'Software Engineer',
  place: 'Orem, UT',
  latitude: -111.681706,
  longitude: 40.323111,
  organization: 'Grow.com',
  organization_link: 'https://www.grow.com/',
  start: 'Jun, 2017',
  end: 'PRESENT',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
