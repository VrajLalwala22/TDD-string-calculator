function add(numbers) {
  if (numbers === "") return 0;
  // For a single number string, return its integer value
  if (!numbers.includes(",")) return parseInt(numbers, 10);
  const [a, b] = numbers.split(",");
  return parseInt(a, 10) + parseInt(b, 10);
}

module.exports = add; 