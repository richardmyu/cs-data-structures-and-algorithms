const testFn = require('./test');

/**
解法 2

思路

小结
 */

/**
 * @param {array} nums
 * @param {number} k
 * @return {void}
 */
const rotate = function (nums, k) {
  if (!Array.isArray(nums) || k < 0) {
    return;
  }

  let ary = nums.slice();
  let leng = ary.length;
  k = k % leng;

  for (let i = 0; i < leng; i++) {
    if (i < (leng - k)) {
      nums[i + k] = ary[i];
    } else {
      nums[i - (leng - k)] = ary[i];
    }
  }

  return nums;
};

testFn(rotate, '解法 2');
