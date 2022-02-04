const testFn = require('./test');

/**
解法 1

思路

小结
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
    return;
  }
  let max_num = [];
  let min_num = [];
  let r = [];
  if (nums1.length > nums2.length) {
    max_num = nums1;
    min_num = nums2;
  } else {
    max_num = nums2;
    min_num = nums1;
  }

  for (let i = 0; i < min_num.length; i++) {
    if (min_num.indexOf(min_num[i]) === min_num.lastIndexOf(min_num[i])) {
      if (max_num.includes(min_num[i])) {
        r.push(min_num[i]);
      }
    } else {
      if (max_num.includes(min_num[i])) {
        let exec_max_num = acountChar(min_num[i], max_num);
        let exec_min_num = acountChar(min_num[i], min_num);
        let flag = exec_max_num.length < exec_min_num.length ? exec_max_num : exec_min_num;
        r.push(...flag);
        i += flag.length;
      }
    }
  }
  return r;
};

const acountChar = function (s, ary) {
  if (!Array.isArray(ary)) {
    return;
  }
  let r = [];
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] === s) {
      r.push(s);
    }
  }
  return r;
};

testFn(intersect, '解法 1');
