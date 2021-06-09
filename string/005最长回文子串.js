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
  let lastIndex = 0;
  for (let i = 0; i < leng; i++) {
    lastIndex = s.lastIndexOf(s[i]);
    if (i !== lastIndex) {
      if (subLeng()){

      }
    }
  }
};

var isPalindromeStr = function (s) {
  let leng = s.length;
  for (let i = 0; i < leng; i++) {
    if (leng === 1) {
      return true;
    }

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

// console.log(palindromeStr("cb"));
// console.log(palindromeStr("bb"));
// console.log(palindromeStr("bbc"));
// console.log(palindromeStr("bcb"));
// console.log(palindromeStr("bccb"));
// console.log(palindromeStr("bcbb"));
// console.log(palindromeStr("bcaacb"));
// console.log(palindromeStr("bcaacc"));
// console.log(palindromeStr("bcabacb"));
// console.log(palindromeStr("bcacbacb"));
