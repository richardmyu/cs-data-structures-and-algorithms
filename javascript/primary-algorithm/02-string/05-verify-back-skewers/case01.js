const testFn = require('./test');

/**
解法 1

思路

小结
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]{1,}/gi, '').toLocaleLowerCase();
  let leng = s.length;
  if (leng % 2 === 0) {
    for (let i = 0; i < (leng / 2); i++) {
      if (s[i] !== s[leng - 1 - i]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i <= (leng / 2); i++) {
      if (s[i] !== s[leng - 1 - i]) {
        return false;
      }
    }
  }
  return true;
};

testFn(isPalindrome, '解法 1');
