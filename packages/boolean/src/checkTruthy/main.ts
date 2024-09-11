import type { Falsy } from "../types.ts";

/**
 * Checks if the given value is truthy.
 *
 * A value is considered truthy if it evaluates to true in a boolean context.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, Falsy>} True if the value is truthy, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_truthy(1); // 1 is truthy
 *
 * @example
 * // Returns false
 * check_is_truthy(0); // 0 is falsy
 */
export const check_is_truthy = <T>(value: T): value is Exclude<T, Falsy> => {
  return Boolean(value) === true;
};

/**
 * Checks if the given value is not truthy (i.e., falsy).
 *
 * This is the inverse of `checkIsTruthy`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Extract<T, Falsy>} True if the value is not truthy, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_truthy(0); // 0 is falsy
 *
 * @example
 * // Returns false
 * check_is_not_truthy(1); // 1 is truthy
 */
export const check_is_not_truthy = <T>(
  value: T,
): value is Extract<T, Falsy> => {
  return !check_is_truthy(value);
};
