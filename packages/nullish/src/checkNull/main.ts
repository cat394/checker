/**
 * Checks if the given value is strictly `null`.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is null} True if the value is strictly `null`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_null(null); // The value is strictly null
 *
 * @example
 * // Returns false
 * check_is_null(undefined); // The value is not null
 */
export const check_is_null = (value: unknown): value is null => {
  return value === null;
};

/**
 * Checks if the given value is not strictly `null`.
 *
 * This is the inverse of `check_is_null`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, null>} True if the value is not strictly `null`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_null(undefined); // The value is not null
 *
 * @example
 * // Returns false
 * check_is_not_null(null); // The value is strictly null
 */
export const check_is_not_null = <T>(value: T): value is Exclude<T, null> => {
  return !check_is_null(value);
};
