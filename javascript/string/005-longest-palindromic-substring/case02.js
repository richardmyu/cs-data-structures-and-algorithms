const isPalindromeStr = require("./tool");
const { longP } = require("./test");

/**
解法 2
  8468ms, 5.01%
  44.2MB, 41.60%

思路
  以正则匹配出所有的以同一字符开头结尾的子串，然后依次判断是否为回文字符，并返回最长回文子串
  ---
  若以正则来匹配，可能因为回溯的原因，导致时间

小结
  使用双循环后，代码是简洁了，但时间复杂度蹭蹭地上涨了。。。

 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let leng = s.length;
  let str = "";
  if (leng <= 1) {
    return s;
  }
  for (let i = 0; i < leng; i++) {
    for (let j = i + 1; j < leng; j++) {
      if (s[i] === s[j]) {
        subS = s.slice(i, j + 1)
        if (isPalindromeStr(subS)) {
          str = str.length >= subS.length ? str : subS;
        }
      }
    }
  }
  if (leng !== 0 && str.length === 0) {
    str = s[0];
  }

  return str;
};

longP(longestPalindrome, "解法 2");
