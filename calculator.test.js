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

test('returns sum when using custom delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws exception for negative numbers with message including all negatives', () => {
  expect(() => add("1,-2,3,-4")).toThrow("negatives not allowed: -2,-4");
});

test('ignores numbers bigger than 1000', () => {
  expect(add("2,1001")).toBe(2);
});

test('supports delimiters of any length', () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
}); 