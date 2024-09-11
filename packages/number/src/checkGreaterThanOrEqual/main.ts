/**
 * Checks if a number is greater than or equal to a given threshold.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is greater than or equal to the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_greater_than_or_equal(10, 5); // 10 is greater than or equal to 5
 *
 * @example
 * // Returns false
 * check_is_greater_than_or_equal(3, 5); // 3 is not greater than or equal to 5
 */
export const check_is_greater_than_or_equal = (
  num: number,
  threshold: number,
): boolean => {
  return num >= threshold;
};

/**
 * Checks if a number is not greater than or equal to a given threshold.
 *
 * This is the inverse of `check_is_greater_than_or_equal`.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is not greater than or equal to the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_greater_than_or_equal(3, 5); // 3 is not greater than or equal to 5
 *
 * @example
 * // Returns false
 * check_is_not_greater_than_or_equal(10, 5); // 10 is greater than or equal to 5
 */
export const check_is_not_greater_than_or_equal = (
  num: number,
  threshold: number,
): boolean => {
  return !check_is_greater_than_or_equal(num, threshold);
};
