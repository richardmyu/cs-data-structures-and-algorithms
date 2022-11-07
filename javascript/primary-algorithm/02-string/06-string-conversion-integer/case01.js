const testFn = require('./test');

/**
解法 1
  84ms, 61.97%
  44MB, 10.80%

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
  let is_minus = false;

  if (s[0] === '-') {
    is_minus = true;
    s = s.slice(1);
  } else if (s[0] === '+') {
    is_minus = false;
    s = s.slice(1);
  }

  for (let i = 0; i < s.length; i++) {
    if (!/[0-9]/.test(s[i])) {
      s = s.slice(0, i);
      break;
    }
  }

  if (is_minus) {
    if (s === '') {
      return -0;
    }
    if (-Number(s) < MIN_NUM) {
      return MIN_NUM;
    } else {
      return -Number(s);
    }
  } else {
    if (s === '') {
      return 0;
    }
    if (Number(s) > MAX_NUM) {
      return MAX_NUM;
    } else {
      return Number(s);
    }
  }
};

testFn(myAtoi, '解法 1');
