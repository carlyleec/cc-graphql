const { GraphQLList } = require('graphql');
const schoolType = require('../school/type');

module.exports = new GraphQLList(schoolType);
