const testFn = require('./test');

/**
解法 1

思路
  两年前的，想不起来了

小结
  1.使用了双循环，时间复杂度比较大；
  2.开辟了一个数组和一个字符串空间，内存消耗也大；
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let ary = [];
  let str = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      str = s.slice(i, j);

      if (str.includes(s[j])) {
        ary[i] = s.slice(i, j);
        break;
      } else {
        if (j === (s.length - 1)) {
          ary[i] = s.slice(i, s.length);
        }

        continue;
      }
    }
  }

  str = ary.sort(function (a, b) {
    return b.length - a.length;
  })[0];

  return str ? str.length : s.length;
};

testFn(lengthOfLongestSubstring, '解法 1');
