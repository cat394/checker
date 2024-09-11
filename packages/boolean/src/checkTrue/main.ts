/**
 * Checks if the given value is strictly `true`.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is true} True if the value is strictly `true`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_true(true); // The value is strictly true
 *
 * @example
 * // Returns false
 * check_is_true(1); // The value is not strictly true, but truthy
 */
export const check_is_true = (value: unknown): value is true => {
  return value === true;
};

/**
 * Checks if the given value is not strictly `true`.
 *
 * This is the inverse of `check_is_true`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, true>} True if the value is not strictly `true`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_true(0); // The value is not strictly true, and it's falsy
 *
 * @example
 * // Returns false
 * check_is_not_true(true); // The value is strictly true
 */
export const check_is_not_true = <T>(value: T): value is Exclude<T, true> => {
  return !check_is_true(value);
};
