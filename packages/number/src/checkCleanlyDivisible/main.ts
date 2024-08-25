/**
 * Checks if a given number is cleanly divisible by a divisor.
 *
 * A number is considered cleanly divisible if the remainder of the division is zero.
 *
 * @param {number} num - The number to check.
 * @param {number} divisor - The divisor to check against.
 * @returns {boolean} True if the number is cleanly divisible by the divisor, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsCleanlyDivisible(10, 2); // 10 is cleanly divisible by 2
 *
 * @example
 * // Returns false
 * checkIsCleanlyDivisible(10, 3); // 10 is not cleanly divisible by 3
 */
export const checkIsCleanlyDivisible = (
  num: number,
  divisor: number,
): boolean => {
  return num % divisor === 0;
};

/**
 * Checks if a given number is not cleanly divisible by a divisor.
 *
 * This is the inverse of `checkIsCleanlyDivisible`.
 *
 * @param {number} num - The number to check.
 * @param {number} divisor - The divisor to check against.
 * @returns {boolean} True if the number is not cleanly divisible by the divisor, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotCleanlyDivisible(10, 3); // 10 is not cleanly divisible by 3
 *
 * @example
 * // Returns false
 * checkIsNotCleanlyDivisible(10, 2); // 10 is cleanly divisible by 2
 */
export const checkIsNotCleanlyDivisible = (
  num: number,
  divisor: number,
): boolean => {
  return !checkIsCleanlyDivisible(num, divisor);
};
