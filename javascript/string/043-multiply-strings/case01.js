const testFn = require("./test");

/**
解法 1

思路

小结
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  let num = BigInt(0);
  let mul = BigInt(0);
  let leng = num2.length - 1;
  for (let i = leng; i >= 0; i--) {
    if (leng < String(Number.MAX_SAFE_INTEGER).length) {
      console.log('-11-');
      mul = BigInt(Math.pow(10, leng - i));
    } else {
      console.log('-22-');
      let intMul = Math.ceil((leng - i) / 16);
      let floatMul = (leng - i) % 15;
      console.log('-22 ', intMul, floatMul);
      for (let j = 0; j < intMul; j++) {
        mul += BigInt(Math.pow(10, 15));
      }
      mul += BigInt(Math.pow(10, floatMul));
    }
    console.log('===', mul);
    num = BigInt(num) + BigInt(num1) * BigInt(num2[i]) * mul;

  }
  console.log(num);
  return num.toString();
};

testFn(multiply, "解法 1");
