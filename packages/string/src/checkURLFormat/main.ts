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
 * checkIsURLFormat('https://www.example.com'); // Valid URL
 *
 * @example
 * // Returns false
 * checkIsURLFormat('invalid-url'); // The string is not a valid URL
 */
export const checkIsURLFormat = (str: string): boolean => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(str);
};

/**
 * Checks if a given string is not in URL format.
 *
 * This is the inverse of `checkIsURLFormat`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not in URL format, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotURLFormat('invalid-url'); // The string is not a valid URL
 *
 * @example
 * // Returns false
 * checkIsNotURLFormat('https://www.example.com'); // Valid URL
 */
export const checkIsNotURLFormat = (str: string): boolean => {
  return !checkIsURLFormat(str);
};
