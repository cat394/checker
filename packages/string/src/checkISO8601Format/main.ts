/**
 * Checks if a given string is in ISO 8601 format.
 *
 * The function checks if the string follows the ISO 8601 date and time format.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is in ISO 8601 format, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsISO8601Format('2023-08-30T10:30:00Z'); // Valid ISO 8601 date-time
 *
 * @example
 * // Returns false
 * checkIsISO8601Format('08/30/2023'); // The string is not in ISO 8601 format
 */
export const checkIsISO8601Format = (str: string): boolean => {
	const iso8601Regex =
		/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
	return iso8601Regex.test(str);
};

/**
 * Checks if a given string is not in ISO 8601 format.
 *
 * This is the inverse of `checkIsISO8601Format`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is not in ISO 8601 format, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotISO8601Format('08/30/2023'); // The string is not in ISO 8601 format
 *
 * @example
 * // Returns false
 * checkIsNotISO8601Format('2023-08-30T10:30:00Z'); // Valid ISO 8601 date-time
 */
export const checkIsNotISO8601Format = (str: string): boolean => {
	return !checkIsISO8601Format(str);
};