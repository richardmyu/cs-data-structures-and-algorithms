const testFn = require('./test');

/**
解法 1

思路
  解析 numRows 分别为 3，4 时的分布规律，并推广到一般情况

  numRows = 3 step = 2*numRows - 2 = 4
    ary[0].push(i % step === 1)
    ary[1].push(i % step === 2 || i % step=== 0)
    ary[2].push(i % step === 3)

  numRows = 4 step = 2*numRows - 2 = 6
    ary[0].push(i % step === 1)
    ary[1].push(i % step === 2 || i % step === 0)
    ary[2].push(i % step === 3 || i % step === 5)
    ary[3].push(i % step === 4)

  numRows = 6 step = 2*numRows - 2 = 10
    ary[0].push(i % step === 1)
    ary[1].push(i % step === 2 || i % step === 0)
    ary[2].push(i % step === 3 || i % step === 9)
    ary[3].push(i % step === 4 || i % step === 8)
    ary[4].push(i % step === 5 || i % step === 7)
    ary[5].push(i % step === 6)

小结
  从结果来看，很不理想。重新思考，认为本题的（将原字符串看作一维矩阵）本质就是通过中间矩阵（Z形）将一个一维矩阵进行转换，得到一个新的一维矩阵。
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
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
        ary[j][i - 1] = ((i % step) === (j + 1)) ? s[i - 1] : null;
      } else if (j === 1) {
        ary[j][i - 1] = (i % step === (j + 1) || i % step === 0) ? s[i - 1] : null;
      } else {
        ary[j][i - 1] = (i % step === (j + 1) || i % step === (step + 1 - j)) ? s[i - 1] : null;
      }
    }
  }

  return ary.flat(2).join('');
};

testFn(convert, '解法 1');
