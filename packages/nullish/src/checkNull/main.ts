/**
 * Checks if the given value is strictly `null`.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is null} True if the value is strictly `null`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNull(null); // The value is strictly null
 *
 * @example
 * // Returns false
 * checkIsNull(undefined); // The value is not null
 */
export const checkIsNull = (value: unknown): value is null => {
  return value === null;
};

/**
 * Checks if the given value is not strictly `null`.
 *
 * This is the inverse of `checkIsNull`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, null>} True if the value is not strictly `null`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotNull(undefined); // The value is not null
 *
 * @example
 * // Returns false
 * checkIsNotNull(null); // The value is strictly null
 */
export const checkIsNotNull = <T>(value: T): value is Exclude<T, null> => {
  return !checkIsNull(value);
};
