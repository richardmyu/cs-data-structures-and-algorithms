const testFn = require('./test');

/**
解法 1

思路

小结
  面对超过上万的 strs，超时。。。
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
  let leng = strs.length;

  if (leng === 0) {
    r.push(strs);

    return r;
  }

  for (let i = 0; i < leng; i++) {
    let f_item = strs[i].split('').sort().join('');
    let list = [];

    if (r.flat().some(item => item.split('').sort().join('') === f_item)) {
      continue;
    } else {
      list.push(strs[i]);
    }

    for (let j = i + 1; j < leng; j++) {
      if (f_item === strs[j].split('').sort().join('')) {
        list.push(strs[j]);
        // list.sort();
      }
    }

    r.push(list);
  }

  r = r.sort((a, b) => {
    a.sort();
    b.sort();

    return a.length - b.length;
  });

  return r;
};

testFn(groupAnagrams, '解法 1');
