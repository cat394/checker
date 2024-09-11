/**
 * Checks if a given number matches the logarithm of a target with a specified base.
 *
 * The function evaluates whether `num` is equal to `log_base(target)`.
 *
 * @param {number} num - The number to check.
 * @param {number} base - The base of the logarithm.
 * @param {number} target - The target number for the logarithm.
 * @returns {boolean} True if `num` matches the logarithm, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_logarithm(4, 2, 16); // log2(16) = 4
 *
 * @example
 * // Returns false
 * check_is_logarithm(3, 2, 16); // log2(16) = 4, so 3 does not match
 */
export const check_is_logarithm = (
  num: number,
  base: number,
  target: number,
): boolean => {
  return num === Math.log(target) / Math.log(base);
};

/**
 * Checks if a given number does not match the logarithm of a target with a specified base.
 *
 * This is the inverse of `check_is_logarithm`.
 *
 * @param {number} num - The number to check.
 * @param {number} base - The base of the logarithm.
 * @param {number} target - The target number for the logarithm.
 * @returns {boolean} True if `num` does not match the logarithm, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_logarithm(3, 2, 16); // log2(16) = 4, so 3 does not match
 *
 * @example
 * // Returns false
 * check_is_not_logarithm(4, 2, 16); // log2(16) = 4
 */
export const check_is_not_logarithm = (
  num: number,
  base: number,
  target: number,
): boolean => {
  return !check_is_logarithm(num, base, target);
};
