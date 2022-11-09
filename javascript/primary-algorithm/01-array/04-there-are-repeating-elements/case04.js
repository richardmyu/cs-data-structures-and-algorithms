const testFn = require('./test');

/**
解法 4

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
