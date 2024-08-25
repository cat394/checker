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
 * checkIsEmptryString(''); // The string is empty
 *
 * @example
 * // Returns false
 * checkIsEmptryString(' '); // The string contains a space, so it is not empty
 */
export const checkIsEmptryString = (str: string): str is "" => {
  return str === "";
};

/**
 * Checks if a given string is not empty.
 *
 * This is the inverse of `checkIsEmptryString`.
 *
 * @param {T extends string} str - The string to check.
 * @returns {str is Exclude<T, "">} True if the string is not empty, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotEmptyString('hello'); // The string is not empty
 *
 * @example
 * // Returns false
 * checkIsNotEmptyString(''); // The string is empty
 */
export const checkIsNotEmptyString = <T extends string>(
  str: T,
): str is Exclude<T, ""> => {
  return !checkIsEmptryString(str);
};
