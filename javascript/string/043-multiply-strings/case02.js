const testFn = require('./test');

/**
解法 2

思路
  分组（小于 14位）相乘，依次拼接

小结
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  // 以 14 位为基准，是因为 14 位乘 1 位数，结果不会超过 15 位，
  // 而 JavaScript 安全数为 Number.MAX_SAFE_INTEGER = 900,719,925,474,099,1
  // 共计 16 位，但却不是 16 位的最大数，若计算值放松到 16 位，很有可能会溢出
  const NUM_DIGITS = 14;
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

  // TODO: 么有处理 '0000' ---> '0' 这种情况
  if (max_num_leng <= NUM_DIGITS && min_num_leng <= NUM_DIGITS) {
    // 都没有超过 NUM_DIGITS 位，可以简单运算
    let r = [];

    for (let i = max_num_leng - 1; i >= 0; i--) {
      r.push(Number(max_num[i]) * Number(min_num));
    }

    for (let j = 0; j < r.length; j++) {
      if (r[j] === 0) {
        continue;
      }
      // 错位相加，再拼接
      str = r[j] + Number(str.slice(0, -j)) + str.slice(-j);
    }
  } else if (max_num_leng > NUM_DIGITS && min_num_leng <= NUM_DIGITS) {
    // 有一个超出 NUM_DIGITS 位，需要分组计算
    let max_num_ary = [];
    let r = [];
    let max_num_int = Math.floor(max_num_leng / NUM_DIGITS);

    // 按 NUM_DIGITS 位分组
    for (let i = 0; i < max_num_int; i++) {
      max_num_ary.push(max_num.slice(i * NUM_DIGITS, (i + 1) * NUM_DIGITS));
    }
    max_num_ary.push(max_num.slice(max_num_int * NUM_DIGITS));

    // 累乘
    for (let j = max_num_ary.length - 1; j >= 0; j--) {
      for (let k = max_num_ary[j].length - 1; k >= 0; k--) {
        r.push(Number(max_num_ary[j][k]) * Number(min_num));
      }
    }

    // “累加”
    for (let k = 0; k < r.length; k++) {
      if (r[k] === 0) {
        continue;
      }
      str = r[k] + Number(str.slice(0, -k)) + str.slice(-k);
    }

  } else {
    //
    let r = [];
    let max_num_ary = [];
    let min_num_ary = [];
    let max_num_int = Math.floor(max_num_leng / NUM_DIGITS); // max_num 分组的满组的组数，+1 位全组数
    let min_num_int = Math.floor(min_num_leng / NUM_DIGITS);

    // 分组
    for (let m = 0; m < max_num_int; m++) {
      max_num_ary.push(max_num.slice(m * NUM_DIGITS, (m + 1) * NUM_DIGITS));
    }
    max_num_ary.push(max_num.slice(max_num_int * NUM_DIGITS));

    for (let n = 0; n < min_num_int; n++) {
      min_num_ary.push(min_num.slice(n * NUM_DIGITS, (n + 1) * NUM_DIGITS));
    }
    min_num_ary.push(min_num.slice(min_num_int * NUM_DIGITS));

    // 累乘
    for (let i = max_num_ary.length - 1; i >= 0; i--) {
      for (let j = max_num_ary[i].length - 1; j >= 0; j--) {
        for (let k = min_num_ary.length - 1; k >= 0; k--) {
          r.push(Number(max_num_ary[i][j]) * Number(min_num_ary[k]));
        }
      }
    }

    // 累加
    for (let l = 0; l < r.length; l++) {
      let step = 0;
      if (r[l] === 0) {
        continue;
      }
      if ((l % (min_num_int + 1)) === 0) {
        step = l / (min_num_int + 1);
      } else {
        step = Math.floor(l / (min_num_int + 1)) + min_num_leng % NUM_DIGITS;
      }
      str = BigInt(r[l]) + BigInt(str.slice(0, -step)) + str.slice(-step);
    }
  }
  return str;
};

testFn(multiply, '解法 2');
