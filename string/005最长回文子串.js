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
 *   2800ms, 11.5%   *
 *   44MB, 51.44%   *
 ******************/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let leng = s.length;
  let lastIndex = 0;
  let str = "";
  for (let i = 0; i < leng; i++) {
    lastIndex = s.lastIndexOf(s[i]);
    if (lastIndex !== -1 && i !== lastIndex) {
      if (isPalindromeStr(s.slice(i + 1, lastIndex))) {
        str = s.slice(i, lastIndex + 1).length > str.length ? s.slice(i, lastIndex + 1) : str;
      } else {
        while (s.slice(i + 1, lastIndex).includes(s[i])) {
          lastIndex = s.slice(0, lastIndex).lastIndexOf(s[i]);
          if (isPalindromeStr(s.slice(i + 1, lastIndex))) {
            str = s.slice(i, lastIndex + 1).length > str.length ? s.slice(i, lastIndex + 1) : str;
          }
        }
      }
    } else {
      str = str.length >= 1 ? str : s[i];
    }
  }
  return str;
};

var isPalindromeStr = function (s) {
  let leng = s.length;
  if (leng === 0 || leng === 1) {
    return true;
  }
  for (let i = 0; i < leng; i++) {
    if (s[i] === s[leng - 1]) {
      if ((i + 1) === (leng - 1)) {
        return true;
      } else {
        return isPalindromeStr(s.slice(i + 1, leng - 1));
      }
    } else {
      return false;
    }
  }
}



/***
 * test
 */
const assert = require('assert').strict;

// assert.deepStrictEqual(isPalindromeStr(""), true);
// assert.deepStrictEqual(isPalindromeStr("bb"), true);
// assert.deepStrictEqual(isPalindromeStr("bbc"), false);
// assert.deepStrictEqual(isPalindromeStr("bcb"), true);
// assert.deepStrictEqual(isPalindromeStr("bccb"), true);
// assert.deepStrictEqual(isPalindromeStr("bcbb"), false);
// assert.deepStrictEqual(isPalindromeStr("bcaacb"), true);
// assert.deepStrictEqual(isPalindromeStr("bcaacc"), false);
// assert.deepStrictEqual(isPalindromeStr("bcabacb"), true);
// assert.deepStrictEqual(isPalindromeStr("bcacbacb"), false);

assert.deepStrictEqual(longestPalindrome("babad"), "bab");
assert.deepStrictEqual(longestPalindrome("cbbd"), "bb");
assert.deepStrictEqual(longestPalindrome("a"), "a");
assert.deepStrictEqual(longestPalindrome("ac"), "a");

assert.deepStrictEqual(longestPalindrome("cb"), "c");
assert.deepStrictEqual(longestPalindrome("bb"), "bb");
assert.deepStrictEqual(longestPalindrome("bbc"), "bb");
assert.deepStrictEqual(longestPalindrome("bcb"), "bcb");
assert.deepStrictEqual(longestPalindrome("bccb"), "bccb");
assert.deepStrictEqual(longestPalindrome("bcbb"), "bcb");
assert.deepStrictEqual(longestPalindrome("bcaacb"), "bcaacb");
assert.deepStrictEqual(longestPalindrome("bcaacc"), "caac");
assert.deepStrictEqual(longestPalindrome("bcabacb"), "bcabacb");
assert.deepStrictEqual(longestPalindrome("bcacbacb"), "bcacb");
assert.deepStrictEqual(longestPalindrome("abbcacbbabbbaca"), "abbcacbba");

assert.deepStrictEqual(longestPalindrome("dbbf"), "bb");
assert.deepStrictEqual(longestPalindrome("cdbbfc"), "bb");
assert.deepStrictEqual(longestPalindrome("bcdbbfcb"), "bb");
assert.deepStrictEqual(longestPalindrome("bccbbfcb"), "bccb");
assert.deepStrictEqual(longestPalindrome("abcdbbfcba"), "bb");
