const testFn = require('./test');

/**
解法 1
  80ms, 60.75%
  40.8MB, 5.01%

思路

小结
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  let hLeng = haystack.length;
  let nLeng = needle.length;
  let indexAry = [];
  let index = 0;
  let flag = false;
  if (nLeng === 0) {
    return 0;
  }
  if (nLeng === hLeng) {
    if (haystack === needle) {
      return 0;
    } else {
      return -1;
    }
  }
  for (let i = 0; i < hLeng - nLeng + 1; i++) {
    if (haystack[i] === needle[0]) {
      indexAry.push(i);
    }
  }
  if (indexAry.length === 0) {
    return -1;
  }
  for (let j = 0; j < indexAry.length; j++) {
    if (haystack.slice(indexAry[j], indexAry[j] + nLeng) === needle) {
      index = indexAry[j];
      flag = true;
      break;
    }
  }
  return flag ? index : -1;
};

testFn(strStr, '解法 1');
