/**
 * Checks if the given number is a divisor of the target number.
 *
 * @param {number} num - The number to check as a divisor.
 * @param {number} target - The target number to be divided.
 * @returns {boolean} True if `num` is a divisor of `target`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_divisor(3, 9); // 3 is a divisor of 9
 *
 * @example
 * // Returns false
 * check_is_divisor(2, 9); // 2 is not a divisor of 9
 */
export const check_is_divisor = (num: number, target: number): boolean => {
  return target % num === 0;
};

/**
 * Checks if the given number is not a divisor of the target number.
 *
 * This is the inverse of `check_is_divisor`.
 *
 * @param {number} num - The number to check as not being a divisor.
 * @param {number} target - The target number to be divided.
 * @returns {boolean} True if `num` is not a divisor of `target`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_divisor(2, 9); // 2 is not a divisor of 9
 *
 * @example
 * // Returns false
 * check_is_not_divisor(3, 9); // 3 is a divisor of 9
 */
export const check_is_not_divisor = (num: number, target: number): boolean => {
  return !check_is_divisor(num, target);
};
