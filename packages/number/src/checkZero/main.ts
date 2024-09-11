/**
 * Checks if the given number is zero.
 *
 * @param {number} num - The number to check.
 * @returns {num is 0} True if the number is zero, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_zero(0); // 0 is zero
 *
 * @example
 * // Returns false
 * check_is_zero(5); // 5 is not zero
 */
export const check_is_zero = (num: number): num is 0 => {
  return num === 0;
};

/**
 * Checks if the given number is not zero.
 *
 * This is the inverse of `check_is_zero`.
 *
 * @param {T extends number} num - The number to check.
 * @returns {num is Exclude<T, 0>} True if the number is not zero, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_zero(5); // 5 is not zero
 *
 * @example
 * // Returns false
 * check_is_not_zero(0); // 0 is zero
 */
export const check_is_not_zero = <T extends number>(
  num: T,
): num is Exclude<T, 0> => {
  return !check_is_zero(num);
};
