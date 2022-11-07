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
const lengthOfLastWord = function (s) {
  return s.trim().split(' ').slice(-1).toString().length;
};

testFn(lengthOfLastWord, '解法 1');
