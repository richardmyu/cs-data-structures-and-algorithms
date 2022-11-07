const testFn = require('./test');

/**
解法 2

思路
  先用正则匹配出合理的数值字符串，然后数值化；
 */
/**
 * @param {sing} s
 * @return {number}
 */
const myAtoi = function (s) {
  const MINNUM = Math.pow(2, 31) * -1;
  const MAXNUM = Math.pow(2, 31) - 1;
  s = s.replace(/^ +/g, '').match(/(^[+-]?\d+[.]\d{0,}|^[+-.]?\d+)/);
  if (s) {
    if (s[0] < MINNUM) {
      return MINNUM;
    }
    if (s[0] > MAXNUM) {
      return MAXNUM;
    }
    return Number(s[0]);
  } else {
    return 0;
  }
};

testFn(myAtoi, '解法 2');
