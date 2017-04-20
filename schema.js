const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');

const fields = require('./api');

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'This is an API of resume-ish data to be used on my porfolio site',
  fields,
});


module.exports = new GraphQLSchema({
  query: queryType,
});
