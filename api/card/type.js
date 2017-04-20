const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} = require('graphql');

const description = require('./description');

module.exports = new GraphQLObjectType({
  name: 'Card',
  description,
  fields: {
    id: {
      type: GraphQLID,
      description: 'The id of the card',
    },
    title: {
      type: GraphQLString,
      description: 'The title of the card',
    },
    image: {
      type: GraphQLString,
      description: 'The relative path to an image',
    },
    linkTo: {
      type: GraphQLString,
      description: 'A route to link to',
    },
    page: {
      type: GraphQLString,
      description: 'The path of the page on which to show the card',
    },
    body: {
      type: GraphQLString,
      description: 'Some markdown content of the card',
    },
  },
});
