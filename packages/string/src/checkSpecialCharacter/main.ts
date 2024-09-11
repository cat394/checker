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
 * check_has_special_character('hello@world'); // The string contains the special character '@'
 *
 * @example
 * // Returns true
 * check_has_special_character('password123!'); // The string contains the special character '!'
 *
 * @example
 * // Returns true
 * check_has_special_character('C:\\Program Files\\'); // The string contains the special characters '\\'
 *
 * @example
 * // Returns true
 * check_has_special_character('welcome-home'); // The string contains the special character '-'
 *
 * @example
 * // Returns false
 * check_has_special_character('helloworld'); // The string contains only letters and no special characters
 *
 * @example
 * // Returns false
 * check_has_special_character('123456'); // The string contains only numbers and no special characters
 */
export const check_has_special_character = (str: string): boolean => {
  const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>~`'\-_=+\[\];/\\]/;
  return specialCharacterRegex.test(str);
};

/**
 * Checks if a given string does not contain any special characters.
 *
 * This is the inverse of `check_has_special_character`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string does not contain special characters, otherwise false.
 *
 * @example
 * // Returns true
 * check_does_not_have_special_character('helloworld'); // The string contains only letters and no special characters
 *
 * @example
 * // Returns false
 * check_does_not_have_special_character('hello@world'); // The string contains the special character '@'
 */
export const check_does_not_have_special_character = (str: string): boolean => {
  return !check_has_special_character(str);
};
