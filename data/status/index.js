const fs = require('fs');

module.exports = {
  id: 'status',
  title: 'PRESENT',
  body: fs.readFileSync(`${__dirname}/markdown.md`, 'utf8'),
};
