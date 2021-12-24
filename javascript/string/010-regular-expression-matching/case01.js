const testFn = require("./test");

/**
解法 1

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
    pLeng = p.length;

  outs:
  for (let i = 0; i < sLeng; i++) {
    for (let j = 0; j < pLeng; j++) {
      console.log('000');
      console.log('   ', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);


      // 如果字符相同，或者遇到 `.`、`*`，跳出本轮循环，在外循环中进行下一位比较
      if (s[i] === p[j] || p[j] === '.' || (p[j] === '*' && (s[i] === p[j - 1] || p[j - 1] === '.'))) {

        console.log('  111', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);
        console.log(`    snIndex = ${snIndex} pnIndex = ${pnIndex}`);
        // 不完全匹配（两种类型）
        // console.log("    i: ", i, "j: ", j);
        // 不完全匹配 1.字符多余
        if ((j + 1) === pLeng && (i + 1) < sLeng) {
          console.log('  111-1', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);
          if (p.slice(-1) === "*") {
            if (p.slice(-2, -1) === '.') {
              // (1) `.*` 模式
              // console.log('   111-1-1', s.slice(snIndex).split(''));
              return true;
            } else if (s.slice(snIndex).split('').every(n => n === p.slice(-2, -1))) {
              // (2) `[a-z]*` 模式
              // console.log('   111-1-2', s.slice(snIndex).split(''));
              return true;
            } else {
              // (3) 不匹配字母 模式
              // console.log('   111-1-3', s.slice(snIndex).split(''));
              return false;
            }
          } else {
            return false;
          }
        }
        // 不完全匹配 2.字符不够
        if ((j + 1) < pLeng && (i + 1) === sLeng) {
          console.log('  111-2', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);
          if (/[a-z.]/.test(p.slice(j + 1))) {
            return false;
          } else {
            return true;
          }
        }
        continue outs;
      } else if (p[j] === '*' && (s[i] !== p[j - 1] || p[j - 1] !== '.')) {
        console.log('   222');
        console.log('   ', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);
        // continue outs;
      } else {
        console.log('   333');
        console.log('   ', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);
        if (p[j + 1] !== '*') {
         // console.log(`    end-2 snIndex = ${snIndex} pnIndex = ${pnIndex}`);
          return false;
        }
      }
    }
  }
  return true;
};

testFn(isMatch, '解法 1')
