/**
 * Checks if the given number is less than or equal to the specified threshold.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is less than or equal to the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_less_than_or_equal(5, 10); // 5 is less than or equal to 10
 *
 * @example
 * // Returns false
 * check_is_less_than_or_equal(15, 10); // 15 is greater than 10
 */
export const check_is_less_than_or_equal = (
  num: number,
  threshold: number,
): boolean => {
  return num <= threshold;
};

/**
 * Checks if the given number is not less than or equal to the specified threshold.
 *
 * This is the inverse of `check_is_less_than_or_equal`.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is not less than or equal to the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_less_than_or_equal(15, 10); // 15 is greater than 10
 *
 * @example
 * // Returns false
 * check_is_not_less_than_or_equal(5, 10); // 5 is less than or equal to 10
 */
export const check_is_not_less_than_or_equal = (
  num: number,
  threshold: number,
): boolean => {
  return !check_is_less_than_or_equal(num, threshold);
};
