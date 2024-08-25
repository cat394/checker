/**
 * Checks if the given index corresponds to the first iteration.
 *
 * @param {number} index - The index to check.
 * @returns {boolean} True if the index is 0, indicating the first iteration, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsFirstIteration(0); // The index is 0, indicating the first iteration
 *
 * @example
 * // Returns false
 * checkIsFirstIteration(1); // The index is not 0, not the first iteration
 */
export const checkIsFirstIteration = (index: number): boolean => {
  return index === 0;
};

/**
 * Checks if the given index does not correspond to the first iteration.
 *
 * This is the inverse of `checkIsFirstIteration`.
 *
 * @param {number} index - The index to check.
 * @returns {boolean} True if the index is not 0, indicating it is not the first iteration, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotFirstIteration(1); // The index is not 0, not the first iteration
 *
 * @example
 * // Returns false
 * checkIsNotFirstIteration(0); // The index is 0, indicating the first iteration
 */
export const checkIsNotFirstIteration = (index: number): boolean => {
  return !checkIsFirstIteration(index);
};
