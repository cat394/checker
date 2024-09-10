/**
 * Checks if a given number is the square root of the target number.
 *
 * The function evaluates whether `num` is equal to the square root of `target`.
 *
 * @param {number} num - The number to check.
 * @param {number} target - The target number to compare against.
 * @returns {boolean} True if `num` is the square root of `target`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_square_root(3, 9); // 3 is the square root of 9
 *
 * @example
 * // Returns false
 * check_is_square_root(4, 20); // 4 is not the square root of 20
 */
export const check_is_square_root = (num: number, target: number): boolean => {
	return num === Math.sqrt(target);
};

/**
 * Checks if a given number is not the square root of the target number.
 *
 * This is the inverse of `check_is_square_root`.
 *
 * @param {number} num - The number to check.
 * @param {number} target - The target number to compare against.
 * @returns {boolean} True if `num` is not the square root of `target`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_square_root(4, 20); // 4 is not the square root of 20
 *
 * @example
 * // Returns false
 * check_is_not_square_root(3, 9); // 3 is the square root of 9
 */
export const check_is_not_square_root = (
	num: number,
	target: number
): boolean => {
	return !check_is_square_root(num, target);
};
