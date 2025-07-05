function add(numbers) {
  if (numbers === "") return 0;
  // For a single number string, return its integer value
  return parseInt(numbers, 10);
}

module.exports = add; 