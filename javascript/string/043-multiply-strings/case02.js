const testFn = require('./test');

/**
解法 2

思路
  分段（小于 14位）相乘，依次拼接

小结
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  let max_num, min_num, max_num_leng, min_num_leng;
  let str = '';

  if (num1.length >= num2.length) {
    max_num = num1;
    min_num = num2;
  } else {
    max_num = num2;
    min_num = num1;
  }

  max_num_leng = max_num.length;
  min_num_leng = min_num.length;

  if (max_num_leng <= 14 && min_num_leng <= 14) {
    let r = [];

    for (let i = max_num_leng - 1; i >= 0; i--) {
      r.push(Number(max_num[i]) * Number(min_num));
    }

    for (let j = 0; j < r.length; j++) {
      str = r[j] + Number(str.slice(0, -j)) + str.slice(-j);
    }
  } else if (max_num_leng > 14 && min_num_leng <= 14) {
    let max_num_ary = [];
    let max_num_page = Math.floor(max_num_leng / 14);

    for (let i = 0; i < max_num_page; i++) {
      max_num_ary.push(max_num.slice(i * 14, (i + 1) * 14));
    }

    max_num_ary.push(max_num.slice(max_num_page * 14));
  } else {
    //
  }
  return str;
};

testFn(multiply, '解法 2');
