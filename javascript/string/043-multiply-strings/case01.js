const testFn = require('./test');

/**
解法 1

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

    if ((leng + 1) < String(Number.MAX_SAFE_INTEGER).length) {
      mul = BigInt(Math.pow(10, leng - i));
    } else {
      // 超过安全数值范围时，Math.pow(10, leng - i) 会溢出
      // 所以要将 leng 分组，依次计算 Math.pow，再累乘
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
