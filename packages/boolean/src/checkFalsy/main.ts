import type { Falsy } from "../types.ts";

/**
 * Checks if the given value is falsy.
 *
 * Falsy values in JavaScript include: `false`, `0`, `''` (empty string), `null`, `undefined`, and `NaN`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Extract<T, Falsy>} True if the value is falsy, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsFalsy(0); // 0 is a falsy value
 *
 * @example
 * // Returns false
 * checkIsFalsy(1); // 1 is a truthy value
 */
export const checkIsFalsy = <T>(value: T): value is Extract<T, Falsy> => {
  return Boolean(value) === false;
};

/**
 * Checks if the given value is not falsy.
 *
 * This is the inverse of `checkIsFalsy`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, Falsy>} True if the value is not falsy, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotFalsy(1); // 1 is a truthy value
 *
 * @example
 * // Returns false
 * checkIsNotFalsy(0); // 0 is a falsy value
 */
export const checkIsNotFalsy = <T>(value: T): value is Exclude<T, Falsy> => {
  return !checkIsFalsy(value);
};
