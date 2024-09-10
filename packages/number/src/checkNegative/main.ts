/**
 * Checks if a given number is negative.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is negative, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_negative(-5); // -5 is a negative number
 *
 * @example
 * // Returns false
 * check_is_negative(3); // 3 is not a negative number
 */
export const check_is_negative = (num: number): boolean => {
	return num < 0;
};

/**
 * Checks if a given number is not negative.
 *
 * This is the inverse of `check_is_negative`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not negative, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_negative(3); // 3 is not a negative number
 *
 * @example
 * // Returns false
 * check_is_not_negative(-5); // -5 is a negative number
 */
export const check_is_not_negative = (num: number): boolean => {
	return !check_is_negative(num);
};
