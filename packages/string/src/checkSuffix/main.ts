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
 * check_has_suffix('hello world', 'world'); // The string ends with 'world'
 *
 * @example
 * // Returns false
 * check_has_suffix('hello world', 'hello'); // The string does not end with 'hello'
 */
export const check_has_suffix = <Suffix extends string>(
	str: string,
	suffix: Suffix
): str is `${string}${Suffix}` => {
	return str.endsWith(suffix);
};

/**
 * Checks if a given string does not end with a specific suffix.
 *
 * This is the inverse of `check_has_suffix`.
 *
 * @param {string} str - The string to check.
 * @param {string} suffix - The suffix to check against.
 * @returns {boolean} True if the string does not end with the specified suffix, otherwise false.
 *
 * @example
 * // Returns true
 * check_does_not_have_suffix('hello world', 'hello'); // The string does not end with 'hello'
 *
 * @example
 * // Returns false
 * check_does_not_have_suffix('hello world', 'world'); // The string ends with 'world'
 */
export const check_does_not_have_suffix = (
	str: string,
	suffix: string
): boolean => {
	return !check_has_suffix(str, suffix);
};
