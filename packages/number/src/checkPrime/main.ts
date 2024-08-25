/**
 * Checks if a given number is a prime number.
 *
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is a prime number, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsPrime(7); // 7 is a prime number
 *
 * @example
 * // Returns false
 * checkIsPrime(10); // 10 is not a prime number (divisible by 2 and 5)
 */
export const checkIsPrime = (num: number): boolean => {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

/**
 * Checks if a given number is not a prime number.
 *
 * This is the inverse of `checkIsPrime`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not a prime number, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotPrime(10); // 10 is not a prime number (divisible by 2 and 5)
 *
 * @example
 * // Returns false
 * checkIsNotPrime(7); // 7 is a prime number
 */
export const checkIsNotPrime = (num: number): boolean => {
  return !checkIsPrime(num);
};
