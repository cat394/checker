/**
 * Checks if the given index corresponds to the first iteration.
 *
 * @param {number} index - The index to check.
 * @returns {boolean} True if the index is 0, indicating the first iteration, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_first_iteration(0); // The index is 0, indicating the first iteration
 *
 * @example
 * // Returns false
 * check_is_first_iteration(1); // The index is not 0, not the first iteration
 */
export const check_is_first_iteration = (index: number): boolean => {
	return index === 0;
};

/**
 * Checks if the given index does not correspond to the first iteration.
 *
 * This is the inverse of `check_is_first_iteration`.
 *
 * @param {number} index - The index to check.
 * @returns {boolean} True if the index is not 0, indicating it is not the first iteration, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_first_iteration(1); // The index is not 0, not the first iteration
 *
 * @example
 * // Returns false
 * check_is_not_first_iteration(0); // The index is 0, indicating the first iteration
 */
export const check_is_not_first_iteration = (index: number): boolean => {
	return !check_is_first_iteration(index);
};
