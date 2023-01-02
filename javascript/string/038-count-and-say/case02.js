const testFn = require('./test');

/**
解法 2

思路
  3 年前的，记录一下

小结
 */
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  let ary = ['1', '11', '21', '1211', '111221'];

  if (n < 1) {
    return 0;
  }

  if (n <= 5) {
    return ary[n - 1];
  }

  if (n > 5) {
    for (let i = 5; i < n; i++) {
      ary[i] = fn(ary[i - 1]);
    }
  }

  return ary[n - 1];
};

const fn = function (str) {
  let reg = /(1+|2+|3+|4+|5+|6+|7+|8+|9+)/g;
  let newStr = '';
  str = str.match(reg);
  str = str.map(item => '' + item.length + item[0]);
  str.forEach(item => (newStr = newStr + item));

  return newStr;
};

testFn(countAndSay, '解法 2');
