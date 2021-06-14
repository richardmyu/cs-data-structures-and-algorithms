const cv = require("./test");

/**
解法 2
  332ms, 5.02%
  41.7MB, 81.38%

思路
  基于解法 1，对数组进行了修改，可以看到时间节省了很多，然而依旧不是一个理想的结果。

小结
  耗时很长，跟双循环有很大关系，下一步的优化，应该在于解决双循环的问题，更进一步，可能不需要数组，而是调整原字符串的位置。

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
    ary[j] = "";
    for (let i = 1; i <= leng; i++) {
      if (j < 1) {
        ary[j] += ((i % step) === (j + 1)) ? s[i - 1] : "";
      } else if (j === 1) {
        ary[j] += (i % step === (j + 1) || i % step === 0) ? s[i - 1] : "";
      } else {
        ary[j] += (i % step === (j + 1) || i % step === (step + 1 - j)) ? s[i - 1] : "";
      }
    }
  }

  return ary.flat().join("");
};

cv(convert);
