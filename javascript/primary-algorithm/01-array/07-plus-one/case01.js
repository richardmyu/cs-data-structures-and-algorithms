const testFn = require('./test');

/**
解法 1

思路
  BigInt

小结
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  if (!Array.isArray(digits)) {
    return;
  }
  return String(BigInt(digits.join('')) + BigInt(1)).split('').map(item=>Number(item));
};

testFn(plusOne, '解法 1');
