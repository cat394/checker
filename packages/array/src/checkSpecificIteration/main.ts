/**
 * Checks if the current iteration index matches a specific target index.
 *
 * @param {number} index - The current iteration index.
 * @param {number} targetIndex - The target index to check against.
 * @returns {boolean} True if the current index matches the target index, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_specific_iteration(3, 3); // The current index is 3 and matches the target index
 *
 * @example
 * // Returns false
 * check_is_specific_iteration(2, 3); // The current index is 2 and does not match the target index
 */
export const check_is_specific_iteration = (
	index: number,
	targetIndex: number
): boolean => {
	return index === targetIndex;
};

/**
 * Checks if the current iteration index does not match a specific target index.
 *
 * This is the inverse of `check_is_specific_iteration`.
 *
 * @param {number} index - The current iteration index.
 * @param {number} targetIndex - The target index to check against.
 * @returns {boolean} True if the current index does not match the target index, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_specific_iteration(2, 3); // The current index is 2 and does not match the target index
 *
 * @example
 * // Returns false
 * check_is_not_specific_iteration(3, 3); // The current index is 3 and matches the target index
 */
export const check_is_not_specific_iteration = (
	index: number,
	targetIndex: number
): boolean => {
	return !check_is_specific_iteration(index, targetIndex);
};
