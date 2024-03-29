const testFn = require('./test');

/**
解法 1

思路
  indexOf / lastIndexOf

小结
 */

/**
 * @param {array} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  if (!Array.isArray(nums)) {
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) > -1 && nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
};

testFn(singleNumber, '解法 1');
