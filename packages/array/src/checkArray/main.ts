/**
 * Checks if the given value is an array.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is T[]} True if the value is an array, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_array([1, 2, 3]); // The value is an array
 *
 * @example
 * // Returns false
 * check_is_array(42); // The value is not an array
 */
export const check_is_array = <T>(value: unknown): value is T[] => {
  return Array.isArray(value);
};

/**
 * Checks if the given value is not an array.
 *
 * This is the inverse of `check_is_array`.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is Exclude<T, T[]>} True if the value is not an array, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_array(42); // The value is not an array
 *
 * @example
 * // Returns false
 * check_is_not_array([1, 2, 3]); // The value is an array
 */
export const check_is_not_array = <T>(value: T): value is Exclude<T, T[]> => {
  return !check_is_array(value);
};
