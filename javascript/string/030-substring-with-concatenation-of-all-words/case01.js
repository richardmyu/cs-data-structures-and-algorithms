const testFn = require("./test");

/**
解法 1

思路
  1.获取 words 全组合；
  2.再逐个匹配；
  3.注意：找出所有满足的组合字符串，至少有一个；

小结
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
  let l = comb(words);
  console.log('---===', l);
  let r = [];
  for (let i = 0; i < l.length; i++) {
    flag = s.indexOf(l[i]);
    if (flag !== -1) {
      r.push(flag)
    }
  }
  console.log(r, r.sort((a, b) => a - b));
  return r.sort((a, b) => a - b);
};
const comb = function (words) {
  console.log('1--', words);
  if (!Array.isArray(words)) {
    return;
  }
  let r = [];
  let leng = words.length;
  if (leng === 0) {
    r = [];
  }
  if (leng === 1) {
    r.push(words);
  }
  if (leng === 2) {
    r.push(words[0].concat(words[1]));
    r.push(words[1].concat(words[0]));
  }
  if (leng > 2) {
    // words 不包含最后一位的组合

    // 原始组合元素的长度
    let basicLeng = words[0].length;

    for (let i = 0; i < leng - 1; i++) {
      let ary = comb(words.slice(0, i).concat(words.slice(i + 1)));
      console.log('--3', ary, words);
      console.log('**', i, ary.length);
      console.log('3--', i, ary[i], words[i]);
      // 组合后的元素长度
      let subLeng = ary[0].length;
      // 组合元素可插入新元素的位置个数
      let jLeng = Math.ceil(subLeng / basicLeng) + 1;
      for (let j = 0; j < jLeng; j++) {
        console.log('--4', j, ary[i]);
        r.push(ary[i].slice(0, j * basicLeng) + words[i] + ary[i].slice(j * basicLeng));
        console.log('4--', r);
      }
      // debugger;
    }
    // 处理最后一位的组合
    let ary = comb(words.slice(0, -1));
    console.log('===', ary);
    // 组合后的元素长度
    let subLeng = ary[0].length;
    // 组合元素可插入新元素的位置个数
    let jLeng = Math.ceil(subLeng / basicLeng) + 1;
    for (let i = 0; i < ary.length; i++) {
      for (let j = 0; j < jLeng; j++) {
        console.log('==5', j, ary[i], words.slice(-1).join(''));
        r.push(ary[i].slice(0, j * basicLeng) + words.slice(-1).join('') + ary[i].slice(j * basicLeng));
        console.log('5==', r);
      }
    }

  }
  console.log('--end', [...new Set(r)]);
  console.log('---------------------');
  return [...new Set(r)];
}

testFn(findSubstring, "解法 1");
