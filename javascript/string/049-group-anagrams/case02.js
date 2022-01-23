const testFn = require('./test');

/**
解法 2

思路

小结
  描述里，说是任意输出，结果是，如果输出结果不与提供的一致，都无法通过，而且预期结果还是无序的，真的很厉害，无序的结果，也能给出一个子集作为标答。。。
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  if (!Array.isArray(strs)) {
    return;
  }

  let r = [];
  let obj = {};
  let leng = strs.length;
  for (let i = 0; i < leng; i++) {
    let n_strs = 0;
    for (let j = 0; j < strs[i].length; j++) {
      n_strs *= strs[i].charCodeAt([j]);
    }
    if (!obj[n_strs]) {
      obj[n_strs] = [strs[i]];
    } else {
      obj[n_strs].push(strs[i]);
    }
  }

  r = Object.values(obj).sort((a, b) => {
    a.sort();
    b.sort();
    return a.length - b.length;
  });

  return r;
};

testFn(groupAnagrams, '解法 2');
