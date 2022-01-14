const testFn = require('./test');

/**
解法 2
  104ms, 90.81%
  41.9MB, 60.68%

思路
  用 str 拼接每一个不重复的字符，当遇到重复字符，将已拼接的子串 str 视为某一个不重复子串，将子串长度存入数组 ary，同时更新 str（将重复前的子串后移一位，末尾并上当前重复字符，构成新的不重复子串）

小结
  1.使用了单循环，再有一次数组循环；
  2.开辟了一个数组和一个字符串空间，内存消耗也大；
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let str = '';
  let ary = [];
  let leng = s.length;

  if (!leng) {
    return 0;
  }

  for (let i = 0; i < leng; i++) {
    if (!str.includes(s[i])) {
      str = str + s[i];
    } else {
      ary.push(str.length);

      // s.slice(0, i).lastIndexOf(s[i]) 找出与当前字符重复的字符的索引
      // abca(i) ----> bca(i)
      str = s.slice(s.slice(0, i).lastIndexOf(s[i]) + 1, i + 1);
    }
  }

  // 避免遗漏全部不重复的字符串或子串
  //   1.字符串自身就是不重复的最长子串
  //   2.字符串的后面部分不重复
  ary.push(str.length);
  return Math.max(...ary);
};

testFn(lengthOfLongestSubstring, '解法 2');
