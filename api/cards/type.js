const { GraphQLList } = require('graphql');
const cardType = require('../card/type');

module.exports = new GraphQLList(cardType);
