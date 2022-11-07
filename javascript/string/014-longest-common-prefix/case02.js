const testFn = require('./test');

/**
解法 2

思路
  相对于解法1来说，减少了一次对 strs 的循环过程，可能增加了 strs[0] 的循环次数

小结
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length < 1 || strs.length > 200) {
    return false;
  }

  let str = '';
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] && strs.slice(1).every(item => item[i] && item[i] === strs[0][i])) {
      str += strs[0][i];
    }else{
      return str;
    }
  }
  return str;
};

testFn(longestCommonPrefix, '解法 2');
