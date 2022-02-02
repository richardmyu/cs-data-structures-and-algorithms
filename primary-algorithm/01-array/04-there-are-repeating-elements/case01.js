const testFn = require('./test');

/**
解法 1
  80ms, 78.64%
  49.4MB, 5.03%

思路
  Set()

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
  if (nums.length === Array.from(new Set(nums)).length) {
    return false;
  } else {
    return true;
  }
};

testFn(containsDuplicate, '解法 1');
