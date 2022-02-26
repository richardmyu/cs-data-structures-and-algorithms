const testFn = require('./test');

/**
解法 2
  80ms, 73.20%
  42.7MB, 27.88%

思路

小结
 */

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  const MAX_NUM = Math.pow(2, 31) - 1;
  const MIN_NUM = Math.pow(-2, 31);
  s = s.trim();
  if (Number.isNaN(parseInt(s))) {
    if (s[0] === '-') {
      return -0;
    }
    return 0;
  }

  return parseInt(s) > MAX_NUM ? MAX_NUM : parseInt(s) < MIN_NUM ? MIN_NUM : parseInt(s);
};

testFn(myAtoi, '解法 2');
