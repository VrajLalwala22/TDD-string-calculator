function add(numbers) {
  if (numbers === "") return 0;
  let delimiter = /,|\n/;
  let nums = numbers;
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    delimiter = new RegExp(numbers[2].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    nums = numbers.slice(delimiterLineEnd + 1);
  }
  return nums
    .split(delimiter)
    .map(n => parseInt(n, 10))
    .reduce((sum, n) => sum + n, 0);
}

module.exports = add; 