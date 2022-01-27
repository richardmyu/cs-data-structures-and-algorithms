const testFn = require('./test');

/**
解法 3
  1136ms, 16.64%
  44.2MB, 5.00%

思路
  根据标签-双指针，重新考虑

小结

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (!Array.isArray(nums)) {
    return;
  }

  let slow = 0;
  let fast = 1;

  while (fast < nums.length) {
    if (nums[slow] === nums[fast]) {
      nums.splice(slow, 1);
      slow = fast - 1;
      fast = slow + 1;
    } else {
      slow = fast;
      fast = slow + 1;
    }

  }
  return nums.length;
};

testFn(removeDuplicates, '解法 3');
