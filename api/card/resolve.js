const { find } = require('lodash');
const cards = require('../../data/cards');

module.exports = (_, args) => (find(cards, args));
