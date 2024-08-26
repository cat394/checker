import type { Constructor } from "../types.ts";

/**
 * Checks if a given object is an instance of a specified constructor.
 *
 * The function determines whether `obj` is an instance of the class or constructor function `constructor`.
 *
 * @param {unknown} value - The object to check.
 * @param {Constructor} constructor - The constructor function or class to check against.
 * @returns {boolean} True if the object is an instance of the constructor, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsInstance(new Date(), Date); // The object is an instance of Date
 *
 * @example
 * // Returns false
 * checkIsInstance({}, Date); // The object is not an instance of Date
 */
export const checkIsInstance = <T extends Constructor>(
	value: unknown,
	constructor: T
): value is InstanceType<Constructor> => {
	return value instanceof constructor;
};

/**
 * Checks if a given object is not an instance of a specified constructor.
 *
 * This is the inverse of `checkIsInstance`.
 *
 * @param {unknown} value - The object to check.
 * @param {Constructor} constructor - The constructor function or class to check against.
 * @returns {boolean} True if the object is not an instance of the constructor, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotInstance({}, Date); // The object is not an instance of Date
 *
 * @example
 * // Returns false
 * checkIsNotInstance(new Date(), Date); // The object is an instance of Date
 */
export const checkIsNotInstance = <T1 extends unknown, T2 extends Constructor>(
	value: T1,
	constructor: T2
): value is Exclude<T1, T2> => {
	return !checkIsInstance(value, constructor);
};
