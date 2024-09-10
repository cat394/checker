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
 * check_is_instace(new Date(), Date); // The object is an instance of Date
 *
 * @example
 * // Returns false
 * check_is_instace({}, Date); // The object is not an instance of Date
 */
export const check_is_instace = <T extends Constructor>(
	value: unknown,
	constructor: T
): value is InstanceType<Constructor> => {
	return value instanceof constructor;
};

/**
 * Checks if a given object is not an instance of a specified constructor.
 *
 * This is the inverse of `check_is_instace`.
 *
 * @param {unknown} value - The object to check.
 * @param {Constructor} constructor - The constructor function or class to check against.
 * @returns {boolean} True if the object is not an instance of the constructor, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_instance({}, Date); // The object is not an instance of Date
 *
 * @example
 * // Returns false
 * check_is_not_instance(new Date(), Date); // The object is an instance of Date
 */
export const check_is_not_instance = <
	T1 extends unknown,
	T2 extends Constructor
>(
	value: T1,
	constructor: T2
): value is Exclude<T1, T2> => {
	return !check_is_instace(value, constructor);
};
