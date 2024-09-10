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
 * check_key_exists_in_object({a: 1, b: 2}, 'a'); // The key 'a' exists in the object
 *
 * @example
 * // Returns false
 * check_key_exists_in_object({a: 1, b: 2}, 'c'); // The key 'c' does not exist in the object
 */
export const check_key_exists_in_object = (
	obj: object,
	key: PropertyKey
): boolean => {
	return key in obj;
};

/**
 * Checks if a given key does not exist in an object.
 *
 * This is the inverse of `check_key_exists_in_object`.
 *
 * @param {object} obj - The object to check.
 * @param {PropertyKey} key - The key to check for in the object.
 * @returns {boolean} True if the key does not exist in the object, otherwise false.
 *
 * @example
 * // Returns true
 * check_key_does_not_exist_in_object({a: 1, b: 2}, 'c'); // The key 'c' does not exist in the object
 *
 * @example
 * // Returns false
 * check_key_does_not_exist_in_object({a: 1, b: 2}, 'a'); // The key 'a' exists in the object
 */
export const check_key_does_not_exist_in_object = (
	obj: object,
	key: PropertyKey
): boolean => {
	return !check_key_exists_in_object(obj, key);
};
