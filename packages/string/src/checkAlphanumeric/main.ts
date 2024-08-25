/**
 * Checks if a given string is alphanumeric.
 *
 * The function checks if the string contains only letters and numbers (case insensitive).
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is alphanumeric, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsAlphanumeric('abc123'); // The string contains only letters and numbers
 *
 * @example
 * // Returns false
 * checkIsAlphanumeric('abc123!'); // The string contains a special character '!'
 */
export const checkIsAlphanumeric = (str: string): boolean => {
  const alphanumericRegex = /^[a-z0-9]+$/i;
  return alphanumericRegex.test(str);
};

/**
 * Checks if a given string is not alphanumeric.
 *
 * This is the inverse of `checkIsAlphanumeric`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not alphanumeric, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotAlphanumeric('abc123!'); // The string contains a special character '!'
 *
 * @example
 * // Returns false
 * checkIsNotAlphanumeric('abc123'); // The string contains only letters and numbers
 */
export const checkIsNotAlphanumeric = (str: string): boolean => {
  return !checkIsAlphanumeric(str);
};
