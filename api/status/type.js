const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} = require('graphql');

const description = require('./description');

module.exports = new GraphQLObjectType({
  name: 'Status',
  description,
  fields: {
    id: {
      type: GraphQLID,
      description: 'The id of the status',
    },
    title: {
      type: GraphQLString,
      description: 'The title of my status',
    },
    body: {
      type: GraphQLString,
      description: 'Some markdown content about what I\'m up to',
    },
  },
});
