const {
    GraphQLID,
    GraphQLString,
} = require('graphql');

module.exports = {
  id: {
    type: GraphQLID,
    description: 'The id of the job',
  },
  title: {
    type: GraphQLString,
    description: 'My job title',
  },
};
