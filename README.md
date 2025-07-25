# String Calculator

A simple String Calculator implemented in JavaScript using Test-Driven Development (TDD). The calculator supports addition of numbers in a string with various delimiters, custom delimiters, and robust error handling for negative numbers and large values.

## Tools Used
- **JavaScript**: Core language for implementation
- **Jest**: Testing framework for unit tests
- **Node.js**: Runtime environment

## Test Cases

| #  | Test Description                                      | Input                | Expected Output                | Fail Screenshot                | Pass Screenshot                |
|----|-------------------------------------------------------|----------------------|-------------------------------|-------------------------------|-------------------------------|
| 1  | Returns 0 for empty string                            | ""                   | 0                             | ![Fail](./screenshots/1_fail.png) | ![Pass](./screenshots/1_pass.png) |
| 2  | Returns number for single number string               | "5"                  | 5                             | ![Fail](./screenshots/2_fail.png) | ![Pass](./screenshots/2_pass.png) |
| 3  | Returns sum for two numbers                           | "1,2"                | 3                             | ![Fail](./screenshots/3_fail.png) | ![Pass](./screenshots/3_pass.png) |
| 4  | Returns sum for unknown amount of numbers             | "1,2,3"              | 6                             | test did not fail            | ![Pass](./screenshots/4_pass.png) |
| 5  | Returns sum when numbers are separated by commas/newlines | "1\n2,3"           | 6                             | ![Fail](./screenshots/5_fail.png) | ![Pass](./screenshots/5_pass.png) |
| 6  | Returns sum when using custom delimiter               | "//;\n1;2"           | 3                             | ![Fail](./screenshots/6_fail.png) | ![Pass](./screenshots/6_pass.png) |
| 7  | Throws exception for negative numbers                 | "1,-2,3,-4"          | Error: negatives not allowed: -2,-4 | ![Fail](./screenshots/7_fail.png) | ![Pass](./screenshots/7_pass.png) |
| 8  | Ignores numbers bigger than 1000                      | "2,1001"             | 2                             | ![Fail](./screenshots/8_fail.png) | ![Pass](./screenshots/8_pass.png) |
| 9  | Supports delimiters of any length                     | "//[***]\n1***2***3" | 6                             | ![Fail](./screenshots/9_fail.png) | ![Pass](./screenshots/9_pass.png) |
| 10 | Supports multiple delimiters                          | "//[*][%]\n1*2%3"    | 6                             | ![Fail](./screenshots/10_fail.png) | ![Pass](./screenshots/10_pass.png) |

> **Note:** If a test case did not fail initially (i.e., the feature was already supported by a previous implementation), the fail screenshot is marked as 'N/A'.

---

## How to Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run tests:
   ```sh
   npm test
   ```

## License
MIT
