/**
 * Checks if two objects are deeply equal.
 *
 * This function compares two objects by converting them to JSON strings and
 * checking if the resulting strings are identical. Note that this method may not
 * handle certain cases (e.g., functions, `undefined` values, or special object types) correctly.
 *
 * @param {object} obj1 - The first object to compare.
 * @param {object} obj2 - The second object to compare.
 * @returns {boolean} True if the objects are deeply equal, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_deep_equal({ a: 1, b: 2 }, { a: 1, b: 2 }); // The objects have the same structure and values
 *
 * @example
 * // Returns false
 * check_is_deep_equal({ a: 1, b: 2 }, { a: 2, b: 3 }); // The objects have different values
 */
export const check_is_deep_equal = <T1 extends object, T2 extends T1>(
  obj1: T1,
  obj2: T2,
): obj1 is T2 => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

/**
 * Checks if two objects are not deeply equal.
 *
 * This is the inverse of `check_is_deep_equal`.
 *
 * @param {object} obj1 - The first object to compare.
 * @param {object} obj2 - The second object to compare.
 * @returns {boolean} True if the objects are not deeply equal, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_deep_equal({ a: 1, b: 2 }, { a: 2, b: 3 }); // The objects have different values
 *
 * @example
 * // Returns false
 * check_is_not_deep_equal({ a: 1, b: 2 }, { a: 1, b: 2 }); // The objects have the same structure and values
 */
export const check_is_not_deep_equal = (
  obj1: object,
  obj2: object,
): boolean => {
  return !check_is_deep_equal(obj1, obj2);
};
