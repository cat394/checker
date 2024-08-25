/**
 * Checks if the given number is less than or equal to the specified threshold.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is less than or equal to the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsLessThanOrEqual(5, 10); // 5 is less than or equal to 10
 *
 * @example
 * // Returns false
 * checkIsLessThanOrEqual(15, 10); // 15 is greater than 10
 */
export const checkIsLessThanOrEqual = (
  num: number,
  threshold: number,
): boolean => {
  return num <= threshold;
};

/**
 * Checks if the given number is not less than or equal to the specified threshold.
 *
 * This is the inverse of `checkIsLessThanOrEqual`.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is not less than or equal to the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotLessThanOrEqual(15, 10); // 15 is greater than 10
 *
 * @example
 * // Returns false
 * checkIsNotLessThanOrEqual(5, 10); // 5 is less than or equal to 10
 */
export const checkIsNotLessThanOrEqual = (
  num: number,
  threshold: number,
): boolean => {
  return !checkIsLessThanOrEqual(num, threshold);
};
