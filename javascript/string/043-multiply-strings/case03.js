const testFn = require('./test');

/**
解法 3

思路
  基于 case02，全分组计算；

小结
  当位数过多时，同样还是存在溢出；计算时，只能使用 BigInt；
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  let str = '';
  let step = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    step = num1.length - i - 1;
    for (let j = num2.length - 1; j >= 0; j--) {
      // str = Number(num1[i]) * Number(num2[j]) + Number(str.slice(0, -step)) + str.slice(-step);
      str = BigInt(num1[i]) * BigInt(num2[j]) + BigInt(str.slice(0, -step)) + str.slice(-step);
      step++;
    }
  }
  let zero_str = str.match(/0+/g);
  if (zero_str && zero_str[0] && zero_str[0].length === str.length) {
    str = '0';
  }
  return str;
};

testFn(multiply, '解法 3');
