const testFn = require('./test');

/**
解法 1

思路

小结
  leetcode 运行异常
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  if (!Array.isArray(nums) || k < 0) {
    return;
  }
  k = k % nums.length;
  nums = nums.slice(-k).concat(nums.slice(0, -k));
  return nums;
};

testFn(rotate, '解法 1');
