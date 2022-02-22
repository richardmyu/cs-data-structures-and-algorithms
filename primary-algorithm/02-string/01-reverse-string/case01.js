const testFn = require('./test');

/**
解法 1
  88ms, 89.27%
  48.3MB, 5.29%

思路
  Array.prototype.reverse()

小结
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  return s.reverse();
};

testFn(reverseString,'解法 1');
