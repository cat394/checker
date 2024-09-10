/**
 * Checks if a given number is positive.
 *
 * A positive number is any number greater than zero.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is positive, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_positive(5); // 5 is a positive number
 *
 * @example
 * // Returns false
 * check_is_positive(-3); // -3 is not a positive number
 */
export const check_is_positive = (num: number): boolean => {
	return num > 0;
};

/**
 * Checks if a given number is not positive.
 *
 * This is the inverse of `check_is_positive`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not positive, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_positive(-3); // -3 is not a positive number
 *
 * @example
 * // Returns false
 * check_is_not_positive(5); // 5 is a positive number
 */
export const check_is_not_positive = (num: number): boolean => {
	return !check_is_positive(num);
};
