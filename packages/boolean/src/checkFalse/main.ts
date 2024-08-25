/**
 * Checks if the given value is strictly `false`.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is false} True if the value is strictly `false`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsFalse(false); // The value is strictly false
 *
 * @example
 * // Returns false
 * checkIsFalse(0); // The value is not strictly false, but falsy
 */
export const checkIsFalse = (value: unknown): value is false => {
  return value === false;
};

/**
 * Checks if the given value is not strictly `false`.
 *
 * This is the inverse of `checkIsFalse`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, false>} True if the value is not strictly `false`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotFalse(0); // The value is not strictly false, even though it's falsy
 *
 * @example
 * // Returns false
 * checkIsNotFalse(false); // The value is strictly false
 */
export const checkIsNotFalse = <T>(value: T): value is Exclude<T, false> => {
  return !checkIsFalse(value);
};
