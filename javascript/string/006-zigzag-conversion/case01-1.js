const testFn = require('./test');

/**
解法 1-1
  性能估计介于解法 1 与解法 2 之间

思路
  基于解法 1，有了借助转换矩阵的想法：N => Z
  实际发现，无论是转换前的矩阵，还是转换后的矩阵，有一维度的计算比较复杂
  x = n;
  numRows = n;
  unit = 2*n - 2;
  leng = str.length;
  if(leng % unit == 0){
    y = Math.floor(leng/unit) * (numRows - 1);
  } else if(leng % unit <= numRows) {
    y = Math.floor(leng/unit) * (numRows - 1) + Math.floor((leng % unit) / numRows);
  } else {
    y = Math.floor(leng/unit) * (numRows - 1) + leng % unit - numRows + 1;
  }

  基本完成解法 1 中构想的（完整排列）输出
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows <= 1) {
    return s;
  }
  let leng = s.length;
  let ary = [];
  let step = 2 * numRows - 2;

  for (let j = 0; j < numRows; j++) {
    ary[j] = [];
    for (let i = 1; i <= leng; i++) {
      if (j < 1) {
        if ((i + 1) % 2 === 0 && (i % step) === (j + 1)) {
          ary[j][(i - 1) / 2] = s[i - 1];
        }
      } else if (j === 1) {
        if (i % 2 === 0 && (i % step === (j + 1) || i % step === 0)) {
          ary[j][i / 2 - 1] = s[i - 1];
        }
      } else {
        if (i >= 3) {
          if ((i % step === (j + 1))) {
            ary[j][Math.floor(i / step) * (numRows - 1)] = s[i - 1];
          } else if ((i % step === (step + 1 - j))) {
            ary[j][(Math.floor(i / step) * (numRows - 1) + (numRows - j - 1))] = s[i - 1];
          }
        }
      }

    }
  }

  console.log(ary);
  return ary.flat(2).join('');
};

testFn(convert, '解法 1-1');
