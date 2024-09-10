/**
 * Checks if a given string is in URL format.
 *
 * The function checks if the string follows a valid URL format, including protocols like HTTP, HTTPS, and FTP.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is in URL format, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_url_format('https://www.example.com'); // Valid URL
 *
 * @example
 * // Returns false
 * check_is_url_format('invalid-url'); // The string is not a valid URL
 */
export const check_is_URL_format = (str: string): boolean => {
	const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
	return urlRegex.test(str);
};

/**
 * Checks if a given string is not in URL format.
 *
 * This is the inverse of `check_is_url_format`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not in URL format, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_url_format('invalid-url'); // The string is not a valid URL
 *
 * @example
 * // Returns false
 * check_is_not_url_format('https://www.example.com'); // Valid URL
 */
export const check_is_not_URL_format = (str: string): boolean => {
	return !check_is_URL_format(str);
};
