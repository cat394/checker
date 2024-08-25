/**
 * Checks if a given string represents infinity.
 *
 * The function checks if the string is exactly "Infinity" or "-Infinity",
 * which are special numeric strings representing positive and negative infinity.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string represents infinity, otherwise false.
 *
 * @example
 * // Returns true
 * checkStringIsInfinity('Infinity'); // The string is "Infinity"
 *
 * @example
 * // Returns true
 * checkStringIsInfinity('-Infinity'); // The string is "-Infinity"
 *
 * @example
 * // Returns false
 * checkStringIsInfinity('123'); // The string is a regular numeric string, not infinity
 *
 * @example
 * // Returns false
 * checkStringIsInfinity('infinity'); // The string is not exactly "Infinity" or "-Infinity"
 */
export const checkStringIsInfinity = (str: string): boolean => {
  return str === "Infinity" || str === "-Infinity";
};

/**
 * Checks if a given string does not represent infinity.
 *
 * This is the inverse of `checkStringIsInfinity`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string does not represent infinity, otherwise false.
 *
 * @example
 * // Returns true
 * checkStringIsNotInfinity('123'); // The string is a regular numeric string, not infinity
 *
 * @example
 * // Returns true
 * checkStringIsNotInfinity('infinity'); // The string is not exactly "Infinity" or "-Infinity"
 *
 * @example
 * // Returns false
 * checkStringIsNotInfinity('Infinity'); // The string is "Infinity"
 *
 * @example
 * // Returns false
 * checkStringIsNotInfinity('-Infinity'); // The string is "-Infinity"
 */
export const checkStringIsNotInfinity = (str: string): boolean => {
  return !checkStringIsInfinity(str);
};
