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
 * check_is_alphanumeric('abc123'); // The string contains only letters and numbers
 *
 * @example
 * // Returns false
 * check_is_alphanumeric('abc123!'); // The string contains a special character '!'
 */
export const check_is_alphanumeric = (str: string): boolean => {
	const alphanumericRegex = /^[a-z0-9]+$/i;
	return alphanumericRegex.test(str);
};

/**
 * Checks if a given string is not alphanumeric.
 *
 * This is the inverse of `check_is_alphanumeric`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not alphanumeric, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_alphanumeric('abc123!'); // The string contains a special character '!'
 *
 * @example
 * // Returns false
 * check_is_not_alphanumeric('abc123'); // The string contains only letters and numbers
 */
export const check_is_not_alphanumeric = (str: string): boolean => {
	return !check_is_alphanumeric(str);
};
