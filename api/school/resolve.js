const { find } = require('lodash');
const schools = require('../../data/schools');

module.exports = (_, args) => (find(schools, args));
