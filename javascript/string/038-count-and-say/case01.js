const testFn = require('./test');

/**
解法 1
  124ms, 6.00%
  46.4MB, 5.01%

思路
  构造 数组对象 结构，存储读取字符及其个数等数据；
  再拼接成字符串输出；

小结
 */

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  if (n < 0 || n > 30) {
    return;
  }
  let str = '';
  if (n === 1) {
    str = '1';
  }
  if (n >= 2) {
    let s = countAndSay(n - 1);
    let ary = [];
    for (let i = 0; i < s.length; i++) {
      let obj = {};
      let prevItem = {};
      if (ary.slice().reverse().some(item => {
        item.item.name === s[i] ? prevItem = item : {};
        return item.item.name === s[i];
      }) && (s[i] === s[i - 1])) {
        prevItem.item.count += 1;
      } else {
        obj.item = {};
        obj.item.name = s[i];
        obj.item.count = 1;
      }

      if (Object.keys(obj).length !== 0) {
        ary.push(obj);
      }
    }
    for (let i = 0; i < ary.length; i++) {
      for (let [key, value] of Object.entries(ary[i])) {
        str += value.count + value.name;
      }
    }

  }
  return str;
};

testFn(countAndSay, '解法 1');
