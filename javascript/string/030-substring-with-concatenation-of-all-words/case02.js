const testFn = require("./test");

/**
解法 1

思路
  鉴于 case01 中全匹配带来的内存溢出问题，放弃全组合匹配的想法

小结
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
  let leng = words.length;
  let basicLeng = words[0].length;
  let r = [];
  let obj = {};
  let temp = [];

  // 捕获所有匹配项索引
  for (let i = 0; i < leng; i++) {
    let flag;
    let nextIndex = -1;
    obj[words[i]] = []
    while ((flag = s.indexOf(words[i], nextIndex + 1)) !== -1) {
      nextIndex = flag;
      obj[words[i]].push(flag);
    }
  }
  console.log('obj: ', obj);

  let valueList = Object.values(obj);

  let valLeng = valueList[0].length;
  temp = Array.from({ length: valLeng }, () => []);

  for (let i = 0; i < valueList.length; i++) {
    if (valueList[i].length !== valueList[0].length) {
      return r;
    }
    for (let j = 0; j < valLeng; j++) {
      temp[j].push(valueList[i][j]);
    }
  }
  console.log('temp: ', temp);

  for (let i = 0; i < temp.length; i++) {
    let l = temp[i].sort((a, b) => a - b);
    if (l.every((item, index) => (item - basicLeng * index) === l[0])) {
      r.push(l[0]);
    }
  }
  console.log('r: ', r);


  return r;
};

testFn(findSubstring, "解法 1");
