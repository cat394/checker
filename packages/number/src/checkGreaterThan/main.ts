/**
 * Checks if the given number is greater than a specified threshold.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is greater than the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsGreaterThan(10, 5); // 10 is greater than 5
 *
 * @example
 * // Returns false
 * checkIsGreaterThan(3, 5); // 3 is not greater than 5
 */
export const checkIsGreaterThan = (num: number, threshold: number): boolean => {
  return num > threshold;
};

/**
 * Checks if the given number is not greater than a specified threshold.
 *
 * This is the inverse of `checkIsGreaterThan`.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is not greater than the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotGreaterThan(3, 5); // 3 is not greater than 5
 *
 * @example
 * // Returns false
 * checkIsNotGreaterThan(10, 5); // 10 is greater than 5
 */
export const checkIsNotGreaterThan = (
  num: number,
  threshold: number,
): boolean => {
  return !checkIsGreaterThan(num, threshold);
};
