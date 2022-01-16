const testFn = require('./test');

/**
解法 3

思路
  基于 case02，全分组计算；

小结
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
    for (let j = num2.length - 1; j >= 0; j--) {
      console.log('--', str);
      console.log(step);
      console.log(Number(num1[i]) * Number(num2[j]));
      console.log(Number(str.slice(0, step)));
      console.log(str.slice(step - 1));
      str = Number(num1[i]) * Number(num2[j]) + Number(str.slice(0, step - 1)) + str.slice(step - 1);
      step++;
      console.log('--', str);
      console.log();
    }
  }
  console.log('--str', str);
  return str;
};

testFn(multiply, '解法 3');
