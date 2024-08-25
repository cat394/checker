/**
 * Checks if the given number is a floating-point number (i.e., not an integer).
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is a floating-point number, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsFloat(4.5); // 4.5 is a floating-point number
 *
 * @example
 * // Returns false
 * checkIsFloat(4); // 4 is an integer, not a floating-point number
 */
export const checkIsFloat = (num: number): boolean => {
  return num % 1 !== 0;
};

/**
 * Checks if the given number is not a floating-point number (i.e., it is an integer).
 *
 * This is the inverse of `checkIsFloat`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not a floating-point number, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotFloat(4); // 4 is an integer
 *
 * @example
 * // Returns false
 * checkIsNotFloat(4.5); // 4.5 is a floating-point number
 */
export const checkIsNotFloat = (num: number): boolean => {
  return !checkIsFloat(num);
};
