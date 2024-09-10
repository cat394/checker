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
 * check_is_email_format('example@example.com'); // Valid email address
 *
 * @example
 * // Returns false
 * check_is_email_format('invalid-email'); // The string is not a valid email format
 */
export const check_is_email_format = (str: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(str);
};

/**
 * Checks if a given string is not in email format.
 *
 * This is the inverse of `check_is_email_format`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not in email format, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_email_format('invalid-email'); // The string is not a valid email format
 *
 * @example
 * // Returns false
 * check_is_not_email_format('example@example.com'); // Valid email address
 */
export const check_is_not_email_format = (str: string): boolean => {
	return !check_is_email_format(str);
};
