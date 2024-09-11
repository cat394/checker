import type { EnterKey } from "../types.ts";

/**
 * Checks if a given string represents the "Enter" key.
 *
 * The function checks if the string exactly matches 'Enter'.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is 'Enter', otherwise false.
 *
 * @example
 * // Returns true
 * check_is_enter_key('Enter'); // The string is exactly 'Enter'
 *
 * @example
 * // Returns false
 * check_is_enter_key('enter'); // The string is not exactly 'Enter'
 */
export const check_is_enter_key = (str: string): str is EnterKey => {
  return str === "Enter";
};

/**
 * Checks if a given string does not represent the "Enter" key.
 *
 * This is the inverse of `check_is_enter_key`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not 'Enter', otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_enter_key('Space'); // The string is not 'Enter'
 *
 * @example
 * // Returns false
 * check_is_not_enter_key('Enter'); // The string is exactly 'Enter'
 */
export const check_is_not_enter_key = <T extends string>(
  str: T,
): str is Exclude<T, EnterKey> => {
  return !check_is_enter_key(str);
};
