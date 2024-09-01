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
 * checkIsEnterKey('Enter'); // The string is exactly 'Enter'
 *
 * @example
 * // Returns false
 * checkIsEnterKey('enter'); // The string is not exactly 'Enter'
 */
export const checkIsEnterKey = (str: string): str is EnterKey => {
  return str === "Enter";
};

/**
 * Checks if a given string does not represent the "Enter" key.
 *
 * This is the inverse of `checkIsEnterKey`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not 'Enter', otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotEnterKey('Space'); // The string is not 'Enter'
 *
 * @example
 * // Returns false
 * checkIsNotEnterKey('Enter'); // The string is exactly 'Enter'
 */
export const checkIsNotEnterKey = <T extends string>(str: T): str is Exclude<T, EnterKey> => {
  return !checkIsEnterKey(str);
};
