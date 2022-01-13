const testFn = require('./test');

/**
解法 1
  76ms, 98.97%
  40.4MB, 27.80%

思路
  借用 parseFloat，再加一个范围判断；
  ---
  问题是 parseFloat 会解析 e， 而问题没有要求解析 e
  只能单个判断了
 */
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MINNUM = (-2) ** 31;
  const MAXNUM = 2 ** 31 - 1;
  let str = s.trim(),
    leng = str.length,
    substr = str.slice(),
    num = 0;

  for (let i = 0; i < leng; i++) {
    if (!/[0-9.+-]/.test(str[i])) {
      substr = str.slice(0, i);
      break;
    }
  }

  for (let j of ['+', '-', '.']) {
    // 多一层循环，用以处理多符号中不同符号的情况
    for (let z of ['+', '-', '.']) {
      // 单个符号出现多个，
      if (substr.indexOf(j) !== substr.lastIndexOf(j)) {
        let secdotIndex = substr.slice(substr.indexOf(j) + 1).indexOf(j) + substr.indexOf(j) + 1;
        substr = substr.slice(0, secdotIndex);
      }
      // + - 出现在非首位
      if (j !== '.' && substr[0] !== j && substr.includes(j)) {
        substr = substr.slice(0, substr.indexOf(j));
      }
    }
  }

  // 单符号处理
  substr = substr === '+' ? '' : substr === '-' ? '' : substr === '.' ? '' : substr;

  num = Number(substr);
  // 范围处理
  num = num > MAXNUM ? MAXNUM : num < MINNUM ? MINNUM : num;

  return num;
  // return Number(substr) > MAXNUM ? MAXNUM : Number(substr) < MINNUM ? MINNUM : Number(substr);
};

testFn(myAtoi, '解法 1');
