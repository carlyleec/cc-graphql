const { GraphQLString } = require('graphql');

module.exports = {
  page: {
    type: GraphQLString,
    description: 'The path of the page on which to show the card',
  },
};
