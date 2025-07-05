function add(numbers) {
  if (numbers === "") return 0;
  // Default delimiters: comma or newline
  let delimiterPattern = /,|\n/;
  let numberString = numbers;
  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.slice(2, delimiterLineEnd);
    // Support delimiters of any length: //[delimiter]\n
    let delimiter = delimiterSection;
    if (delimiter.startsWith("[")) {
      delimiter = delimiterSection.match(/\[(.*)\]/)[1];
    }
    // Escape special regex characters in delimiter
    delimiterPattern = new RegExp(delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    numberString = numbers.slice(delimiterLineEnd + 1);
  }
  const numArray = numberString
    .split(delimiterPattern)
    .map(n => parseInt(n, 10));
  const negatives = numArray.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }
  return numArray
    .filter(n => n <= 1000)
    .reduce((sum, n) => sum + n, 0);
}

module.exports = add; 