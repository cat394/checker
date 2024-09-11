import { Constants } from "../constants.ts";

/**
 * Checks if the given array of numbers forms a geometric sequence with the specified ratio.
 *
 * A geometric sequence is one where the ratio between consecutive elements is constant.
 * Small differences are allowed within a tolerance defined by `Constants.TOLERANCE`.
 *
 * @param {number[]} nums - The array of numbers to check.
 * @param {number} ratio - The common ratio between consecutive elements.
 * @returns {boolean} True if the array forms a geometric sequence, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_geometric_sequence([2, 4, 8], 2); // The sequence [2, 4, 8] has a common ratio of 2
 *
 * @example
 * // Returns false
 * check_is_geometric_sequence([2, 4, 9], 2); // The sequence [2, 4, 9] does not have a common ratio of 2
 */
export const check_is_geometric_sequence = (
  nums: number[],
  ratio: number,
): boolean => {
  if (nums.length < 2) return false;
  for (let i = 1; i < nums.length; i++) {
    // Small differences are acceptable
    if (Math.abs(nums[i] / nums[i - 1] - ratio) > Constants.TOLERANCE) {
      return false;
    }
  }
  return true;
};

/**
 * Checks if the given array of numbers does not form a geometric sequence with the specified ratio.
 *
 * This is the inverse of `check_is_geometric_sequence`.
 *
 * @param {number[]} nums - The array of numbers to check.
 * @param {number} ratio - The common ratio that should not match.
 * @returns {boolean} True if the array does not form a geometric sequence, otherwise false.
 *
 * @example
 * // Returns true
 * check_is_not_geometric_sequence([2, 4, 9], 2); // The sequence [2, 4, 9] does not have a common ratio of 2
 *
 * @example
 * // Returns false
 * check_is_not_geometric_sequence([2, 4, 8], 2); // The sequence [2, 4, 8] has a common ratio of 2
 */
export const check_is_not_geometric_sequence = (
  nums: number[],
  ratio: number,
): boolean => {
  return !check_is_geometric_sequence(nums, ratio);
};
