const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
} = require('graphql');

const description = require('./description');

module.exports = new GraphQLObjectType({
  name: 'School',
  description,
  fields: {
    id: {
      type: GraphQLID,
      description: 'The id of the school',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the school',
    },
    link: {
      type: GraphQLString,
      description: 'A link to the school\'s website',
    },
    city: {
      type: GraphQLString,
      description: 'The city where the school is located',
    },
    state: {
      type: GraphQLString,
      description: 'The state where the school is located',
    },
    latitude: {
      type: GraphQLFloat,
      description: 'The latitude of the school',
    },
    longitude: {
      type: GraphQLFloat,
      description: 'The longitude of the school',
    },
    degree_type: {
      type: GraphQLString,
      description: 'The type of degree I earned at the school',
    },
    degree: {
      type: GraphQLString,
      description: 'The degree I earned at the school',
    },
    concentration: {
      type: GraphQLString,
      description: 'The concentration of the degree that I earned at the school',
    },
    graduation_month: {
      type: GraphQLString,
      description: 'The month I graduated from the school',
    },
    graduation_year: {
      type: GraphQLInt,
      description: 'The year I graduated from the school',
    },
    coursework: {
      type: new GraphQLList(GraphQLString),
      description: 'A select list of the courses that I took at the school',
    },
    body: {
      type: GraphQLString,
      description: 'Some markdown content about my time at the school',
    },
  },
});
