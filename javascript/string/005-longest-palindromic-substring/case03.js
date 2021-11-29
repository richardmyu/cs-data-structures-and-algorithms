const isPalindromeStr = require("./tool");
const { longP } = require("./test");

/**
解法 3

思路
  还是打算试一下正则


 */

// TODO: 待完成
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
