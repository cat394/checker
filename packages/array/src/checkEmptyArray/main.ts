/**
 * Checks if the given array is empty.
 *
 * @param {unknown[]} array - The array to check.
 * @returns {array is []} True if the array is empty, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_empty_array([]); // The array is empty
 *
 * @example
 * // Returns false
 * check_is_empty_array([1, 2, 3]); // The array is not empty
 */
export const check_is_empty_array = (array: unknown[]): array is [] => {
	return array.length === 0;
};

/**
 * Checks if the given array is not empty.
 *
 * This is the inverse of `check_is_empty_array`.
 *
 * @param {T} array - The array to check.
 * @returns {array is Exclude<T, []>} True if the array is not empty, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_empty_array([1, 2, 3]); // The array is not empty
 *
 * @example
 * // Returns false
 * check_is_not_empty_array([]); // The array is empty
 */
export const check_is_not_empty_array = <T extends unknown[]>(
	array: T
): array is Exclude<T, []> => {
	return !check_is_empty_array(array);
};
