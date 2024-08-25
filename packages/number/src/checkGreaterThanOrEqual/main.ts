/**
 * Checks if a number is greater than or equal to a given threshold.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is greater than or equal to the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsGreaterThanOrEqual(10, 5); // 10 is greater than or equal to 5
 *
 * @example
 * // Returns false
 * checkIsGreaterThanOrEqual(3, 5); // 3 is not greater than or equal to 5
 */
export const checkIsGreaterThanOrEqual = (
  num: number,
  threshold: number,
): boolean => {
  return num >= threshold;
};

/**
 * Checks if a number is not greater than or equal to a given threshold.
 *
 * This is the inverse of `checkIsGreaterThanOrEqual`.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is not greater than or equal to the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotGreaterThanOrEqual(3, 5); // 3 is not greater than or equal to 5
 *
 * @example
 * // Returns false
 * checkIsNotGreaterThanOrEqual(10, 5); // 10 is greater than or equal to 5
 */
export const checkIsNotGreaterThanOrEqual = (
  num: number,
  threshold: number,
): boolean => {
  return !checkIsGreaterThanOrEqual(num, threshold);
};
