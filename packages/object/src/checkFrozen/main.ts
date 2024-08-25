/**
 * Checks if a given object is frozen.
 *
 * A frozen object is one that cannot have new properties added, existing properties removed,
 * or its existing properties changed.
 *
 * @param {object} obj - The object to check.
 * @returns {boolean} True if the object is frozen, otherwise false.
 *
 * @example
 * // Returns true
 * const frozenObj = Object.freeze({ a: 1 });
 * checkIsFrozen(frozenObj); // The object is frozen
 *
 * @example
 * // Returns false
 * const regularObj = { a: 1 };
 * checkIsFrozen(regularObj); // The object is not frozen
 */
export const checkIsFrozen = (obj: object): boolean => {
  return Object.isFrozen(obj);
};

/**
 * Checks if a given object is not frozen.
 *
 * This is the inverse of `checkIsFrozen`.
 *
 * @param {object} obj - The object to check.
 * @returns {boolean} True if the object is not frozen, otherwise false.
 *
 * @example
 * // Returns true
 * const regularObj = { a: 1 };
 * checkIsNotFrozen(regularObj); // The object is not frozen
 *
 * @example
 * // Returns false
 * const frozenObj = Object.freeze({ a: 1 });
 * checkIsNotFrozen(frozenObj); // The object is frozen
 */
export const checkIsNotFrozen = (obj: object): boolean => {
  return !checkIsFrozen(obj);
};
