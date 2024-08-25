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
 * checkIsWithinRange(5, 1, 10); // 5 is within the range [1, 10]
 *
 * @example
 * // Returns false
 * checkIsWithinRange(15, 1, 10); // 15 is not within the range [1, 10]
 */
export const checkIsWithinRange = (
  num: number,
  min: number,
  max: number,
): boolean => {
  return num >= min && num <= max;
};

/**
 * Checks if a given number is not within a specified range.
 *
 * This is the inverse of `checkIsWithinRange`.
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
 * checkIsNotWithinRange(15, 1, 10); // 15 is not within the range [1, 10]
 *
 * @example
 * // Returns false
 * checkIsNotWithinRange(5, 1, 10); // 5 is within the range [1, 10]
 */
export const checkIsNotWithinRange = (
  num: number,
  min: number,
  max: number,
): boolean => {
  return !checkIsWithinRange(num, min, max);
};
