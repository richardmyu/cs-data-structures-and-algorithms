const testFn = require('./test');

/**
解法 2

思路
  分组（小于 14位）相乘，依次拼接

小结
  分支太多，容易遗漏；
 */

// TODO: obsoleted
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
  const PRE_ZERO_REG = /^0+/;
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

  if (max_num_leng <= NUM_DIGITS && min_num_leng <= NUM_DIGITS) {
    // 都没有超过 NUM_DIGITS 位，可以简单运算
    let r = [];

    for (let i = max_num_leng - 1; i >= 0; i--) {
      r.push(Number(max_num[i]) * Number(min_num));
    }

    for (let j = 0; j < r.length; j++) {
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
      str = r[k] + Number(str.slice(0, -k)) + str.slice(-k);
    }

  } else {
    //
    let r = [];
    let max_num_ary = [];
    let min_num_ary = [];
    let max_num_int = Math.floor(max_num_leng / NUM_DIGITS); // max_num 分组的满组的组数，+1 位全组数
    let min_num_int = Math.floor(min_num_leng / NUM_DIGITS);
    let min_num_mod = min_num_leng % NUM_DIGITS; // min_num 分组的最后一组标准长度

    // 分组
    for (let m = 0; m < max_num_int; m++) {
      max_num_ary.push(max_num.slice(m * NUM_DIGITS, (m + 1) * NUM_DIGITS));
    }

    if (max_num.slice(max_num_int * NUM_DIGITS)) {
      max_num_ary.push(max_num.slice(max_num_int * NUM_DIGITS));
    }


    for (let n = 0; n < min_num_int; n++) {
      min_num_ary.push(min_num.slice(n * NUM_DIGITS, (n + 1) * NUM_DIGITS));
    }

    if (min_num.slice(min_num_int * NUM_DIGITS)) {
      min_num_ary.push(min_num.slice(min_num_int * NUM_DIGITS));
    }

    // console.log('--max', max_num_ary);
    // console.log('--min', min_num_ary);
    // 累乘
    for (let i = max_num_ary.length - 1; i >= 0; i--) {
      for (let j = max_num_ary[i].length - 1; j >= 0; j--) {
        for (let k = min_num_ary.length - 1; k >= 0; k--) {
          if (k % (min_num_int + 1) === 2) {
            r.push(Number(max_num_ary[i][j]) * Number(min_num_ary[k]) + '');
          } else {
            // NOTE: 补充丢失的前导 0
            let n = Number(max_num_ary[i][j]) * Number(min_num_ary[k]) + '';
            let n_leng = String(n).length;

            if (n_leng < NUM_DIGITS) {
              n = '0'.repeat(NUM_DIGITS - n_leng) + n;
            }

            r.push(n);
          }
        }
      }
    }
    // console.log('--r', r);

    // 累加
    for (let l = 0; l < r.length; l++) {
      let step = 0;
      let l_mod = min_num_mod === 0 ? (l % min_num_int) : (l % (min_num_int + 1));
      let min_num_count = min_num_mod === 0 ? Math.floor(l / min_num_int) : Math.floor(l / (min_num_int + 1));

      if (l_mod === 0) {
        // 偏移一位
        step = min_num_count;
      } else if (l_mod === 1) {
        // 偏移 min_num_mod
        step = min_num_count + min_num_mod;
      } else {
        // 偏移 NUM_DIGITS*
        step = min_num_count + min_num_mod + NUM_DIGITS * (l_mod - 1);
      }

      // NOTE: BigInt 再次丢失前导 0，需要对使用 BigInt 的地方进行判断处理
      let str_slice_num = str.slice(0, -step);

      // r[l] 字符少于 str.slice(0, -step)，r[l] 有没有前导 0 均没有影响
      let n = BigInt(r[l]) + BigInt(str_slice_num) + '';

      if (r[l].length < str_slice_num.length) {
        if (PRE_ZERO_REG.test(str_slice_num)) {
          if (str_slice_num.length > n.length) {
            str = '0'.repeat(str_slice_num.length - n.length) + n + str.slice(-step);
          } else {
            str = n + str.slice(-step);
          }
        } else {
          str = n + str.slice(-step);
        }
      } else {
        // r[l] 字符多于 str.slice(0, -step)，是否添加及添加多少前导 0，取决于 r[l]
        if (PRE_ZERO_REG.test(r[l])) {
          if (r[l].length > n.length) {
            str = '0'.repeat(r[l].length - n.length) + n + str.slice(-step);
          } else {
            str = n + str.slice(-step);
          }
        } else {
          str = n + str.slice(-step);
        }
      }
    }
  }

  if (str.split('').every(item => item === '0')) {
    str = '0';
  }

  return str;
};

testFn(multiply, '解法 2');
