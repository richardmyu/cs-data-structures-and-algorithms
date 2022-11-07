const testFn = require('./test');

/**
解法 2

思路

小结
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  if (!Array.isArray(nums)) {
    return;
  }
  nums = nums.sort((a, b) => a - b);
  if (nums.indexOf(nums[0]) === nums.lastIndexOf(nums[0])) {
    return nums[0];
  } else {
    for (let i = 0; i < nums.length; i += 2) {
      if (i % 2 === 0 && nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
        return nums[i];
      }
    }
  }
};

testFn(singleNumber, '解法 2');
