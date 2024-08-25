/**
 * Checks if the given value is of type `number`.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is number} True if the value is a number, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNumber(42); // The value is a number
 *
 * @example
 * // Returns false
 * checkIsNumber("42"); // The value is a string, not a number
 */
export const checkIsNumber = (value: unknown): value is number => {
  return typeof value === "number";
};

/**
 * Checks if the given value is not of type `number`.
 *
 * This is the inverse of `checkIsNumber`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, number>} True if the value is not a number, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotNumber("42"); // The value is a string, not a number
 *
 * @example
 * // Returns false
 * checkIsNotNumber(42); // The value is a number
 */
export const checkIsNotNumber = <T>(value: T): value is Exclude<T, number> => {
  return !checkIsNumber(value);
};
