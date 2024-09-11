/**
 * Checks if a given string is in exponential notation format.
 *
 * The function checks if the string matches the pattern of a valid exponential notation,
 * such as "1e5" or "-3.14E-10".
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is in exponential notation, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_exponential_notation("1e5"); // The string "1e5" is in exponential notation
 *
 * @example
 * // Returns false
 * check_is_exponential_notation("123"); // The string "123" is not in exponential notation
 */
export const check_is_exponential_notation = (str: string): boolean => {
  const exponentialRegex = /^[-+]?[0-9]+(\.[0-9]+)?([eE][-+]?[0-9]+)$/;
  return exponentialRegex.test(str);
};

/**
 * Checks if a given string is not in exponential notation format.
 *
 * This is the inverse of `check_is_exponential_notation`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not in exponential notation, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_exponential_notation("123"); // The string "123" is not in exponential notation
 *
 * @example
 * // Returns false
 * check_is_not_exponential_notation("1e5"); // The string "1e5" is in exponential notation
 */
export const check_is_not_exponential_notation = (str: string): boolean => {
  return !check_is_exponential_notation(str);
};
