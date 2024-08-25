/**
 * Checks if an array contains a specific value.
 *
 * @param {T[]} array - The array to check.
 * @param {T} value - The value to search for in the array.
 * @returns {boolean} True if the array contains the value, otherwise false.
 *
 * @example
 * // Returns true
 * checkArrayHasValue([1, 2, 3], 2); // The array contains the value 2
 *
 * @example
 * // Returns false
 * checkArrayHasValue([1, 2, 3], 4); // The array does not contain the value 4
 */
export const checkArrayHasValue = <T>(array: T[], value: T): boolean => {
  return array.includes(value);
};

/**
 * Checks if an array does not contain a specific value.
 *
 * This is the inverse of `checkArrayContainsValue`.
 *
 * @param {T[]} array - The array to check.
 * @param {T} value - The value to search for in the array.
 * @returns {boolean} True if the array does not contain the value, otherwise false.
 *
 * @example
 * // Returns true
 * checkArrayDoesNotHaveValue([1, 2, 3], 4); // The array does not contain the value 4
 *
 * @example
 * // Returns false
 * checkArrayDoesNotHaveValue([1, 2, 3], 2); // The array contains the value 2
 */
export const checkArrayDoesNotHaveValue = <T>(
  array: T[],
  value: T,
): boolean => {
  return !checkArrayHasValue(array, value);
};
