/*
给你一个字符串 s，找到 s 中最长的回文子串。



示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：

输入：s = "cbbd"
输出："bb"

示例 3：

输入：s = "a"
输出："a"

示例 4：

输入：s = "ac"
输出："a"


提示：

1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/******************
 *     解法 1     *
 *   200ms, 20%   *
 *   46.2MB, 7%   *
 ******************/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let leng = s.length;
  let ary = [];
  for (let i = 0; i < leng; i++) {
    if (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
      if (s[i + 1] === s[s.lastIndexOf(s[i]) - 1]) {

      }
    }
  }
};

console.log(longestPalindrome("abcbc"));
