const testFn = require('./test');

/**
解法 1
  280ms, 16.02%
  45.5MB, 10.88%

思路
  splice + count

小结
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  if (!Array.isArray(nums)) {
    return;
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count++;
      i--;
    }
  }
  for (let j = 0; j < count; j++) {
    nums.push(0);
  }
  return nums;
};

testFn(moveZeroes, '解法 1');
