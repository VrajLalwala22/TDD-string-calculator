const add = require('./calculator');

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number for single number string', () => {
  expect(add("5")).toBe(5);
}); 