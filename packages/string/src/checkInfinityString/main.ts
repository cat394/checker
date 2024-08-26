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
 * checkIsInfinityString('Infinity'); // The string is "Infinity"
 *
 * @example
 * // Returns true
 * checkIsInfinityString('-Infinity'); // The string is "-Infinity"
 *
 * @example
 * // Returns false
 * checkIsInfinityString('123'); // The string is a regular numeric string, not infinity
 *
 * @example
 * // Returns false
 * checkIsInfinityString('infinity'); // The string is not exactly "Infinity" or "-Infinity"
 */
export const checkIsInfinityString = (
  str: string,
): str is "Infinity" | "-Infinity" => {
  return str === "Infinity" || str === "-Infinity";
};

/**
 * Checks if a given string does not represent infinity.
 *
 * This is the inverse of `checkIsInfinityString`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string does not represent infinity, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotInfinityString('123'); // The string is a regular numeric string, not infinity
 *
 * @example
 * // Returns true
 * checkIsNotInfinityString('infinity'); // The string is not exactly "Infinity" or "-Infinity"
 *
 * @example
 * // Returns false
 * checkIsNotInfinityString('Infinity'); // The string is "Infinity"
 *
 * @example
 * // Returns false
 * checkIsNotInfinityString('-Infinity'); // The string is "-Infinity"
 */
export const checkIsNotInfinityString = (str: string): boolean => {
  return !checkIsInfinityString(str);
};
