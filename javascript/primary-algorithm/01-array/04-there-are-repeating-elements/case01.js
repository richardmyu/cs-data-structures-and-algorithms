const testFn = require('./test');

/**
解法 1

思路
  Set()

小结
 */

/**
 * @param {array} nums
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
