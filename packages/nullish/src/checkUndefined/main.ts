/**
 * Checks if the given value is strictly `undefined`.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is undefined} True if the value is strictly `undefined`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_undefined(undefined); // The value is strictly undefined
 *
 * @example
 * // Returns false
 * check_is_undefined(null); // The value is not undefined, but it's null
 */
export const check_is_undefined = (value: unknown): value is undefined => {
	return value === undefined;
};

/**
 * Checks if the given value is not strictly `undefined`.
 *
 * This is the inverse of `check_is_undefined`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, undefined>} True if the value is not strictly `undefined`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_undefined(null); // The value is not undefined, it's null
 *
 * @example
 * // Returns false
 * check_is_not_undefined(undefined); // The value is strictly undefined
 */
export const check_is_not_undefined = <T>(
	value: T
): value is Exclude<T, undefined> => {
	return !check_is_undefined(value);
};
