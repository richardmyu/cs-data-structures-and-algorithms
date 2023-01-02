const testFn = require('./test');

/**
解法 1

思路
  耗时


小结
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (!t.includes(s[i])) {
      return false;
    } else {
      let reg = new RegExp(s[i], 'g');
      let a = s.match(reg) || [];
      let b = t.match(reg) || [];

      if (a.length !== b.length) {
        return false;
      }
    }
  }

  return true;
};

testFn(isAnagram, '解法 1');
