const add = require('./calculator');

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number for single number string', () => {
  expect(add("5")).toBe(5);
});

test('returns sum for two numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('returns sum for unknown amount of numbers', () => {
  expect(add("1,2,3")).toBe(6);
});

test('returns sum when numbers are separated by commas and new lines', () => {
  expect(add("1\n2,3")).toBe(6);
}); 