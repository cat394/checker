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
 * checkIsSquareRootOf(3, 9); // 3 is the square root of 9
 *
 * @example
 * // Returns false
 * checkIsSquareRootOf(4, 20); // 4 is not the square root of 20
 */
export const checkIsSquareRoot = (num: number, target: number): boolean => {
  return num === Math.sqrt(target);
};

/**
 * Checks if a given number is not the square root of the target number.
 *
 * This is the inverse of `checkIsSquareRootOf`.
 *
 * @param {number} num - The number to check.
 * @param {number} target - The target number to compare against.
 * @returns {boolean} True if `num` is not the square root of `target`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotSquareRootOf(4, 20); // 4 is not the square root of 20
 *
 * @example
 * // Returns false
 * checkIsNotSquareRootOf(3, 9); // 3 is the square root of 9
 */
export const checkIsNotSquareRoot = (num: number, target: number): boolean => {
  return !checkIsSquareRoot(num, target);
};
