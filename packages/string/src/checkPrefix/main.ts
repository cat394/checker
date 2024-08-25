/**
 * Checks if a given string has a specific prefix.
 *
 * The function checks if the provided string starts with the specified prefix.
 * This function uses TypeScript's template literal types to infer that the string begins with the given prefix.
 *
 * @template Prefix - The type of the prefix string.
 * @param {string} str - The string to check.
 * @param {Prefix} prefix - The prefix to check for.
 * @returns {boolean} True if the string starts with the specified prefix, otherwise false.
 *
 * @example
 * // Returns true
 * checkHasPrefix('hello world', 'hello'); // The string starts with 'hello'
 *
 * @example
 * // Returns false
 * checkHasPrefix('hello world', 'world'); // The string does not start with 'world'
 */
export const checkHasPrefix = <Prefix extends string>(
  str: string,
  prefix: string,
): str is `${Prefix}${string}` => {
  return str.startsWith(prefix);
};

/**
 * Checks if a given string does not have a specific prefix.
 *
 * This is the inverse of `checkHasPrefix`.
 *
 * @param {string} str - The string to check.
 * @param {string} prefix - The prefix to check against.
 * @returns {boolean} True if the string does not start with the specified prefix, otherwise false.
 *
 * @example
 * // Returns true
 * checkDoesNotHavePrefix('hello world', 'world'); // The string does not start with 'world'
 *
 * @example
 * // Returns false
 * checkDoesNotHavePrefix('hello world', 'hello'); // The string starts with 'hello'
 */
export const checkDoesNotHavePrefix = (
  str: string,
  prefix: string,
): boolean => {
  return !checkHasPrefix(str, prefix);
};
