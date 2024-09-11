/**
 * Checks if the given index is the last iteration in the array.
 *
 * @param {number} index - The index to check.
 * @param {unknown[]} array - The array to check against.
 * @returns {boolean} True if the index is the last iteration, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_last_iteration(2, [10, 20, 30]); // The index 2 is the last iteration
 *
 * @example
 * // Returns false
 * check_is_last_iteration(1, [10, 20, 30]); // The index 1 is not the last iteration
 */
export const check_is_last_iteration = (
  index: number,
  array: unknown[],
): boolean => {
  return index === array.length - 1;
};

/**
 * Checks if the given index is not the last iteration in the array.
 *
 * This is the inverse of `check_is_last_iteration`.
 *
 * @param {number} index - The index to check.
 * @param {unknown[]} array - The array to check against.
 * @returns {boolean} True if the index is not the last iteration, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_last_iteration(1, [10, 20, 30]); // The index 1 is not the last iteration
 *
 * @example
 * // Returns false
 * check_is_not_last_iteration(2, [10, 20, 30]); // The index 2 is the last iteration
 */
export const check_is_not_last_iteration = (
  index: number,
  array: unknown[],
): boolean => {
  return !check_is_last_iteration(index, array);
};
