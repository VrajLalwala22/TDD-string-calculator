function add(numbers) {
  if (numbers === "") return 0;
  // Default delimiters: comma or newline
  let delimiterPattern = /,|\n/;
  let numberString = numbers;
  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.slice(2, delimiterLineEnd);
    // Support multiple delimiters of any length: //[delim1][delim2]\n
    const delimiterMatches = delimiterSection.match(/\[(.+?)\]/g);
    if (delimiterMatches) {
      // Remove brackets and escape regex special characters
      const delimiters = delimiterMatches.map(d => d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      delimiterPattern = new RegExp(delimiters.join("|"));
    } else {
      // Single character delimiter
      delimiterPattern = new RegExp(delimiterSection.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    }
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