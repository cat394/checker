/**
 * Checks if a number is less than a specified threshold.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is less than the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsLessThan(5, 10); // 5 is less than 10
 *
 * @example
 * // Returns false
 * checkIsLessThan(15, 10); // 15 is not less than 10
 */
export const checkIsLessThan = (num: number, threshold: number): boolean => {
  return num < threshold;
};

/**
 * Checks if a number is not less than a specified threshold.
 *
 * This is the inverse of `checkIsLessThan`.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is not less than the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotLessThan(15, 10); // 15 is not less than 10
 *
 * @example
 * // Returns false
 * checkIsNotLessThan(5, 10); // 5 is less than 10
 */
export const checkIsNotLessThan = (num: number, threshold: number): boolean => {
  return !checkIsLessThan(num, threshold);
};
