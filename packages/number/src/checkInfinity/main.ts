/**
 * Checks if the given value is Infinity.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is Infinity or -Infinity, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsInfinity(Infinity); // Infinity is recognized as Infinity
 *
 * @example
 * // Returns true
 * checkIsInfinity(-Infinity); // -Infinity is recognized as Infinity
 *
 * @example
 * // Returns false
 * checkIsInfinity(100); // 100 is not Infinity
 *
 * @example
 * // Returns false
 * checkIsInfinity("Infinity"); // String "Infinity" is not the same as Infinity
 */
export const checkIsInfinity = (value: unknown): boolean => {
  return value === Infinity || value === -Infinity;
};

/**
 * Checks if the given value is not Infinity.
 *
 * This is the inverse of `checkIsInfinity`.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is not Infinity or -Infinity, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotInfinity(100); // 100 is not Infinity
 *
 * @example
 * // Returns false
 * checkIsNotInfinity(Infinity); // Infinity is recognized as Infinity
 *
 * @example
 * // Returns false
 * checkIsNotInfinity(-Infinity); // -Infinity is recognized as Infinity
 *
 * @example
 * // Returns true
 * checkIsNotInfinity("Infinity"); // String "Infinity" is not the same as Infinity
 */
export const checkIsNotInfinity = (value: unknown): boolean => {
  return !checkIsInfinity(value);
};
