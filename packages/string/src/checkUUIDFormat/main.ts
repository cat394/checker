import type { UUIDFormat } from "../types.ts";

/**
 * Checks if a given string is in UUID format.
 *
 * The function checks if the string follows the UUID format (version 1 to 5).
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is in UUID format, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_UUID_format('123e4567-e89b-12d3-a456-426614174000'); // Valid UUID
 *
 * @example
 * // Returns false
 * check_is_UUID_format('invalid-uuid'); // The string is not a valid UUID format
 */
export const check_is_UUID_format = (str: string): str is UUIDFormat => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
};

/**
 * Checks if a given string is not in UUID format.
 *
 * This is the inverse of `check_is_UUID_format`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not in UUID format, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_UUID_format('invalid-uuid'); // The string is not a valid UUID format
 *
 * @example
 * // Returns false
 * check_is_not_UUID_format('123e4567-e89b-12d3-a456-426614174000'); // Valid UUID
 */
export const check_is_not_UUID_format = <T extends string>(
  str: T,
): str is Exclude<T, UUIDFormat> => {
  return !check_is_UUID_format(str);
};
