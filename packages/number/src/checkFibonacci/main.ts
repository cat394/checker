import { checkIsPerfectSquare } from "../checkPerfectSquare/main.ts";

/**
 * Checks if a given number is a Fibonacci number.
 *
 * A number is a Fibonacci number if one or both of
 * (5 * n^2 + 4) or (5 * n^2 - 4) is a perfect square.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is a Fibonacci number, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsFibonacci(8); // 8 is a Fibonacci number
 *
 * @example
 * // Returns false
 * checkIsFibonacci(10); // 10 is not a Fibonacci number
 */
export const checkIsFibonacci = (num: number): boolean => {
  return (
    checkIsPerfectSquare(5 * num * num + 4) ||
    checkIsPerfectSquare(5 * num * num - 4)
  );
};

/**
 * Checks if a given number is not a Fibonacci number.
 *
 * This is the inverse of `checkIsFibonacci`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not a Fibonacci number, otherwise false.
 *
 * @example
 * // Returns true
 * checkIsNotFibonacci(10); // 10 is not a Fibonacci number
 *
 * @example
 * // Returns false
 * checkIsNotFibonacci(8); // 8 is a Fibonacci number
 */
export const checkIsNotFibonacci = (num: number): boolean => {
  return !checkIsFibonacci(num);
};
