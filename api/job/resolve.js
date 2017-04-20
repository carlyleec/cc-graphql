const { find } = require('lodash');
const jobs = require('../../data/jobs');

module.exports = (_, args) => (find(jobs, args));
