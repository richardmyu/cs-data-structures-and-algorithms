const testFn = require('./test');

/**
解法 1

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

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) === needle) {
        return i;
      }
    }
  }

  return -1;
};

testFn(strStr, '解法 1');
