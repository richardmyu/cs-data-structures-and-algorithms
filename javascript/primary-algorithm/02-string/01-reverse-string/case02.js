const testFn = require('./test');

/**
解法 2

思路
  for + 收尾调换（区分奇/偶数长度）

小结
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  let leng = s.length;
  if (leng % 2 === 0) {
    for (let i = 0; i < Math.floor(leng / 2); i++) {
      let a = s[i];
      let b = s[leng - 1 - i];
      s[leng - 1 - i] = a;
      s[i] = b;
    }
  } else {
    for (let i = 0; i <= Math.floor(leng / 2); i++) {
      let a = s[i];
      let b = s[leng - 1 - i];
      s[leng - 1 - i] = a;
      s[i] = b;
    }
  }
  return s;
};

testFn(reverseString, '解法 2');
