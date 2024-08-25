/**
 * Checks if a given string ends with a specific suffix.
 *
 * The function checks if the provided string ends with the specified suffix.
 * This function uses TypeScript's template literal types to infer that the string ends with the given suffix.
 *
 * @template Suffix - The type of the suffix string.
 * @param {string} str - The string to check.
 * @param {Suffix} suffix - The suffix to check for.
 * @returns {boolean} True if the string ends with the specified suffix, otherwise false.
 *
 * @example
 * // Returns true
 * checkHasSuffix('hello world', 'world'); // The string ends with 'world'
 *
 * @example
 * // Returns false
 * checkHasSuffix('hello world', 'hello'); // The string does not end with 'hello'
 */
export const checkHasSuffix = <Suffix extends string>(
  str: string,
  suffix: Suffix,
): str is `${string}${Suffix}` => {
  return str.endsWith(suffix);
};

/**
 * Checks if a given string does not end with a specific suffix.
 *
 * This is the inverse of `checkHasSuffix`.
 *
 * @param {string} str - The string to check.
 * @param {string} suffix - The suffix to check against.
 * @returns {boolean} True if the string does not end with the specified suffix, otherwise false.
 *
 * @example
 * // Returns true
 * checkDoesNotHaveSuffix('hello world', 'hello'); // The string does not end with 'hello'
 *
 * @example
 * // Returns false
 * checkDoesNotHaveSuffix('hello world', 'world'); // The string ends with 'world'
 */
export const checkDoesNotHaveSuffix = (
  str: string,
  suffix: string,
): boolean => {
  return !checkHasSuffix(str, suffix);
};
