/**
 * Checks if a given string contains any special characters.
 *
 * The function checks if the string contains any special characters such as `!@#$%^&*(),.?":{}|<>~\`'-_=+[];/\\`.
 * This includes common punctuation marks, symbols, and other non-alphanumeric characters.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string contains special characters, otherwise false.
 *
 * @example
 * // Returns true
 * checkHasSpecialCharacter('hello@world'); // The string contains the special character '@'
 *
 * @example
 * // Returns true
 * checkHasSpecialCharacter('password123!'); // The string contains the special character '!'
 *
 * @example
 * // Returns true
 * checkHasSpecialCharacter('C:\\Program Files\\'); // The string contains the special characters '\\'
 *
 * @example
 * // Returns true
 * checkHasSpecialCharacter('welcome-home'); // The string contains the special character '-'
 *
 * @example
 * // Returns false
 * checkHasSpecialCharacter('helloworld'); // The string contains only letters and no special characters
 *
 * @example
 * // Returns false
 * checkHasSpecialCharacter('123456'); // The string contains only numbers and no special characters
 */
export const checkHasSpecialCharacter = (str: string): boolean => {
	const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>~`'\-_=+\[\];/\\]/;
	return specialCharacterRegex.test(str);
};


/**
 * Checks if a given string does not contain any special characters.
 *
 * This is the inverse of `checkStringHasSpecialCharacter`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string does not contain special characters, otherwise false.
 *
 * @example
 * // Returns true
 * checkDoesNotHaveSpecialCharacter('helloworld'); // The string contains only letters and no special characters
 *
 * @example
 * // Returns false
 * checkDoesNotHaveSpecialCharacter('hello@world'); // The string contains the special character '@'
 */
export const checkDoesNotHaveSpecialCharacter = (str: string): boolean => {
	return !checkHasSpecialCharacter(str);
};
