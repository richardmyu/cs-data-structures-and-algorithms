const testFn = require('./test');

/**
解法 1
  108ms, 40.09%
  41.3MB, 33.05%

思路

小结
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

testFn(twoSum, '解法 1');
