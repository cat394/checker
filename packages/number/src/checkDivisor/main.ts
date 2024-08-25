/**
 * Checks if the given number is a divisor of the target number.
 *
 * @param {number} num - The number to check as a divisor.
 * @param {number} target - The target number to be divided.
 * @returns {boolean} True if `num` is a divisor of `target`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsDivisor(3, 9); // 3 is a divisor of 9
 *
 * @example
 * // Returns false
 * checkIsDivisor(2, 9); // 2 is not a divisor of 9
 */
export const checkIsDivisor = (num: number, target: number): boolean => {
  return target % num === 0;
};

/**
 * Checks if the given number is not a divisor of the target number.
 *
 * This is the inverse of `checkIsDivisor`.
 *
 * @param {number} num - The number to check as not being a divisor.
 * @param {number} target - The target number to be divided.
 * @returns {boolean} True if `num` is not a divisor of `target`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotDivisor(2, 9); // 2 is not a divisor of 9
 *
 * @example
 * // Returns false
 * checkIsNotDivisor(3, 9); // 3 is a divisor of 9
 */
export const checkIsNotDivisor = (num: number, target: number): boolean => {
  return !checkIsDivisor(num, target);
};
