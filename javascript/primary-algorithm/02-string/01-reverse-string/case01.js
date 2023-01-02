const testFn = require('./test');

/**
解法 1

思路
  Array.prototype.reverse()

小结
 */

/**
 * @param {array} s
 * @return {void}
 */
const reverseString = function (s) {
  return s.reverse();
};

testFn(reverseString, '解法 1');
