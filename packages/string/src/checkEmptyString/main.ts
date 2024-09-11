/**
 * Checks if a given string is empty.
 *
 * The function checks if the string is exactly an empty string ("").
 *
 * @param {string} str - The string to check.
 * @returns {str is ""} True if the string is empty, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_empty_string(''); // The string is empty
 *
 * @example
 * // Returns false
 * check_is_empty_string(' '); // The string contains a space, so it is not empty
 */
export const check_is_empty_string = (str: string): str is "" => {
  return str === "";
};

/**
 * Checks if a given string is not empty.
 *
 * This is the inverse of `check_is_empty_string`.
 *
 * @param {T extends string} str - The string to check.
 * @returns {str is Exclude<T, "">} True if the string is not empty, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_empty_string('hello'); // The string is not empty
 *
 * @example
 * // Returns false
 * check_is_not_empty_string(''); // The string is empty
 */
export const check_is_not_empty_string = <T extends string>(
  str: T,
): str is Exclude<T, ""> => {
  return !check_is_empty_string(str);
};
