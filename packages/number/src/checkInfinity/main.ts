/**
 * Checks if the given value is Infinity.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is Infinity or -Infinity, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_infinity(Infinity); // Infinity is recognized as Infinity
 *
 * @example
 * // Returns true
 * check_is_infinity(-Infinity); // -Infinity is recognized as Infinity
 *
 * @example
 * // Returns false
 * check_is_infinity(100); // 100 is not Infinity
 *
 * @example
 * // Returns false
 * check_is_infinity("Infinity"); // String "Infinity" is not the same as Infinity
 */
export const check_is_infinity = (value: unknown): boolean => {
  return value === Infinity || value === -Infinity;
};

/**
 * Checks if the given value is not Infinity.
 *
 * This is the inverse of `check_is_infinity`.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is not Infinity or -Infinity, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_infinity(100); // 100 is not Infinity
 *
 * @example
 * // Returns false
 * check_is_not_infinity(Infinity); // Infinity is recognized as Infinity
 *
 * @example
 * // Returns false
 * check_is_not_infinity(-Infinity); // -Infinity is recognized as Infinity
 *
 * @example
 * // Returns true
 * check_is_not_infinity("Infinity"); // String "Infinity" is not the same as Infinity
 */
export const check_is_not_infinity = (value: unknown): boolean => {
  return !check_is_infinity(value);
};
