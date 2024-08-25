/**
 * Checks if a given number is odd.
 *
 * The function determines whether the absolute value of the number is odd.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is odd, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsOdd(3); // 3 is an odd number
 *
 * @example
 * // Returns true
 * checkIsOdd(-5); // -5 is an odd number
 *
 * @example
 * // Returns false
 * checkIsOdd(4); // 4 is an even number
 *
 * @example
 * // Returns false
 * checkIsOdd(0); // 0 is considered even
 */
export const checkIsOdd = (num: number): boolean => {
  return Math.abs(num) % 2 === 1;
};

/**
 * Checks if a given number is not odd.
 *
 * This is the inverse of `checkIsOdd`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not odd, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotOdd(4); // 4 is an even number
 *
 * @example
 * // Returns true
 * checkIsNotOdd(0); // 0 is considered even
 *
 * @example
 * // Returns false
 * checkIsNotOdd(3); // 3 is an odd number
 *
 * @example
 * // Returns false
 * checkIsNotOdd(-5); // -5 is an odd number
 */
export const checkIsNotOdd = (num: number): boolean => {
  return !checkIsOdd(num);
};
