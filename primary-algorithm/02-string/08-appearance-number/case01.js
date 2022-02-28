const testFn = require('./test');

/**
解法 1
  60ms, 96.21%
  43.9MB, 9.00%

思路

小结
 */

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  if (n === 1) {
    return '1';
  }

  let s = '';
  let r = countAndSay(n - 1);

  for (let i = 0; i < r.length; i++) {
    if (r[i + 1]) {
      if (r[i] === r[i + 1]) {
        let j = i + 1;
        while (j < r.length && r[i] === r[j]) {
          j++;
        }
        console.log(j);
        s += (j - i) + r[i];
        i = j - 1;
      } else {
        s += '1' + r[i];
      }
    } else {
      s += '1' + r[i];
    }
  }

  return s;
};

testFn(countAndSay, '解法 1');
