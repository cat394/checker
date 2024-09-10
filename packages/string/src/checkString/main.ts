/**
 * Checks if a given value is a string.
 *
 * The function checks if the provided value is of type `string`.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is a string, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_string('hello world'); // The value is a string
 *
 * @example
 * // Returns false
 * check_is_string(123); // The value is not a string, it is a number
 */
export const check_is_string = (value: unknown): value is string => {
	return typeof value === "string";
};

/**
 * Checks if a given value is not a string.
 *
 * This is the inverse of `check_is_string`.
 *
 * @template T - The type of the value being checked.
 * @param {T} value - The value to check.
 * @returns {boolean} True if the value is not a string, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_string(123); // The value is not a string, it is a number
 *
 * @example
 * // Returns false
 * check_is_not_string('hello world'); // The value is a string
 */
export const check_is_not_string = <T>(
	value: T
): value is Exclude<T, string> => {
	return !check_is_string(value);
};
