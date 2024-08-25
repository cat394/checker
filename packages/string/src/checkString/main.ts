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
 * checkIsString('hello world'); // The value is a string
 *
 * @example
 * // Returns false
 * checkIsString(123); // The value is not a string, it is a number
 */
export const checkIsString = (value: unknown): value is string => {
  return typeof value === "string";
};

/**
 * Checks if a given value is not a string.
 *
 * This is the inverse of `checkIsString`.
 *
 * @template T - The type of the value being checked.
 * @param {T} value - The value to check.
 * @returns {boolean} True if the value is not a string, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotString(123); // The value is not a string, it is a number
 *
 * @example
 * // Returns false
 * checkIsNotString('hello world'); // The value is a string
 */
export const checkIsNotString = <T>(value: T): value is Exclude<T, string> => {
  return !checkIsString(value);
};
