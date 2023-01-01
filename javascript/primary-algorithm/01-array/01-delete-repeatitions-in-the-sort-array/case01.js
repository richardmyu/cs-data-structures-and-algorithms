const testFn = require('./test');

/**
解法 1

思路
  splice

小结
 */

/**
 * @desc 删除排序数组中的重复项
 *       给你一个 升序排列 的数组 nums ，
 *       请你 原地 删除重复出现的元素，
 *       使每个元素 只出现一次 ，
 *       返回删除后数组的新长度。
 *       元素的 相对顺序 应该保持 一致 。
 * @param {array} nums
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
