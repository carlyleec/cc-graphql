const {
    GraphQLID,
    GraphQLString,
} = require('graphql');

module.exports = {
  id: {
    type: GraphQLID,
    description: 'The id of the school',
  },
  name: {
    type: GraphQLString,
    description: 'The name of the school',
  },
};
