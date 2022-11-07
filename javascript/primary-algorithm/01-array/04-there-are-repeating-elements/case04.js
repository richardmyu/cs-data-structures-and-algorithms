const testFn = require('./test');

/**
解法 4
  108ms, 32.38%
  55.4MB, 5.03%

思路


小结
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  if (!Array.isArray(nums)) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = nums[i];
  }
  if (nums.length === Object.values(obj).length) {
    return false;
  } else {
    return true;
  }
};

testFn(containsDuplicate, '解法 4');
