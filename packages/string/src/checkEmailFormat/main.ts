/**
 * Checks if a given string is in email format.
 *
 * The function checks if the string follows a standard email format.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is in email format, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsEmailFormat('example@example.com'); // Valid email address
 *
 * @example
 * // Returns false
 * checkIsEmailFormat('invalid-email'); // The string is not a valid email format
 */
export const checkIsEmailFormat = (str: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(str);
};

/**
 * Checks if a given string is not in email format.
 *
 * This is the inverse of `checkIsEmailFormat`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not in email format, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotEmailFormat('invalid-email'); // The string is not a valid email format
 *
 * @example
 * // Returns false
 * checkIsNotEmailFormat('example@example.com'); // Valid email address
 */
export const checkIsNotEmailFormat = (str: string): boolean => {
    return !checkIsEmailFormat(str);
};