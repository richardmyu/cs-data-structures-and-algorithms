const isPalindromeStr = require("./tool");
const { longP } = require("./test");

/**
解法 2
  2800ms, 11.5%
  44MB, 51.44%

思路
  以正则匹配出所有的以同一字符开头结尾的子串，然后依次判断是否为回文字符，并返回最长回文子串
 */

// TODO: 待完成
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let leng = s.length;
  let str = "";
  for (let i = 0; i < leng; i++) {
    // let reg = new RegExp(s[i] + "[^" + s[i] + "]*" + s[i]);
    let reg = new RegExp(s[i] + "[a-zA-Z0-9]*" + s[i], "g");
    // console.log(reg.exec(s));
    console.log(s.match(reg));
    let result = s.match(reg)[0];
    if (isPalindromeStr(result)) {
      str = str.length > result.length ? str : result;
    }
  }
  return str;
};

// console.log(longestPalindrome("bb"));
// console.log(longestPalindrome("bbv"));
console.log(longestPalindrome("bbvvbb"));
// console.log(longestPalindrome("bacbcabaab"));

// longP(longestPalindrome, "解法 2");
