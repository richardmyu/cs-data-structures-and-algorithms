const testFn = require('./test');

/**
解法 3

思路
  include

小结
  超出时间限制
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  if (!Array.isArray(nums)) {
    return false;
  }
  return nums.some((item, index) => nums.slice(0, index).concat(nums.slice(index + 1)).includes(item));
};

testFn(containsDuplicate, '解法 3');
