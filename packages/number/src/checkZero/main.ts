/**
 * Checks if the given number is zero.
 *
 * @param {number} num - The number to check.
 * @returns {num is 0} True if the number is zero, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsZero(0); // 0 is zero
 *
 * @example
 * // Returns false
 * checkIsZero(5); // 5 is not zero
 */
export const checkIsZero = (num: number): num is 0 => {
  return num === 0;
};

/**
 * Checks if the given number is not zero.
 *
 * This is the inverse of `checkIsZero`.
 *
 * @param {T extends number} num - The number to check.
 * @returns {num is Exclude<T, 0>} True if the number is not zero, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotZero(5); // 5 is not zero
 *
 * @example
 * // Returns false
 * checkIsNotZero(0); // 0 is zero
 */
export const checkIsNotZero = <T extends number>(
  num: T,
): num is Exclude<T, 0> => {
  return !checkIsZero(num);
};
