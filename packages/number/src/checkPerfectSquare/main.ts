/**
 * Checks if a given number is a perfect square.
 *
 * A perfect square is an integer that is the square of another integer.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is a perfect square, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_perfect_square(16); // 16 is a perfect square (4 * 4 = 16)
 *
 * @example
 * // Returns false
 * check_is_perfect_square(15); // 15 is not a perfect square
 */
export const check_is_perfect_square = (num: number): boolean => {
	return Number.isInteger(Math.sqrt(num));
};

/**
 * Checks if a given number is not a perfect square.
 *
 * This is the inverse of `check_is_perfect_square`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not a perfect square, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_perfect_square(15); // 15 is not a perfect square
 *
 * @example
 * // Returns false
 * check_is_not_perfect_square(16); // 16 is a perfect square (4 * 4 = 16)
 */
export const check_is_not_perfect_square = (num: number): boolean => {
	return !check_is_perfect_square(num);
};
