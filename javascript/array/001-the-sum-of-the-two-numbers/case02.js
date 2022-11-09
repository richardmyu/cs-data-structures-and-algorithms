const testFn = require('./test');

/**
解法 2

思路

小结
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let k = 0; k < nums.length; k++) {
    let i = k + 1;
    let j = nums.length - 1;

    while ((i !== j || (i + 1) !== j) && i <= j) {

      if (nums[k] + nums[i] === target) {
        return [k, i];
      } else if (nums[k] + nums[j] === target) {
        return [k, j];
      }

      i++;
      j--;
    }
  }
};

testFn(twoSum, '解法 2');
