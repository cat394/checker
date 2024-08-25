/**
 * Checks if a given number is a perfect number.
 *
 * A perfect number is a positive integer that is equal to the sum of its proper divisors,
 * excluding the number itself. For example, 6 is a perfect number because its divisors
 * (1, 2, 3) sum to 6.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is a perfect number, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsPerfectNumber(28); // 28 is a perfect number (1 + 2 + 4 + 7 + 14 = 28)
 *
 * @example
 * // Returns false
 * checkIsPerfectNumber(12); // 12 is not a perfect number (1 + 2 + 3 + 4 + 6 = 16)
 */
export const checkIsPerfectNumber = (num: number): boolean => {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i + (i === num / i ? 0 : num / i);
    }
  }
  return sum === num && num !== 1;
};

/**
 * Checks if a given number is not a perfect number.
 *
 * This is the inverse of `checkIsPerfectNumber`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not a perfect number, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotPerfectNumber(12); // 12 is not a perfect number (1 + 2 + 3 + 4 + 6 = 16)
 *
 * @example
 * // Returns false
 * checkIsNotPerfectNumber(28); // 28 is a perfect number (1 + 2 + 4 + 7 + 14 = 28)
 */
export const checkIsNotPerfectNumber = (num: number): boolean => {
  return !checkIsPerfectNumber(num);
};
