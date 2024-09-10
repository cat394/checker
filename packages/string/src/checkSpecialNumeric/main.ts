import { check_is_exponential_notation } from "../checkExponentialNotation/main.ts";
import { check_is_binary } from "../checkBinary/main.ts";
import { check_is_infinity_string } from "../checkInfinityString/main.ts";

/**
 * Checks if a given string is a special numeric value.
 *
 * This function determines if the string represents a special numeric value, including:
 * - Exponential notation (e.g., "1e5")
 * - Binary notation (e.g., "0b1010")
 * - Infinity ("Infinity")
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a special numeric value, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_special_numeric('1e5'); // The string is in exponential notation
 *
 * @example
 * // Returns true
 * check_is_special_numeric('0b1010'); // The string is a binary number
 *
 * @example
 * // Returns true
 * check_is_special_numeric('Infinity'); // The string represents infinity
 *
 * @example
 * // Returns false
 * check_is_special_numeric('123'); // The string is a regular number
 */
export const check_is_special_numeric = (str: string): boolean => {
	return (
		check_is_exponential_notation(str) ||
		check_is_binary(str) ||
		check_is_infinity_string(str)
	);
};

/**
 * Checks if a given string is not a special numeric value.
 *
 * This is the inverse of `check_is_special_numeric`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not a special numeric value, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_special_numeric('123'); // The string is a regular number
 *
 * @example
 * // Returns false
 * check_is_not_special_numeric('1e5'); // The string is in exponential notation
 */
export const check_is_not_special_numeric = (str: string): boolean => {
	return !check_is_special_numeric(str);
};
