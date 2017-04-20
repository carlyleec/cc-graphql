const { getCardById, getCards } = require('./index.js');


test('should return a card for an id', () => {
  expect(getCardById('core').id).toBe('core');
});
