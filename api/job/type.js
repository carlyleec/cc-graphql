const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
} = require('graphql');

const description = require('./description');

module.exports = new GraphQLObjectType({
  name: 'Job',
  description,
  fields: {
    id: {
      type: GraphQLID,
      description: 'The id of job',
    },
    title: {
      type: GraphQLString,
      description: 'My job title',
    },
    place: {
      type: GraphQLString,
      description: 'The location of the job',
    },
    latitude: {
      type: GraphQLFloat,
      description: 'The latitude of the job',
    },
    longitude: {
      type: GraphQLFloat,
      description: 'The longitude of the job',
    },
    organization: {
      type: GraphQLString,
      description: 'The name of the organization that employeed me',
    },
    organization_link: {
      type: GraphQLString,
      description: 'A link organization\'s website',
    },
    start: {
      type: GraphQLString,
      description: 'The month and year that I started working the job',
    },
    end: {
      type: GraphQLString,
      description: 'The month and year that I ended working the job',
    },
    body: {
      type: GraphQLString,
      description: 'Some markdown content about things that I accomplished on the job',
    },
  },
});
