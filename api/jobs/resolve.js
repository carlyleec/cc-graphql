const { filter } = require('lodash');
const jobs = require('../../data/jobs');

module.exports = (_, args) => (filter(jobs, args));
