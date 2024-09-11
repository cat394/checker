/**
 * Checks if the given number is an integer.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is an integer, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_integer(5); // 5 is an integer
 *
 * @example
 * // Returns false
 * check_is_integer(5.5); // 5.5 is not an integer
 */
export const check_is_integer = (num: number): boolean => {
  return Number.isInteger(num);
};

/**
 * Checks if the given number is not an integer.
 *
 * This is the inverse of `check_is_integer`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not an integer, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_integer(5.5); // 5.5 is not an integer
 *
 * @example
 * // Returns false
 * check_is_not_integer(5); // 5 is an integer
 */
export const check_is_not_integer = (num: number): boolean => {
  return !check_is_integer(num);
};
