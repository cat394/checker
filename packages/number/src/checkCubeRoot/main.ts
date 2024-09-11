/**
 * Checks if a given number is the cube root of a target number.
 *
 * @param {number} num - The number to check as the cube root.
 * @param {number} target - The target number to check against.
 * @returns {boolean} True if `num` is the cube root of `target`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_cube_root(3, 27); // 3 is the cube root of 27
 *
 * @example
 * // Returns false
 * check_is_cube_root(2, 27); // 2 is not the cube root of 27
 */
export const check_is_cube_root = (num: number, target: number): boolean => {
  return num === Math.cbrt(target);
};

/**
 * Checks if a given number is not the cube root of a target number.
 *
 * This is the inverse of `check_is_cube_root`.
 *
 * @param {number} num - The number to check.
 * @param {number} target - The target number to check against.
 * @returns {boolean} True if `num` is not the cube root of `target`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_cube_root(2, 27); // 2 is not the cube root of 27
 *
 * @example
 * // Returns false
 * check_is_not_cube_root(3, 27); // 3 is the cube root of 27
 */
export const check_is_not_cube_root = (
  num: number,
  target: number,
): boolean => {
  return !check_is_cube_root(num, target);
};
