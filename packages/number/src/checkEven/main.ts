/**
 * Checks if a given number is even.
 *
 * A number is even if it is divisible by 2 without a remainder.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is even, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsEven(4); // 4 is an even number
 *
 * @example
 * // Returns false
 * checkIsEven(7); // 7 is not an even number
 */
export const checkIsEven = (num: number): boolean => {
  return num % 2 === 0;
};

/**
 * Checks if a given number is not even (odd).
 *
 * This is the inverse of `checkIsEven`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not even (odd), otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotEven(7); // 7 is not an even number (it's odd)
 *
 * @example
 * // Returns false
 * checkIsNotEven(4); // 4 is an even number
 */
export const checkIsNotEven = (num: number): boolean => {
  return !checkIsEven(num);
};
