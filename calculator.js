function add(numbers) {
  if (numbers === "") return 0;
  // Default delimiters: comma or newline
  let delimiterPattern = /,|\n/;
  let numberString = numbers;
  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    // Escape special regex characters in delimiter
    delimiterPattern = new RegExp(numbers[2].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    numberString = numbers.slice(delimiterLineEnd + 1);
  }
  return numberString
    .split(delimiterPattern)
    .map(n => parseInt(n, 10))
    .reduce((sum, n) => sum + n, 0);
}

module.exports = add; 