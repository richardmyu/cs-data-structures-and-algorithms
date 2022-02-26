const testFn = require('./test');

/**
解法 2
  60ms, 95.90%
  42.2MB, 12.10%

思路

小结
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }

  if (!haystack.includes(needle[0])) {
    return -1;
  }

  return haystack.search(needle);
};

testFn(strStr, '解法 2');
