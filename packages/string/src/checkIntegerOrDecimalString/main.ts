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
 * check_is_integer_or_decimal_string('123'); // The string represents a positive integer
 *
 * @example
 * // Returns true
 * check_is_integer_or_decimal_string('-123.45'); // The string represents a negative floating-point number
 *
 * @example
 * // Returns false
 * check_is_integer_or_decimal_string('123abc'); // The string contains non-numeric characters
 */
export const check_is_integer_or_decimal_string = (str: string): boolean => {
  const numericRegex = /^-?\d+(\.\d+)?$/;
  return numericRegex.test(str);
};

/**
 * Checks if a given string is not a numeric value.
 *
 * This is the inverse of `check_is_integer_or_decimal_string`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not numeric, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_integer_or_decimal_string('123abc'); // The string contains non-numeric characters
 *
 * @example
 * // Returns false
 * check_is_not_integer_or_decimal_string('123'); // The string represents a positive integer
 */
export const check_is_not_integer_or_decimal_string = (
  str: string,
): boolean => {
  return !check_is_integer_or_decimal_string(str);
};
