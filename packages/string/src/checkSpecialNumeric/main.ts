import { checkIsExponentialNotation } from "../checkExponentialNotation/main.ts";
import { checkIsBinary } from "../checkBinary/main.ts";
import { checkStringIsInfinity } from "../checkInfinity/main.ts";

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
 * checkIsSpecialNumeric('1e5'); // The string is in exponential notation
 *
 * @example
 * // Returns true
 * checkIsSpecialNumeric('0b1010'); // The string is a binary number
 *
 * @example
 * // Returns true
 * checkIsSpecialNumeric('Infinity'); // The string represents infinity
 *
 * @example
 * // Returns false
 * checkIsSpecialNumeric('123'); // The string is a regular number
 */
export const checkIsSpecialNumeric = (str: string): boolean => {
	return (
		checkIsExponentialNotation(str) ||
		checkIsBinary(str) ||
		checkStringIsInfinity(str)
	);
};

/**
 * Checks if a given string is not a special numeric value.
 *
 * This is the inverse of `checkStringIsSpecialNumeric`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not a special numeric value, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotSpecialNumeric('123'); // The string is a regular number
 *
 * @example
 * // Returns false
 * checkIsNotSpecialNumeric('1e5'); // The string is in exponential notation
 */
export const checkIsNotSpecialNumeric = (str: string): boolean => {
	return !checkIsSpecialNumeric(str);
};
