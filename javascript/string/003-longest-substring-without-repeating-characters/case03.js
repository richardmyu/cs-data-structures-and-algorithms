const testFn = require('./test');

/**
解法 3(2 的改进版)
  104ms, 90.79%
  41.5MB, 68.39%

思路
  基本同解法 2，区别在于使用数值代替数组，每次存入都进行长度判断，即只存入最长的子串数值，减少了内存开销，同时也减少了一次数组循环的时间；

 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let str = '';
  let subLeng = 0;
  let leng = s.length;

  if (!leng) {
    return 0;
  }

  for (let i = 0; i < leng; i++) {
    if (!str.includes(s[i])) {
      str = str + s[i];
    } else {

      // 只存入最长的子串的长度
      subLeng = str.length > subLeng ? str.length : subLeng;
      str = s.slice(s.slice(0, i).lastIndexOf(s[i]) + 1, i + 1);
    }
  }

  subLeng = str.length > subLeng ? str.length : subLeng;
  return subLeng;
};

testFn(lengthOfLongestSubstring,'解法 3');
