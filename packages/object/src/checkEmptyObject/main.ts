import type { EmptyObject } from "../types.ts";

/**
 * Checks if a given object is an empty plain object.
 *
 * An empty object is one that has no own enumerable properties.
 * This function also ensures that the object is a plain object
 * (e.g., it will return false for instances like `new Date()`).
 *
 * @param {object} obj - The object to check.
 * @returns {obj is EmptyObject} True if the object is an empty plain object, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsEmptyObject({}); // The object has no properties
 *
 * @example
 * // Returns false
 * checkIsEmptyObject({ key: 'value' }); // The object has a property
 *
 * @example
 * // Returns false
 * checkIsEmptyObject(new Date()); // A Date instance is not a plain object
 */
export const checkIsEmptyObject = (obj: object): obj is EmptyObject => {
  // Check if the object is a plain object
  // This was added because new Date() objects were returning true
  if (Object.prototype.toString.call(obj) !== "[object Object]") {
    return false;
  }
  return Object.keys(obj).length === 0;
};

/**
 * Checks if a given object is not an empty plain object.
 *
 * This is the inverse of `checkIsEmptyObject`.
 *
 * @param {T extends object} obj - The object to check.
 * @returns {obj is Exclude<T, EmptyObject>} True if the object is not an empty plain object, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotEmptyObject({ key: 'value' }); // The object has a property
 *
 * @example
 * // Returns false
 * checkIsNotEmptyObject({}); // The object has no properties
 *
 * @example
 * // Returns true
 * checkIsNotEmptyObject(new Date()); // A Date instance is not a plain object
 */
export const checkIsNotEmptyObject = <T extends object>(
  obj: T,
): obj is Exclude<T, EmptyObject> => {
  return !checkIsEmptyObject(obj);
};
