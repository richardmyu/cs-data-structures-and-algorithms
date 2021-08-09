const testFn = require("./test");

/**
解法 1
  76ms, 98.97%
  40.4MB, 27.80%

思路

 */

/**
* @param {string} s
* @param {string} p
* @return {boolean}
*/
var isMatch = function (s, p) {
  // 不含通配符和字量符，长度一样再比较字符；
  if (!p.includes('.') && !p.includes('*')) {
    return s.length === p.length ? s === p : false;
  }
  // 错误模式
  if (p[0] === '*') {
    return false;
  }

  sLeng = s.length;
  pLeng = p.length;
  nIndex = 0;

  outs:
  for (let i = 0; i < sLeng; i++) {
    for (let j = 0; j < pLeng; j++) {
      // console.log('000', s, s[i], p, p[j]);
      // 如果字符相同，或者遇到通配符，跳出本轮循环，在外循环中进行下一位比较
      if (p[j] === s[i] || p[j] === '.') {
        // console.log('111', s[i], p[j]);
        nIndex = j + 1;
        continue outs;
      }
    }
    // console.log('222', s[i], p[nIndex]);
    if (s[i] === p[nIndex] || p[nIndex] === '.' || p[nIndex] === '*') {
      // console.log('333', s[i], p[nIndex]);
      nIndex++;
      continue;
    } else {
      return false;
    }
  }
  return true;
};

testFn(isMatch, '解法 1')
