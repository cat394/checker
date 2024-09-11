import type { Nullish } from "../types.ts";
import { check_is_null } from "../checkNull/main.ts";
import { check_is_undefined } from "../checkUndefined/main.ts";

/**
 * Checks if the given value is nullish (either `null` or `undefined`).
 *
 * @param {T} value - The value to check.
 * @returns {value is Extract<T, Nullish>} True if the value is `null` or `undefined`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_nullish(null); // The value is null
 *
 * @example
 * // Returns true
 * check_is_nullish(undefined); // The value is undefined
 *
 * @example
 * // Returns false
 * check_is_nullish(0); // The value is not nullish, just falsy
 */
export const check_is_nullish = <T>(value: T): value is Extract<T, Nullish> => {
  return check_is_null(value) || check_is_undefined(value);
};

/**
 * Checks if the given value is not nullish (neither `null` nor `undefined`).
 *
 * This is the inverse of `check_is_nullish`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, Nullish>} True if the value is neither `null` nor `undefined`, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_nullish(0); // The value is not nullish, even though it's falsy
 *
 * @example
 * // Returns false
 * check_is_not_nullish(null); // The value is null
 *
 * @example
 * // Returns false
 * check_is_not_nullish(undefined); // The value is undefined
 */
export const check_is_not_nullish = <T>(
  value: T,
): value is Exclude<T, Nullish> => {
  return !check_is_nullish(value);
};
