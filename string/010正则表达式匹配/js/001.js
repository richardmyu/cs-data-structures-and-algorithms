const testFn = require("./test");

/**
解法 1
  76ms, 98.97%
  40.4MB, 27.80%

思路

 */

/**
* @param {string} s
* @param {string} p
* @return {boolean}
*/
var isMatch = function (s, p) {
  // 不含 `.` 和 `*`，长度一样再比较字符；
  if (!p.includes('.') && !p.includes('*')) {
    return s.length === p.length ? s === p : false;
  }
  // 错误模式
  if (p[0] === '*') {
    return false;
  }

  sLeng = s.length;
  pLeng = p.length;
  nIndex = 0;

  outs:
  for (let i = 0; i < sLeng; i++) {
    for (let j = nIndex; j < pLeng; j++) {
      console.log('000');
      console.log('   ', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);

      // 如果字符相同，或者遇到 `.`、`*`，跳出本轮循环，在外循环中进行下一位比较
      if (p[j] === s[i] || p[j] === '.' || (p[j] === '*' && s[i] === p[j - 1])) {
        console.log('  --------');
        console.log('  111-1', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);
        nIndex = j + 1;
        console.log(`    nIndex=${nIndex}`);
        // 不完全匹配（两种类型）
        console.log("    i: ", i, "j: ", j);
        // 不完全匹配 - 1.字符多余
        if (nIndex === pLeng && i < (sLeng - 1)) {
          console.log('  111-2', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);
          if (p.slice(-1) === "*" && s.slice(sLeng).split('').every(n => n === p.slice(-2, -1))) {
            return true;
          } else {
            return false;
          }
        }
        // 不完全匹配 - 2.字符不够
        if (i === (sLeng - 1) && nIndex !== pLeng) {
          console.log('  111-3', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);
          leng = pLeng - nIndex;
          if (leng > 1 || (p.slice(-1) !== '.' && p.slice(-1) !== "*")) {
            console.log('oh no noono');
            console.log(`    i=${i}`);
            console.log(`    sLeng=${sLeng}`);
            console.log(`    pLeng=${pLeng}`);
            console.log(`    nIndex=${nIndex}`);
            console.log(`    p[-1]=${p[-1]}`);
            return false;
          }


        }
        continue outs;
      }
      // `*`
      // if (p[j] === '*' && s[i] === p[j - 1]) {
      //   console.log('    111-2', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);
      //   nIndex = j + 1;
      //   console.log(`nIndex=${nIndex}`);
      //   continue outs;
      // }

    }
    // console.log('222', s[i], p[nIndex]);
    // if (s[i] === p[nIndex] || p[nIndex] === '.' || p[nIndex] === '*') {
    //   console.log('333', s[i], p[nIndex]);
    //   nIndex++;
    //   continue;
    // } else {
    //   return false;
    // }
  }
  return true;
};

testFn(isMatch, '解法 1')
