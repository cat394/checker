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
 * check_has_prefix('hello world', 'hello'); // The string starts with 'hello'
 *
 * @example
 * // Returns false
 * check_has_prefix('hello world', 'world'); // The string does not start with 'world'
 */
export const check_has_prefix = <Prefix extends string>(
	str: string,
	prefix: Prefix
): str is `${Prefix}${string}` => {
	return str.startsWith(prefix);
};

/**
 * Checks if a given string does not have a specific prefix.
 *
 * This is the inverse of `check_has_prefix`.
 *
 * @param {string} str - The string to check.
 * @param {string} prefix - The prefix to check against.
 * @returns {boolean} True if the string does not start with the specified prefix, otherwise false.
 *
 * @example
 * // Returns true
 * check_does_not_have_prefix('hello world', 'world'); // The string does not start with 'world'
 *
 * @example
 * // Returns false
 * check_does_not_have_prefix('hello world', 'hello'); // The string starts with 'hello'
 */
export const check_does_not_have_prefix = (
	str: string,
	prefix: string
): boolean => {
	return !check_has_prefix(str, prefix);
};
