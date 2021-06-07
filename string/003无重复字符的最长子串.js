/*
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。



示例 1:

输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

示例 4:

输入: s = ""
输出: 0


提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/******************
 *     解法 1     *
 *   200ms, 20%   *
 *   46.2MB, 7%   *
 ******************/
// 1.使用了双循环，时间复杂度比较大；
// 2.开辟了一个数组和一个字符串空间，内存消耗也大；
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var ary = [];
  var str = '';
  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j < s.length; j++) {
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


/******************
 *     解法 2     *
 *   104ms, 90.81%   *
 *   41.9MB, 60.68%   *
 ******************/
// 1.使用了单循环，再有一次数组循环；
// 2.开辟了一个数组和一个字符串空间，内存消耗也大；
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
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
      str = s.slice(s.slice(0, i).lastIndexOf(s[i]) + 1, i + 1);
    }
  }
  ary.push(str.length);
  return Math.max(...ary);
};

/***
 * test
 */
const assert = require('assert').strict;

assert.deepStrictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
assert.deepStrictEqual(lengthOfLongestSubstring("bbbb"), 1);
assert.deepStrictEqual(lengthOfLongestSubstring("pwwkew"), 3);
assert.deepStrictEqual(lengthOfLongestSubstring(""), 0);
assert.deepStrictEqual(lengthOfLongestSubstring(" "), 1);
assert.deepStrictEqual(lengthOfLongestSubstring(" $%"), 3);
assert.deepStrictEqual(lengthOfLongestSubstring(" $% "), 3);
assert.deepStrictEqual(lengthOfLongestSubstring(" $% *&^%"), 6);
