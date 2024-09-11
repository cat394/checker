/**
 * Checks if the given value is strictly `false`.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is false} True if the value is strictly `false`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_false(false); // The value is strictly false
 *
 * @example
 * // Returns false
 * check_is_false(0); // The value is not strictly false, but falsy
 */
export const check_is_false = (value: unknown): value is false => {
  return value === false;
};

/**
 * Checks if the given value is not strictly `false`.
 *
 * This is the inverse of `check_is_false`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, false>} True if the value is not strictly `false`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_false(0); // The value is not strictly false, even though it's falsy
 *
 * @example
 * // Returns false
 * check_is_not_false(false); // The value is strictly false
 */
export const check_is_not_false = <T>(value: T): value is Exclude<T, false> => {
  return !check_is_false(value);
};
