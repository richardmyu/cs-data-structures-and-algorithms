const testFn = require('./test');

/**
解法 1
  1192ms, 8.07%
  44.9MB, 5.00%

思路
  splice

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
  for (let i = 0; i < nums.length; i++) {
    if (i >= 1 && nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    } else {
      continue;
    }
  }
  return nums.length;
};

testFn(removeDuplicates, '解法 1');
