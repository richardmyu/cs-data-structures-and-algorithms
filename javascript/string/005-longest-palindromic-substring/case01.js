const isPalindromeStr = require('./tool');
const { longP } = require('./test');

/**
解法 1
  2800ms, 11.5%
  44MB, 51.44%

思路
  主函数通过 `lastIndexOf` 方法，获取到所有以 s[i] 开始结尾的子串，然后通过回文函数（isPalindromeStr）判断

备注
  优化回文字符判断函数后：
  2800ms, 12% / 1308ms, 30.63% / 1196ms, 36.34%
  44MB, 51% / 44MB, 49.83% / 44.5MB, 42.37%
  时间少了一半以上
 */

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let leng = s.length;
  let lastIndex = 0;
  let str = '';

  for (let i = 0; i < leng; i++) {
    lastIndex = s.lastIndexOf(s[i]);

    if (lastIndex !== -1 && i !== lastIndex) {

      if (isPalindromeStr(s.slice(i + 1, lastIndex))) {
        // 首尾同字符，且内涵字符为回文字符
        str = s.slice(i, lastIndex + 1).length > str.length ? s.slice(i, lastIndex + 1) : str;
      } else if (s.slice(i + 1, lastIndex).includes(s[i])) {
        // 首尾同字符，但内涵字符不为回文字符，且内涵字符中有与首字符相同的字符
        // 遍历每一个可以与首字符构成首尾相同字符的子串
        while (s.slice(i + 1, lastIndex).includes(s[i])) {
          lastIndex = s.slice(0, lastIndex).lastIndexOf(s[i]);

          // 若子串是回文字符，则存入 str
          // 若子串不是回文字符，则首字符不是回文子串的成员，不作处理
          if (isPalindromeStr(s.slice(i + 1, lastIndex))) {
            str = s.slice(i, lastIndex + 1).length > str.length ? s.slice(i, lastIndex + 1) : str;
          }
        }
      } else {
        // 首尾同字符，但内涵字符不为回文字符，且内涵字符中也没有与首字符相同的字符
        str = str.length >= 1 ? str : s[i];
      }
    } else {
      str = str.length >= 1 ? str : s[i];
    }
  }

  return str;
};

longP(longestPalindrome, '解法 1');
