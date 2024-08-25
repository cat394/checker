import type { Nullish } from "../types.ts";
import { checkIsNull } from "../checkNull/main.ts";
import { checkIsUndefined } from "../checkUndefined/main.ts";

/**
 * Checks if the given value is nullish (either `null` or `undefined`).
 *
 * @param {T} value - The value to check.
 * @returns {value is Extract<T, Nullish>} True if the value is `null` or `undefined`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNullish(null); // The value is null
 *
 * @example
 * // Returns true
 * checkIsNullish(undefined); // The value is undefined
 *
 * @example
 * // Returns false
 * checkIsNullish(0); // The value is not nullish, just falsy
 */
export const checkIsNullish = <T>(value: T): value is Extract<T, Nullish> => {
  return checkIsNull(value) || checkIsUndefined(value);
};

/**
 * Checks if the given value is not nullish (neither `null` nor `undefined`).
 *
 * This is the inverse of `checkIsNullish`.
 *
 * @param {T} value - The value to check.
 * @returns {value is Exclude<T, Nullish>} True if the value is neither `null` nor `undefined`, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotNullish(0); // The value is not nullish, even though it's falsy
 *
 * @example
 * // Returns false
 * checkIsNotNullish(null); // The value is null
 *
 * @example
 * // Returns false
 * checkIsNotNullish(undefined); // The value is undefined
 */
export const checkIsNotNullish = <T>(
  value: T,
): value is Exclude<T, Nullish> => {
  return !checkIsNullish(value);
};
