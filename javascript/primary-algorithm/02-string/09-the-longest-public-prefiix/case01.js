const testFn = require('./test');

/**
解法 1
  56ms, 98.23%
  41.1MB, 30.77%

思路

小结
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let min_leng = Math.min(...strs.map(itme => itme.length));
  let r = '';

  for (let i = 0; i < min_leng; i++) {
    if (strs.every(itme => itme[i] === strs[0][i])) {
      r += strs[0][i];
    } else {
      break;
    }
  }

  return r;
};

testFn(longestCommonPrefix, '解法 1');
