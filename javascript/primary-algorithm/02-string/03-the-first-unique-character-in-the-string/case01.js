const testFn = require('./test');

/**
解法 1

思路

小结
 */

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

testFn(firstUniqChar, '解法 1');
