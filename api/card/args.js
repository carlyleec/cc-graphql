const {
    GraphQLID,
    GraphQLString,
} = require('graphql');

module.exports = {
  id: {
    type: GraphQLID,
    description: 'The ID of the card',
  },
  title: {
    type: GraphQLString,
    description: 'The title of the card',
  },
};
