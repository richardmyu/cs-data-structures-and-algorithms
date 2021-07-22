const testFn = require("./test");

/**
解法 1


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
    if (substr.indexOf(j) !== substr.lastIndexOf(j)) {
      secdotIndex = substr.slice(substr.indexOf(j) + 1).indexOf(j) + substr.indexOf(j) + 1;
      substr = substr.slice(0, secdotIndex)
    }
  }
  num = Number(substr);
  num = num > MAXNUM ? MAXNUM : num < MINNUM ? MINNUM : num;
  return num;
};

testFn(myAtoi, '解法 1')
