/**
 * Checks if the given number is greater than a specified threshold.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is greater than the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_greater_than(10, 5); // 10 is greater than 5
 *
 * @example
 * // Returns false
 * check_is_greater_than(3, 5); // 3 is not greater than 5
 */
export const check_is_greater_than = (
	num: number,
	threshold: number
): boolean => {
	return num > threshold;
};

/**
 * Checks if the given number is not greater than a specified threshold.
 *
 * This is the inverse of `check_is_greater_than`.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is not greater than the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_greater_than(3, 5); // 3 is not greater than 5
 *
 * @example
 * // Returns false
 * check_is_not_greater_than(10, 5); // 10 is greater than 5
 */
export const check_is_not_greater_than = (
	num: number,
	threshold: number
): boolean => {
	return !check_is_greater_than(num, threshold);
};
