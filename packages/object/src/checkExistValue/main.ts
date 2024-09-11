/**
 * Checks if a given value exists in the provided object.
 *
 * This function searches the values of the given object to determine if the specified value exists.
 *
 * @param {T} obj - The object to search in.
 * @param {T[keyof T]} value - The value to look for.
 * @returns {boolean} True if the value exists in the object, otherwise false.
 *
 * @example
 * // Returns true
 * check_value_exists_in_object({a: 1, b: 2, c: 3}, 2); // 2 is a value in the object
 *
 * @example
 * // Returns false
 * check_value_exists_in_object({a: 1, b: 2, c: 3}, 4); // 4 is not a value in the object
 */
export const check_value_exists_in_object = <T extends object>(
  obj: T,
  value: T[keyof T],
): boolean => {
  return Object.values(obj).includes(value);
};

/**
 * Checks if a given value does not exist in the provided object.
 *
 * This is the inverse of `check_value_exists_in_object`.
 *
 * @param {T} obj - The object to search in.
 * @param {T[keyof T]} value - The value to check.
 * @returns {boolean} True if the value does not exist in the object, otherwise false.
 *
 * @example
 * // Returns true
 * check_value_does_not_exist_in_object({a: 1, b: 2, c: 3}, 4); // 4 is not a value in the object
 *
 * @example
 * // Returns false
 * check_value_does_not_exist_in_object({a: 1, b: 2, c: 3}, 2); // 2 is a value in the object
 */
export const check_value_does_not_exist_in_object = <T extends object>(
  obj: T,
  value: T[keyof T],
): boolean => {
  return !check_value_exists_in_object(obj, value);
};
