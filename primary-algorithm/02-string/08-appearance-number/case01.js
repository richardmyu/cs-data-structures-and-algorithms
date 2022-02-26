const testFn = require('./test');

/**
解法 1

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
  console.log('--', n, r);
  // for (let i = 0; i < r.length; i++) {
  //   console.log('--for', r[i]);
  //   if (r[i + 1] && r[i] !== r[i + 1]) {
  //     s += '1' + r[i];
  //   } else if (r[i + 1] && r[i] === r[i + 1]) {
  //     let count = 0;
  //     for (let j = i + 1; j < r.length; j++) {
  //       if (r[j] === r[i]) {
  //         count++;
  //       } else {
  //         break;
  //       }
  //     }
  //     s += count + r[i];
  //     i += count;
  //   } else {
  //     s += '1' + r[i];
  //   }
  // }
  return s;
};

testFn(countAndSay, '解法 1');
