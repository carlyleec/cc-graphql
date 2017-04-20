const { GraphQLString } = require('graphql');

module.exports = {
  organization: {
    type: GraphQLString,
    description: 'The name of the organization that employeed me',
  },
};
