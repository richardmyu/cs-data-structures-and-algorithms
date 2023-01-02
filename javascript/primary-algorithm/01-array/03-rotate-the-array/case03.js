const testFn = require('./test');

/**
解法 3

思路

小结
  leetcode 运行异常
 */

/**
 * @param {array} nums
 * @param {number} k
 * @return {void}
 */
const rotate = function (nums, k) {
  if (!Array.isArray(nums) || k < 0) {
    return;
  }

  k = k % nums.length;
  let step = nums.length - k;
  nums = nums.splice(-k, step).concat(nums);

  return nums;
};

testFn(rotate, '解法 3');
