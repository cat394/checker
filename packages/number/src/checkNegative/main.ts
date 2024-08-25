/**
 * Checks if a given number is negative.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is negative, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNegative(-5); // -5 is a negative number
 *
 * @example
 * // Returns false
 * checkIsNegative(3); // 3 is not a negative number
 */
export const checkIsNegative = (num: number): boolean => {
  return num < 0;
};

/**
 * Checks if a given number is not negative.
 *
 * This is the inverse of `checkIsNegative`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not negative, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotNegative(3); // 3 is not a negative number
 *
 * @example
 * // Returns false
 * checkIsNotNegative(-5); // -5 is a negative number
 */
export const checkIsNotNegative = (num: number): boolean => {
  return !checkIsNegative(num);
};
