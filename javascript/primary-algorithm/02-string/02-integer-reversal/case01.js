const testFn = require('./test');

/**
解法 1
  72ms, 91.02%
  43MB, 5.00%

思路

小结
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let r = 0;
  if (x < 0) {
    r = Number(String(x).slice(1).split('').reverse().join('')) * -1;
    r = r >= (Math.pow(-2, 31)) ? r : 0;
  } else {
    r = Number(String(x).split('').reverse().join(''));
    r = r <= (Math.pow(2, 31) - 1) ? r : 0;
  }
  return r;
};

testFn(reverse, '解法 1');
