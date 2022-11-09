const testFn = require('./test');

/**
解法 3

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

  let r = haystack.match(needle);
  if (r) {
    return r['index'];
  } else {
    return -1;
  }
};

testFn(strStr, '解法 3');
