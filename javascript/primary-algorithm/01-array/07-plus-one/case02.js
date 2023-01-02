const testFn = require('./test');

/**
解法 2

思路
  for

小结
 */

/**
 * @param {array} digits
 * @return {array}
 */
const plusOne = function (digits) {
  if (!Array.isArray(digits)) {
    return;
  }

  let r = [];
  let leng = digits.length - 1;
  let flag = false;

  for (let i = leng; i >= 0; i--) {
    if (i === leng && leng === 0) {
      if (digits[i] === 9) {
        r.unshift(0);
        r.unshift(1);
      } else {
        r.unshift(digits[0] + 1);
      }
    } else if (i === leng && leng > 0) {
      if (digits[i] === 9) {
        r.unshift(0);
        flag = true;
      } else {
        r.unshift(digits[i] + 1);
        flag = false;
      }
    } else if (i !== 0) {
      if (flag) {
        if (digits[i] === 9) {
          r.unshift(0);
          flag = true;
        } else {
          r.unshift(digits[i] + 1);
          flag = false;
        }
      } else {
        r.unshift(digits[i]);
        flag = false;
      }
    } else {
      if (flag) {
        if (digits[i] === 9) {
          r.unshift(0);
          r.unshift(1);
        } else {
          r.unshift(digits[i] + 1);
        }
      } else {
        r.unshift(digits[i]);
      }
    }
  }

  return r;
};

testFn(plusOne, '解法 2');
