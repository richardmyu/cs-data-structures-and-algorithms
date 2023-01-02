const testFn = require('./test');

/**
解法 2

思路
  indexOf / lastIndexOf

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

  return nums.some(item => nums.indexOf(item) !== nums.lastIndexOf(item));
};

testFn(containsDuplicate, '解法 2');
