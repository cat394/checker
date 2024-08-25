/**
 * Checks if the given value is strictly `undefined`.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is undefined} True if the value is strictly `undefined`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsUndefined(undefined); // The value is strictly undefined
 *
 * @example
 * // Returns false
 * checkIsUndefined(null); // The value is not undefined, but it's null
 */
export const checkIsUndefined = (value: unknown): value is undefined => {
  return value === undefined;
};

/**
 * Checks if the given value is not strictly `undefined`.
 *
 * This is the inverse of `checkIsUndefined`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, undefined>} True if the value is not strictly `undefined`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotUndefined(null); // The value is not undefined, it's null
 *
 * @example
 * // Returns false
 * checkIsNotUndefined(undefined); // The value is strictly undefined
 */
export const checkIsNotUndefined = <T>(
  value: T,
): value is Exclude<T, undefined> => {
  return !checkIsUndefined(value);
};
