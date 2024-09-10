import { Constants } from "../constants.ts";

/**
 * Checks if a given number is a power of a specified base.
 *
 * This function determines if `num` can be expressed as `base` raised to an integer power.
 * Due to potential floating-point precision errors, a small tolerance value is used.
 *
 * @param {number} num - The number to check.
 * @param {number} base - The base to use.
 * @returns {boolean} True if `num` is a power of `base`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_power(8, 2); // 8 is 2^3, so it's a power of 2
 *
 * @example
 * // Returns false
 * check_is_power(10, 2); // 10 is not a power of 2
 */
export const check_is_power = (num: number, base: number): boolean => {
	const result = Math.log(num) / Math.log(base);
	return Math.abs(result - Math.round(result)) < Constants.TOLERANCE;
};

/**
 * Checks if a given number is not a power of a specified base.
 *
 * This is the inverse of `check_is_power`.
 *
 * @param {number} num - The number to check.
 * @param {number} base - The base to use.
 * @returns {boolean} True if `num` is not a power of `base`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_power(10, 2); // 10 is not a power of 2
 *
 * @example
 * // Returns false
 * check_is_not_power(8, 2); // 8 is 2^3, so it's a power of 2
 */
export const check_is_not_power = (num: number, base: number): boolean => {
	return !check_is_power(num, base);
};
