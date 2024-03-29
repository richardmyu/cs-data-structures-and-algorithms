const testFn = require('./test');

/**
解法 1

思路
  splice + count

小结
 */

/**
 * @param {array} nums
 * @return {void}
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
