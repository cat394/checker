import { check_is_perfect_square } from "../checkPerfectSquare/main.ts";

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
 * check_is_fibonacci(8); // 8 is a Fibonacci number
 *
 * @example
 * // Returns false
 * check_is_fibonacci(10); // 10 is not a Fibonacci number
 */
export const check_is_fibonacci = (num: number): boolean => {
  return (
    check_is_perfect_square(5 * num * num + 4) ||
    check_is_perfect_square(5 * num * num - 4)
  );
};

/**
 * Checks if a given number is not a Fibonacci number.
 *
 * This is the inverse of `check_is_fibonacci`.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is not a Fibonacci number, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_fibonacci(10); // 10 is not a Fibonacci number
 *
 * @example
 * // Returns false
 * check_is_not_fibonacci(8); // 8 is a Fibonacci number
 */
export const check_is_not_fibonacci = (num: number): boolean => {
  return !check_is_fibonacci(num);
};
