const testFn = require('./test');

/**
解法 2

思路
  Array.from and new Set

小结
  leetcode 无法正确执行，排除因素，确定是 Set
 */

/**
 * @param {array} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (!Array.isArray(nums)) {
    return;
  }

  nums = [...new Set(nums)];
  return nums.length;
};

testFn(removeDuplicates, '解法 2');
