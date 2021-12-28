const testFn = require("./test");

/**
解法 1
  108ms, 6.36%
  43.8MB, 4.99%

思路
  逐次消元法（依次消除成对的符号）

小结
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (s.length < 1 || s.length % 2) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    // s.indexOf("()") !== -1
    if (s[i] === '(' && s[i + 1] === ')') {
      s = s.replace('()', '');
      // s = s.slice(0, i) + s.slice(i + 2);
      i -= 2;
    }
    if (s[i] === '[' && s[i + 1] === ']') {
      s = s.replace('[]', '');
      i -= 2;
    }
    if (s[i] === '{' && s[i + 1] === '}') {
      s = s.replace('{}', '');
      i -= 2;
    }
  }
  return s.length === 0;
};

testFn(isValid, "解法 1");
