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
 * checkIsTruthy(1); // 1 is truthy
 *
 * @example
 * // Returns false
 * checkIsTruthy(0); // 0 is falsy
 */
export const checkIsTruthy = <T>(value: T): value is Exclude<T, Falsy> => {
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
 * checkIsNotTruthy(0); // 0 is falsy
 *
 * @example
 * // Returns false
 * checkIsNotTruthy(1); // 1 is truthy
 */
export const checkIsNotTruthy = <T>(value: T): value is Extract<T, Falsy> => {
  return !checkIsTruthy(value);
};
