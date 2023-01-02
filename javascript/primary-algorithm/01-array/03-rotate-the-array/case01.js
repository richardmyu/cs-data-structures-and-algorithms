const testFn = require('./test');

/**
解法 1

思路

小结
  leetcode 运行异常
 */

/**
 * @desc 旋转数组
 *       给你一个数组，
 *       将数组中的元素向右轮转 k 个位置，
 *       其中 k 是非负数。
 * @param {array} nums
 * @param {number} k
 * @return {void}
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
