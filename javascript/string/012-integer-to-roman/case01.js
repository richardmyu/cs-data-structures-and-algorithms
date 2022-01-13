const testFn = require('./test');

/**
解法 1
  136ms, 62.17%
  45.2MB, 24.77%

思路
  特殊值直接替换，其他数值分情况重复

小结
  思路很清晰明确，就是代码比较多；二来耗内存；
 */

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  if (num < 1 || num > 3999) {
    return false;
  }
  if (/[^0-9]+/.test(String(num))) {
    return false;
  }
  let s = '';
  let a = Math.floor(num / 1000);
  let b = Math.floor((num % 1000) / 100);
  let c = Math.floor((num % 100) / 10);
  let d = Math.floor(num % 10);
  const switchChar = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };
  if (a) {
    if (switchChar.hasOwnProperty(a * 1000)) {
      s += switchChar[a * 1000 + ''];
    } else {
      s += switchChar['1000'].repeat(a);
    }
  }
  if (b) {
    if (switchChar.hasOwnProperty(b * 100)) {
      s += switchChar[b * 100 + ''];
    } else {
      if (b < 4) {
        s += switchChar['100'].repeat(b);
      } else {
        s += switchChar['500'] + switchChar['100'].repeat(b - 5);
      }
    }
  }
  if (c) {
    if (switchChar.hasOwnProperty(c * 10)) {
      s += switchChar[c * 10 + ''];
    } else {
      if (c < 4) {
        s += switchChar['10'].repeat(c);
      } else {
        s += switchChar['50'] + switchChar['10'].repeat(c - 5);
      }
    }
  }
  if (d) {
    if (switchChar.hasOwnProperty(d)) {
      s += switchChar[d + ''];
    } else {
      if (d < 4) {
        s += switchChar['1'].repeat(d);
      } else {
        s += switchChar['5'] + switchChar['1'].repeat(d - 5);
      }
    }
  }
  return s;
};

testFn(intToRoman, '解法 1');
