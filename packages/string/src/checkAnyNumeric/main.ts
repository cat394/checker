/**
 * Checks if a given string is numeric.
 *
 * The function checks whether the string can be converted to a valid number.
 * This includes integers, floating-point numbers, and special numeric formats like "Infinity".
 * Note: Empty strings will be evaluated as `0` and return `true`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is numeric, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsAnyNumeric('123'); // The string represents an integer number
 *
 * @example
 * // Returns true
 * checkIsAnyNumeric('3.14'); // The string represents a floating-point number
 *
 * @example
 * // Returns true
 * checkIsAnyNumeric('Infinity'); // The string represents a special numeric value
 *
 * @example
 * // Returns true
 * checkIsAnyNumeric(''); // An empty string is evaluated as 0
 *
 * @example
 * // Returns false
 * checkIsAnyNumeric('abc'); // The string cannot be converted to a number
 */
export const checkIsAnyNumeric = (str: string): boolean => {
  return !isNaN(Number(str));
};

/**
 * Checks if a given string is not numeric.
 *
 * This is the inverse of `checkIsAnyNumeric`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not numeric, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotAnyNumeric('abc'); // The string cannot be converted to a number
 *
 * @example
 * // Returns false
 * checkIsNotAnyNumeric('123'); // The string represents an integer number
 *
 * @example
 * // Returns false
 * checkIsNotAnyNumeric(''); // An empty string is evaluated as 0
 */
export const checkIsNotAnyNumeric = (str: string): boolean => {
  return !checkIsAnyNumeric(str);
};
