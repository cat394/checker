/**
 * Checks if a given string represents a binary number.
 *
 * The function checks if the string starts with '0b' or '0B' followed by only '0' or '1' digits.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string represents a binary number, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsBinary('0b1010'); // The string is a valid binary number
 *
 * @example
 * // Returns false
 * checkIsBinary('0b102'); // The string contains a digit '2', which is not valid in binary
 *
 * @example
 * // Returns false
 * checkIsBinary('1010'); // The string does not start with '0b' or '0B'
 */
export const checkIsBinary = (str: string): boolean => {
  const binaryRegex = /^0[bB][01]+$/;
  return binaryRegex.test(str);
};

/**
 * Checks if a given string does not represent a binary number.
 *
 * This is the inverse of `checkIsBinary`.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string does not represent a binary number, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotBinary('1010'); // The string does not start with '0b' or '0B'
 *
 * @example
 * // Returns false
 * checkIsNotBinary('0b1010'); // The string is a valid binary number
 */
export const checkIsNotBinary = (str: string): boolean => {
  return !checkIsBinary(str);
};
