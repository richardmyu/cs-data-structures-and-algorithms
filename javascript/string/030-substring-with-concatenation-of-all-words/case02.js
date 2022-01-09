const testFn = require("./test");

/**
解法 1

思路
  获取匹配索引后，对索引进行比较分析

小结
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// TODO: sorry, 还是内存溢出
const findSubstring = function (s, words) {
  let leng = words.length;
  let basicLeng = words[0].length;
  let r = [];
  let obj = {};

  // 捕获所有匹配项索引
  for (let i = 0; i < leng; i++) {
    let flag;
    let nextIndex = -1;
    obj[words[i] + i] = []
    while ((flag = s.indexOf(words[i], nextIndex + 1)) !== -1) {
      nextIndex = flag;
      obj[words[i] + i].push(flag);
    }
  }

  let valueList = comb(Object.values(obj));
  // console.log('valueList', valueList);
  for (let i = 0; i < valueList.length; i++) {
    if (valueList[i].every((item, index) => item === (valueList[i][0] + basicLeng * index))) {
      r.push(valueList[i][0]);
    }
  }
  r = [...new Set(r)];
  // console.log(r);
  return r.sort((a, b) => a - b);
};

const comb = function (diList) {
  let r = [];
  let leng = diList.length;
  if (leng === 0 || leng === 1) {
    r = diList;
    return r;
  }
  if (leng === 2) {
    for (let i = 0; i < diList[0].length; i++) {
      for (let j = 0; j < diList[1].length; j++) {
        let ary = [];
        ary.push(diList[0][i]);
        ary.push(diList[1][j]);
        ary.sort((a, b) => a - b)
        r.push(ary);
      }
    }
  }
  if (leng > 2) {
    ary = comb(diList.slice(1));
    for (let i = 0; i < ary.length; i++) {
      for (let j = 0; j < diList[0].length; j++) {
        let l = [];
        l.push(...ary[i]);
        l.push(diList[0][j]);
        l.sort((a, b) => a - b)
        r.push(l);
      }
    }

  }
  return r;
}

// comb([[7, 2, 3], [4, 5]]);
// comb([[1, 2, 3], [4, 5], [6]]);
// comb([[1, 2, 3], [4, 5], [6]]);
findSubstring("bcabbcaabbccacacbabccacaababcbb", ["c", "b", "a", "c", "a", "a", "a", "b", "c"]);
// testFn(findSubstring, "解法 2");
