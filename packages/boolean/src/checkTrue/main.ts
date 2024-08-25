/**
 * Checks if the given value is strictly `true`.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is true} True if the value is strictly `true`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsTrue(true); // The value is strictly true
 *
 * @example
 * // Returns false
 * checkIsTrue(1); // The value is not strictly true, but truthy
 */
export const checkIsTrue = (value: unknown): value is true => {
  return value === true;
};

/**
 * Checks if the given value is not strictly `true`.
 *
 * This is the inverse of `checkIsTrue`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, true>} True if the value is not strictly `true`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotTrue(0); // The value is not strictly true, and it's falsy
 *
 * @example
 * // Returns false
 * checkIsNotTrue(true); // The value is strictly true
 */
export const checkIsNotTrue = <T>(value: T): value is Exclude<T, true> => {
  return !checkIsTrue(value);
};
