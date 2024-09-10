/**
 * Checks if a given string represents infinity.
 *
 * The function checks if the string is exactly "Infinity" or "-Infinity",
 * which are special numeric strings representing positive and negative infinity.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string represents infinity, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_infinity_string('Infinity'); // The string is "Infinity"
 *
 * @example
 * // Returns true
 * check_is_infinity_string('-Infinity'); // The string is "-Infinity"
 *
 * @example
 * // Returns false
 * check_is_infinity_string('123'); // The string is a regular numeric string, not infinity
 *
 * @example
 * // Returns false
 * check_is_infinity_string('infinity'); // The string is not exactly "Infinity" or "-Infinity"
 */
export const check_is_infinity_string = (
	str: string
): str is "Infinity" | "-Infinity" => {
	return str === "Infinity" || str === "-Infinity";
};

/**
 * Checks if a given string does not represent infinity.
 *
 * This is the inverse of `check_is_infinity_string`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string does not represent infinity, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_infinity_string('123'); // The string is a regular numeric string, not infinity
 *
 * @example
 * // Returns true
 * check_is_not_infinity_string('infinity'); // The string is not exactly "Infinity" or "-Infinity"
 *
 * @example
 * // Returns false
 * check_is_not_infinity_string('Infinity'); // The string is "Infinity"
 *
 * @example
 * // Returns false
 * check_is_not_infinity_string('-Infinity'); // The string is "-Infinity"
 */
export const check_is_not_infinity_string = (str: string): boolean => {
	return !check_is_infinity_string(str);
};
