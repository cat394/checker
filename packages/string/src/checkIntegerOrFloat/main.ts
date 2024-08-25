/**
 * Checks if a given string is a numeric value.
 *
 * The function checks if the string represents a valid numeric value, including optional negative signs
 * and decimal points. The string can represent an integer or a floating-point number.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is numeric, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsIntegerOrDecimalString('123'); // The string represents a positive integer
 *
 * @example
 * // Returns true
 * checkIsIntegerOrDecimalString('-123.45'); // The string represents a negative floating-point number
 *
 * @example
 * // Returns false
 * checkIsIntegerOrDecimalString('123abc'); // The string contains non-numeric characters
 */
export const checkIsIntegerOrDecimalString = (str: string): boolean => {
	const numericRegex = /^-?\d+(\.\d+)?$/;
	return numericRegex.test(str);
};

/**
 * Checks if a given string is not a numeric value.
 *
 * This is the inverse of `checkIsIntegerOrDecimalString`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not numeric, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotIntegerOrDecimalString('123abc'); // The string contains non-numeric characters
 *
 * @example
 * // Returns false
 * checkIsNotIntegerOrDecimalString('123'); // The string represents a positive integer
 */
export const checkIsNotIntegerOrDecimalString = (str: string): boolean => {
	return !checkIsIntegerOrDecimalString(str);
};
