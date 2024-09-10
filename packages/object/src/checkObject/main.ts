/**
 * Checks if a given value is an object.
 *
 * The function checks if the value is a non-null object that is not an array.
 *
 * @param {T} value - The value to check.
 * @returns {value is T & object} True if the value is an object, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_object({a: 1, b: 2}); // The value is an object
 *
 * @example
 * // Returns false
 * check_is_object(null); // The value is null, not an object
 *
 * @example
 * // Returns false
 * check_is_object([1, 2, 3]); // The value is an array, not an object
 */
export const check_is_object = <T>(value: T): value is T & object => {
	return value !== null && typeof value === "object" && !Array.isArray(value);
};

/**
 * Checks if a given value is not an object.
 *
 * This is the inverse of `check_is_object`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, object>} True if the value is not an object, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_object(42); // The value is a number, not an object
 *
 * @example
 * // Returns false
 * check_is_not_object({a: 1, b: 2}); // The value is an object
 *
 * @example
 * // Returns true
 * check_is_not_object(null); // The value is null, not an object
 */
export const check_is_not_object = <T>(
	value: T
): value is Exclude<T, object> => {
	return !check_is_object(value);
};
