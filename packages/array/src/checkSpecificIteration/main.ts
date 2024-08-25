/**
 * Checks if the current iteration index matches a specific target index.
 *
 * @param {number} index - The current iteration index.
 * @param {number} targetIndex - The target index to check against.
 * @returns {boolean} True if the current index matches the target index, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsSpecificIteration(3, 3); // The current index is 3 and matches the target index
 *
 * @example
 * // Returns false
 * checkIsSpecificIteration(2, 3); // The current index is 2 and does not match the target index
 */
export const checkIsSpecificIteration = (
  index: number,
  targetIndex: number,
): boolean => {
  return index === targetIndex;
};

/**
 * Checks if the current iteration index does not match a specific target index.
 *
 * This is the inverse of `checkIsSpecificIteration`.
 *
 * @param {number} index - The current iteration index.
 * @param {number} targetIndex - The target index to check against.
 * @returns {boolean} True if the current index does not match the target index, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotSpecificIteration(2, 3); // The current index is 2 and does not match the target index
 *
 * @example
 * // Returns false
 * checkIsNotSpecificIteration(3, 3); // The current index is 3 and matches the target index
 */
export const checkIsNotSpecificIteration = (
  index: number,
  targetIndex: number,
): boolean => {
  return !checkIsSpecificIteration(index, targetIndex);
};
