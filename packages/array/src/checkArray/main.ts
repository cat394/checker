/**
 * Checks if the given value is an array.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is T[]} True if the value is an array, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsArray([1, 2, 3]); // The value is an array
 *
 * @example
 * // Returns false
 * checkIsArray(42); // The value is not an array
 */
export const checkIsArray = <T>(value: unknown): value is T[] => {
  return Array.isArray(value);
};

/**
 * Checks if the given value is not an array.
 *
 * This is the inverse of `checkIsArray`.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is Exclude<T, T[]>} True if the value is not an array, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotArray(42); // The value is not an array
 *
 * @example
 * // Returns false
 * checkIsNotArray([1, 2, 3]); // The value is an array
 */
export const checkIsNotArray = <T>(
  value: T,
): value is Exclude<T, T[]> => {
  return !checkIsArray(value);
};
