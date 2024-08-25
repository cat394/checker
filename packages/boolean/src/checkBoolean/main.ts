/**
 * Checks if the given value is a boolean.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is boolean} True if the value is a boolean, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsBoolean(true); // The value is a boolean
 *
 * @example
 * // Returns false
 * checkIsBoolean("true"); // The value is not a boolean
 */
export const checkIsBoolean = (value: unknown): value is boolean => {
  return typeof value === "boolean";
};

/**
 * Checks if the given value is not a boolean.
 *
 * This is the inverse of `checkIsBoolean`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, boolean>} True if the value is not a boolean, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotBoolean("true"); // The value is not a boolean
 *
 * @example
 * // Returns false
 * checkIsNotBoolean(true); // The value is a boolean
 */
export const checkIsNotBoolean = <T>(
  value: T,
): value is Exclude<T, boolean> => {
  return !checkIsBoolean(value);
};
