/**
 * Checks if the given array is empty.
 *
 * @param {unknown[]} array - The array to check.
 * @returns {array is []} True if the array is empty, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsEmptyArray([]); // The array is empty
 *
 * @example
 * // Returns false
 * checkIsEmptyArray([1, 2, 3]); // The array is not empty
 */
export const checkIsEmptyArray = (array: unknown[]): array is [] => {
  return array.length === 0;
};

/**
 * Checks if the given array is not empty.
 *
 * This is the inverse of `checkIsEmptyArray`.
 *
 * @param {T} array - The array to check.
 * @returns {array is Exclude<T, []>} True if the array is not empty, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotEmptyArray([1, 2, 3]); // The array is not empty
 *
 * @example
 * // Returns false
 * checkIsNotEmptyArray([]); // The array is empty
 */
export const checkIsNotEmptyArray = <T extends unknown[]>(
  array: T,
): array is Exclude<T, []> => {
  return !checkIsEmptyArray(array);
};
