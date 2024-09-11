/**
 * Checks if a given number is within a specified range, inclusive.
 *
 * The function evaluates whether `num` is greater than or equal to `min`
 * and less than or equal to `max`.
 *
 * @param {number} num - The number to check.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {boolean} True if the number is within the range, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_within_range(5, 1, 10); // 5 is within the range [1, 10]
 *
 * @example
 * // Returns false
 * check_is_within_range(15, 1, 10); // 15 is not within the range [1, 10]
 */
export const check_is_within_range = (
  num: number,
  min: number,
  max: number,
): boolean => {
  return num >= min && num <= max;
};

/**
 * Checks if a given number is not within a specified range.
 *
 * This is the inverse of `check_is_within_range`.
 *
 * The function evaluates whether `num` is less than `min` or greater than `max`.
 *
 * @param {number} num - The number to check.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {boolean} True if the number is not within the range, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_within_range(15, 1, 10); // 15 is not within the range [1, 10]
 *
 * @example
 * // Returns false
 * check_is_not_within_range(5, 1, 10); // 5 is within the range [1, 10]
 */
export const check_is_not_within_range = (
  num: number,
  min: number,
  max: number,
): boolean => {
  return !check_is_within_range(num, min, max);
};
