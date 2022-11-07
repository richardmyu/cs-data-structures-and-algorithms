const testFn = require('./test');

/**
解法 1

思路

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
  let minleng = Math.min(...strs.map(item => item.length));
  for (let i = 0; i < minleng; i++) {
    if (strs.slice(1).every(item => item[i] === strs[0][i])) {
      str += strs[0][i];
    } else {
      return str;
    }
  }
  return str;
};

testFn(longestCommonPrefix, '解法 1');
