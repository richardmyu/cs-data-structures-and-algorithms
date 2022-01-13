const testFn = require('./test');

/**
解法 1
  88ms, 56.38%
  39.6MB, 84.91%

思路
  使用 BigInt，严格来说，是不行的

小结
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  let num = BigInt(0);
  let leng = num2.length - 1;
  for (let i = leng; i >= 0; i--) {
    let mul = BigInt(1);
    if (leng < String(Number.MAX_SAFE_INTEGER).length) {
      mul = BigInt(Math.pow(10, leng - i));
    } else {
      let intMul = Math.floor((leng - i) / 15);
      let floatMul = (leng - i) % 15;
      for (let j = 0; j < intMul; j++) {
        mul *= BigInt(Math.pow(10, 15));
      }
      mul *= BigInt(Math.pow(10, floatMul));
    }
    num = BigInt(num) + BigInt(num1) * BigInt(num2[i]) * mul;

  }
  return num.toString();
};

testFn(multiply, '解法 1');
