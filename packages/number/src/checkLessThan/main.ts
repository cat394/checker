/**
 * Checks if a number is less than a specified threshold.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is less than the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_less_than(5, 10); // 5 is less than 10
 *
 * @example
 * // Returns false
 * check_is_less_than(15, 10); // 15 is not less than 10
 */
export const check_is_less_than = (num: number, threshold: number): boolean => {
	return num < threshold;
};

/**
 * Checks if a number is not less than a specified threshold.
 *
 * This is the inverse of `check_is_less_than`.
 *
 * @param {number} num - The number to check.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if the number is not less than the threshold, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_less_than(15, 10); // 15 is not less than 10
 *
 * @example
 * // Returns false
 * check_is_not_less_than(5, 10); // 5 is less than 10
 */
export const check_is_not_less_than = (
	num: number,
	threshold: number
): boolean => {
	return !check_is_less_than(num, threshold);
};
