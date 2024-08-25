/**
 * Checks if the given number is an integer.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is an integer, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsInteger(5); // 5 is an integer
 *
 * @example
 * // Returns false
 * checkIsInteger(5.5); // 5.5 is not an integer
 */
export const checkIsInteger = (num: number): boolean => {
  return Number.isInteger(num);
};

/**
 * Checks if the given number is not an integer.
 *
 * This is the inverse of `checkIsInteger`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not an integer, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotInteger(5.5); // 5.5 is not an integer
 *
 * @example
 * // Returns false
 * checkIsNotInteger(5); // 5 is an integer
 */
export const checkIsNotInteger = (num: number): boolean => {
  return !checkIsInteger(num);
};
