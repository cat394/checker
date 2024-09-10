/**
 * Checks if a given number is odd.
 *
 * The function determines whether the absolute value of the number is odd.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is odd, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_odd(3); // 3 is an odd number
 *
 * @example
 * // Returns true
 * check_is_odd(-5); // -5 is an odd number
 *
 * @example
 * // Returns false
 * check_is_odd(4); // 4 is an even number
 *
 * @example
 * // Returns false
 * check_is_odd(0); // 0 is considered even
 */
export const check_is_odd = (num: number): boolean => {
	return Math.abs(num) % 2 === 1;
};

/**
 * Checks if a given number is not odd.
 *
 * This is the inverse of `check_is_odd`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not odd, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_odd(4); // 4 is an even number
 *
 * @example
 * // Returns true
 * check_is_not_odd(0); // 0 is considered even
 *
 * @example
 * // Returns false
 * check_is_not_odd(3); // 3 is an odd number
 *
 * @example
 * // Returns false
 * check_is_not_odd(-5); // -5 is an odd number
 */
export const check_is_not_odd = (num: number): boolean => {
	return !check_is_odd(num);
};
