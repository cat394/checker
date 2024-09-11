/**
 * Checks if a given string includes a specific substring.
 *
 * The function checks if the provided string contains the specified substring.
 *
 * @param {string} str - The string to check.
 * @param {string} substring - The substring to look for within the string.
 * @returns {boolean} True if the string includes the specified substring, otherwise false.
 *
 * @example
 * // Returns true
 * check_has_substring('hello world', 'world'); // The string contains the substring 'world'
 *
 * @example
 * // Returns false
 * check_has_substring('hello world', 'planet'); // The string does not contain the substring 'planet'
 */
export const check_has_substring = (
  str: string,
  substring: string,
): boolean => {
  return str.includes(substring);
};

/**
 * Checks if a given string does not include a specific substring.
 *
 * This is the inverse of `check_has_substring`.
 *
 * @param {string} str - The string to check.
 * @param {string} substring - The substring to check against.
 * @returns {boolean} True if the string does not include the specified substring, otherwise false.
 *
 * @example
 * // Returns true
 * check_does_not_have_substring('hello world', 'planet'); // The string does not contain the substring 'planet'
 *
 * @example
 * // Returns false
 * check_does_not_have_substring('hello world', 'world'); // The string contains the substring 'world'
 */
export const check_does_not_have_substring = (
  str: string,
  substring: string,
): boolean => {
  return !check_has_substring(str, substring);
};
