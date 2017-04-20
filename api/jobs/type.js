const { GraphQLList } = require('graphql');
const jobType = require('../job/type');

module.exports = new GraphQLList(jobType);
