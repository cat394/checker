/**
 * Checks if a given index is found.
 *
 * This function is useful when working with string indices obtained from `str.indexOf()`.
 * It checks if the index is not equal to -1, which is the return value of `str.indexOf()`
 * when the substring is not found.
 *
 * @param {number} index - The index to check.
 * @returns {boolean} True if the index is found (not -1), otherwise false.
 *
 * @example
 * // Returns true
 * const index = 'hello world'.indexOf('world');
 * check_is_index_found(index); // The index is valid, as 'world' is found within the string
 *
 * @example
 * // Returns false
 * const index = 'hello world'.indexOf('planet');
 * check_is_index_found(index); // The index is -1, as 'planet' is not found within the string
 */
export const check_is_index_found = (index: number): boolean => {
  return index !== -1;
};

/**
 * Checks if a given index is not found.
 *
 * This is the inverse of `check_is_index_found`.
 *
 * This function is useful when working with string indices obtained from `str.indexOf()`.
 * It checks if the index is equal to -1, which is the return value of `str.indexOf()`
 * when the substring is not found.
 *
 * @param {number} index - The index to check.
 * @returns {boolean} True if the index is not found (equal to -1), otherwise false.
 *
 * @example
 * // Returns true
 * const index = 'hello world'.indexOf('planet');
 * check_is_index_not_found(index); // The index is -1, as 'planet' is not found within the string
 *
 * @example
 * // Returns false
 * const index = 'hello world'.indexOf('world');
 * check_is_index_not_found(index); // The index is valid, as 'world' is found within the string
 */
export const check_is_index_not_found = (index: number): boolean => {
  return !check_is_index_found(index);
};
