const testFn = require('./test');

/**
解法 1

思路

小结
 */

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const switchChar = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  };

  let leng = s.length;
  let num = 0;

  for (let i = 0; i < leng; i++) {
    if (switchChar.hasOwnProperty(s[i] + s[i + 1])) {
      num += switchChar[s[i] + s[i + 1]];
      i += 1;
      continue;
    } else {
      num += switchChar[s[i]];
    }
  }

  return num;
};

testFn(romanToInt, '解法 1');
