const testFn = require('./test');

/**
解法 1

思路

小结
 */

/**
 * @param {array} nums1
 * @param {array} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  let r = nums1.concat(nums2).sort((a, b) => a - b);
  let leng = r.length;

  if (leng % 2 === 0) {
    return (r[leng / 2 - 1] + r[leng / 2]) / 2;
  } else {
    return r[(leng - 1) / 2];
  }
};

testFn(findMedianSortedArrays, '解法 1');
