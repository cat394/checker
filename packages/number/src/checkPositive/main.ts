/**
 * Checks if a given number is positive.
 *
 * A positive number is any number greater than zero.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is positive, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsPositive(5); // 5 is a positive number
 *
 * @example
 * // Returns false
 * checkIsPositive(-3); // -3 is not a positive number
 */
export const checkIsPositive = (num: number): boolean => {
  return num > 0;
};

/**
 * Checks if a given number is not positive.
 *
 * This is the inverse of `checkIsPositive`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not positive, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotPositive(-3); // -3 is not a positive number
 *
 * @example
 * // Returns false
 * checkIsNotPositive(5); // 5 is a positive number
 */
export const checkIsNotPositive = (num: number): boolean => {
  return !checkIsPositive(num);
};
