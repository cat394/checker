/**
 * Checks if a given key exists in an object.
 *
 * The function checks if the specified key is present in the object, either as a direct property or inherited.
 *
 * @param {object} obj - The object to check.
 * @param {PropertyKey} key - The key to check for in the object.
 * @returns {boolean} True if the key exists in the object, otherwise false.
 *
 * @example
 * // Returns true
 * checkKeyExistsInObject({a: 1, b: 2}, 'a'); // The key 'a' exists in the object
 *
 * @example
 * // Returns false
 * checkKeyExistsInObject({a: 1, b: 2}, 'c'); // The key 'c' does not exist in the object
 */
export const checkKeyExistsInObject = (
  obj: object,
  key: PropertyKey,
): boolean => {
  return key in obj;
};

/**
 * Checks if a given key does not exist in an object.
 *
 * This is the inverse of `checkKeyExistsInObject`.
 *
 * @param {object} obj - The object to check.
 * @param {PropertyKey} key - The key to check for in the object.
 * @returns {boolean} True if the key does not exist in the object, otherwise false.
 *
 * @example
 * // Returns true
 * checkKeyDoesNotExistInObject({a: 1, b: 2}, 'c'); // The key 'c' does not exist in the object
 *
 * @example
 * // Returns false
 * checkKeyDoesNotExistInObject({a: 1, b: 2}, 'a'); // The key 'a' exists in the object
 */
export const checkKeyDoesNotExistInObject = (
  obj: object,
  key: PropertyKey,
): boolean => {
  return !checkKeyExistsInObject(obj, key);
};
