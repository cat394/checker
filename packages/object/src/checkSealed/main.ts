/**
 * Checks if a given object is sealed.
 *
 * A sealed object is one that cannot have new properties added to it, and its existing properties cannot be removed. However, the values of existing properties can still be changed, as long as they are writable.
 *
 * @param {object} obj - The object to check.
 * @returns {boolean} True if the object is sealed, otherwise false.
 *
 * @example
 * // Returns true
 * const sealedObj = Object.seal({a: 1});
 * check_is_sealed(sealedObj); // The object is sealed
 *
 * @example
 * // Returns false
 * const obj = {a: 1};
 * check_is_sealed(obj); // The object is not sealed
 */
export const check_is_sealed = (obj: object): boolean => {
  return Object.isSealed(obj);
};

/**
 * Checks if a given object is not sealed.
 *
 * This is the inverse of `check_is_sealed`.
 *
 * @param {object} obj - The object to check.
 * @returns {boolean} True if the object is not sealed, otherwise false.
 *
 * @example
 * // Returns true
 * const obj = {a: 1};
 * check_is_not_sealed(obj); // The object is not sealed
 *
 * @example
 * // Returns false
 * const sealedObj = Object.seal({a: 1});
 * check_is_not_sealed(sealedObj); // The object is sealed
 */
export const check_is_not_sealed = (obj: object): boolean => {
  return !check_is_sealed(obj);
};
