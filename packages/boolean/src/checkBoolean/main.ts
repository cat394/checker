/**
 * Checks if the given value is a boolean.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is boolean} True if the value is a boolean, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_boolean(true); // The value is a boolean
 *
 * @example
 * // Returns false
 * check_is_boolean("true"); // The value is not a boolean
 */
export const check_is_boolean = (value: unknown): value is boolean => {
  return typeof value === "boolean";
};

/**
 * Checks if the given value is not a boolean.
 *
 * This is the inverse of `check_is_boolean`.
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
export const check_is_not_boolean = <T>(
  value: T,
): value is Exclude<T, boolean> => {
  return !check_is_boolean(value);
};
