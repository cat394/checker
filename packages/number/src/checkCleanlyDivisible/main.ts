/**
 * Checks if a given number is cleanly divisible by a divisor.
 *
 * A number is considered cleanly divisible if the remainder of the division is zero.
 *
 * @param {number} num - The number to check.
 * @param {number} divisor - The divisor to check against.
 * @returns {boolean} True if the number is cleanly divisible by the divisor, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_cleanly_disible(10, 2); // 10 is cleanly divisible by 2
 *
 * @example
 * // Returns false
 * check_is_cleanly_disible(10, 3); // 10 is not cleanly divisible by 3
 */
export const check_is_cleanly_disible = (
	num: number,
	divisor: number
): boolean => {
	return num % divisor === 0;
};

/**
 * Checks if a given number is not cleanly divisible by a divisor.
 *
 * This is the inverse of `check_is_cleanly_disible`.
 *
 * @param {number} num - The number to check.
 * @param {number} divisor - The divisor to check against.
 * @returns {boolean} True if the number is not cleanly divisible by the divisor, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_cleanly_disible(10, 3); // 10 is not cleanly divisible by 3
 *
 * @example
 * // Returns false
 * check_is_not_cleanly_disible(10, 2); // 10 is cleanly divisible by 2
 */
export const check_is_not_cleanly_disible = (
	num: number,
	divisor: number
): boolean => {
	return !check_is_cleanly_disible(num, divisor);
};
