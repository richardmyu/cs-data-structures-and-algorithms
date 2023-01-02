const testFn = require('./test');

/**
解法 2

思路
  重排序，回避的对 Unicode 字符的处理


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

  let a = s.split('').sort().join('');
  let b = t.split('').sort().join('');

  if (a === b) {
    return true;
  } else {
    return false;
  }
};

testFn(isAnagram, '解法 2');
