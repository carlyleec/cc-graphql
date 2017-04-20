const { filter } = require('lodash');
const cards = require('../../data/cards');

module.exports = (_, args) => (filter(cards, args));
