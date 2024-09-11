/**
 * Checks if a given number is even.
 *
 * A number is even if it is divisible by 2 without a remainder.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is even, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_even(4); // 4 is an even number
 *
 * @example
 * // Returns false
 * check_is_even(7); // 7 is not an even number
 */
export const check_is_even = (num: number): boolean => {
  return num % 2 === 0;
};

/**
 * Checks if a given number is not even (odd).
 *
 * This is the inverse of `check_is_even`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not even (odd), otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_even(7); // 7 is not an even number (it's odd)
 *
 * @example
 * // Returns false
 * check_is_not_even(4); // 4 is an even number
 */
export const check_is_not_even = (num: number): boolean => {
  return !check_is_even(num);
};
