/**
 * Checks if the given index is the last iteration in the array.
 *
 * @param {number} index - The index to check.
 * @param {unknown[]} array - The array to check against.
 * @returns {boolean} True if the index is the last iteration, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsLastIteration(2, [10, 20, 30]); // The index 2 is the last iteration
 *
 * @example
 * // Returns false
 * checkIsLastIteration(1, [10, 20, 30]); // The index 1 is not the last iteration
 */
export const checkIsLastIteration = (
  index: number,
  array: unknown[],
): boolean => {
  return index === array.length - 1;
};

/**
 * Checks if the given index is not the last iteration in the array.
 *
 * This is the inverse of `checkIsLastIteration`.
 *
 * @param {number} index - The index to check.
 * @param {unknown[]} array - The array to check against.
 * @returns {boolean} True if the index is not the last iteration, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotLastIteration(1, [10, 20, 30]); // The index 1 is not the last iteration
 *
 * @example
 * // Returns false
 * checkIsNotLastIteration(2, [10, 20, 30]); // The index 2 is the last iteration
 */
export const checkIsNotLastIteration = (
  index: number,
  array: unknown[],
): boolean => {
  return !checkIsLastIteration(index, array);
};
