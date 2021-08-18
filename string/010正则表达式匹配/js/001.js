const testFn = require("./test");

/**
解法 1
  76ms, 98.97%
  40.4MB, 27.80%

思路

 */


// TODO: 1.多余匹配和不足匹配 [x]
// TODO: 2.匹配中途不匹配
// TODO: 3. * 匹配不够慎重
// TODO:
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
  if (p[0] === '*' || p.includes('**')) {
    return false;
  }

  var sLeng = s.length,
    pLeng = p.length,
    snIndex = 0, // 字符指针
    pnIndex = 0; // 正则指针
  // isMatch = false; // 是否已进入匹配

  outs:
  for (let i = snIndex; i < sLeng; i++) {
    for (let j = pnIndex; j < pLeng; j++) {
      console.log('000');
      console.log('   ', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);


      // 如果字符相同，或者遇到 `.`、`*`，跳出本轮循环，在外循环中进行下一位比较
      if (p[j] === s[i] || p[j] === '.' || (p[j] === '*' && (s[i] === p[j - 1] || p[j - 1] === '.'))) {
        // isMatch = true;
        console.log('  --------');
        console.log('  111', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);
        snIndex = i + 1;
        pnIndex = j + 1;
        console.log(`    snIndex = ${snIndex} pnIndex = ${pnIndex}`);
        // 不完全匹配（两种类型）
        console.log("    i: ", i, "j: ", j);
        // 不完全匹配 1.字符多余
        if (pnIndex === pLeng && snIndex < sLeng) {
          console.log('  111-1', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);
          if (p.slice(-1) === "*") {
            if (p.slice(-2, -1) === '.') {
              // (1) `.*` 模式
              console.log('   111-1-1', s.slice(snIndex).split(''));
              return true;
            } else if (s.slice(snIndex).split('').every(n => n === p.slice(-2, -1))) {
              // (2) `[a-z]*` 模式
              console.log('   111-1-2', s.slice(snIndex).split(''));
              return true;
            } else {
              // (3) 不匹配字母 模式
              console.log('   111-1-3', s.slice(snIndex).split(''));
              return false;
            }

          } else {
            return false;
          }
        }
        // 不完全匹配 2.字符不够 (3 种情况)
        // （1.前匹配
        // （2.中匹配
        // （3.后匹配
        if (i === (sLeng - 1) && pnIndex !== pLeng) {
          console.log('  111-2', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);
          leng = pLeng - pnIndex;
          if (leng > 1 || (p.slice(-1) !== '.' && p.slice(-1) !== "*")) {
            console.log('oh no noono');
            console.log(`    i=${i}`);
            console.log(`    sLeng=${sLeng}`);
            console.log(`    pLeng=${pLeng}`);
            console.log(`    snIndex=${snIndex} pnIndex=${pnIndex}`);
            console.log(`    p.slice(-1)=${p.slice(-1)}`);
            return false;
          }
          // snIndex=0;
          // pnIndex = p[pnIndex]
        }
        continue outs;
      } else {
        console.log('000 end');
        console.log('   ', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);
        if (p[j + 1] === '*') {
          // 匹配终止，在匹配规则的下一位继续从头匹配
          console.log(`    end-1 snIndex = ${snIndex} pnIndex = ${pnIndex}`);
          snIndex = 0;
          continue outs;
        } else {
          console.log(`    end-2 snIndex = ${snIndex} pnIndex = ${pnIndex}`);
          return false;
        }

        // console.log('000 end');
        // console.log('   ', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);
        // if (isMatch) {
        //   // 匹配中途不匹配，字符指针归 0
        //   console.log(`    snIndex = ${snIndex} pnIndex = ${pnIndex}`);
        //   snIndex = 0;
        //   // pnIndex++;
        //   console.log(`    snIndex = ${snIndex} pnIndex = ${pnIndex}`);
        //   continue outs;
        // }
      }
    }
  }
  return true;
};

testFn(isMatch, '解法 1')
