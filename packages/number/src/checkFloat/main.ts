/**
 * Checks if the given number is a floating-point number (i.e., not an integer).
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is a floating-point number, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_float(4.5); // 4.5 is a floating-point number
 *
 * @example
 * // Returns false
 * check_is_float(4); // 4 is an integer, not a floating-point number
 */
export const check_is_float = (num: number): boolean => {
  return num % 1 !== 0;
};

/**
 * Checks if the given number is not a floating-point number (i.e., it is an integer).
 *
 * This is the inverse of `check_is_float`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not a floating-point number, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_float(4); // 4 is an integer
 *
 * @example
 * // Returns false
 * check_is_not_float(4.5); // 4.5 is a floating-point number
 */
export const check_is_not_float = (num: number): boolean => {
  return !check_is_float(num);
};
