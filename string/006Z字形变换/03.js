const cv = require("./test");

/**
解法 2
  332ms, 5.02%
  41.7MB, 81.38%

思路
  基于解法 1，对数组进行了修改，可以看到时间节省了很多，然而依旧不是一个理想的结果。

小结
  耗时很长，跟双循环有很大关系，下一步的优化，应该在于解决双循环的问题，更进一步，可能不需要数组，而是调整原字符串的位置。于是抛弃解法 1 中的点，重新以其索引排序：

  numRows = 3
  转换后：
    1，5，9，13，2，4，6，8，10，12，14，3，7，11

  numRows = 4
  转换后：
    1，7，13，2，6，8，12，14，3，5，9，11，4，10

  numRows = 6
  转换后：
    1，11，2，10，12，3，9，13，4，8，14，5，7，6

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
  let step = 2 * numRows - 2;
  let str = "";

  for (let i = 1; i <= leng; i++) {
    str[i] = s[i - 1];
  }

  console.log(str);
  return str;
};

cv(convert);
