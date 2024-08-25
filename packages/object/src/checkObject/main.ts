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
 * checkIsObject({a: 1, b: 2}); // The value is an object
 *
 * @example
 * // Returns false
 * checkIsObject(null); // The value is null, not an object
 *
 * @example
 * // Returns false
 * checkIsObject([1, 2, 3]); // The value is an array, not an object
 */
export const checkIsObject = <T>(value: T): value is T & object => {
  return value !== null && typeof value === "object" && !Array.isArray(value);
};

/**
 * Checks if a given value is not an object.
 *
 * This is the inverse of `checkIsObject`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, object>} True if the value is not an object, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotObject(42); // The value is a number, not an object
 *
 * @example
 * // Returns false
 * checkIsNotObject({a: 1, b: 2}); // The value is an object
 *
 * @example
 * // Returns true
 * checkIsNotObject(null); // The value is null, not an object
 */
export const checkIsNotObject = <T>(value: T): value is Exclude<T, object> => {
  return !(checkIsObject(value));
};
