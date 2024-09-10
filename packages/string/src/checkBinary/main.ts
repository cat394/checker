/**
 * Checks if a given string represents a binary number.
 *
 * The function checks if the string starts with '0b' or '0B' followed by only '0' or '1' digits.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string represents a binary number, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_binary('0b1010'); // The string is a valid binary number
 *
 * @example
 * // Returns false
 * check_is_binary('0b102'); // The string contains a digit '2', which is not valid in binary
 *
 * @example
 * // Returns false
 * check_is_binary('1010'); // The string does not start with '0b' or '0B'
 */
export const check_is_binary = (str: string): boolean => {
	const binaryRegex = /^0[bB][01]+$/;
	return binaryRegex.test(str);
};

/**
 * Checks if a given string does not represent a binary number.
 *
 * This is the inverse of `check_is_binary`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string does not represent a binary number, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_binary('1010'); // The string does not start with '0b' or '0B'
 *
 * @example
 * // Returns false
 * check_is_not_binary('0b1010'); // The string is a valid binary number
 */
export const check_is_not_binary = (str: string): boolean => {
	return !check_is_binary(str);
};
