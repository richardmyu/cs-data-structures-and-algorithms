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
    pnIndex = 0, // 正则指针
    isMatch = false; // 是否已进入匹配

  outs:
  for (let i = snIndex; i < sLeng; i++) {
    for (let j = pnIndex; j < pLeng; j++) {
      // console.log('000');
      // console.log('   ', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);


      // 如果字符相同，或者遇到 `.`、`*`，跳出本轮循环，在外循环中进行下一位比较
      if (p[j] === s[i] || p[j] === '.' || (p[j] === '*' && s[i] === p[j - 1])) {
        isMatch = true;
        // console.log('  --------');
        // console.log('  111-1', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);
        snIndex = i + 1;
        pnIndex = j + 1;
        // console.log(`    snIndex = ${snIndex} pnIndex = ${pnIndex}`);
        // 不完全匹配（两种类型）
        // console.log("    i: ", i, "j: ", j);
        // 不完全匹配 - 1.字符多余
        if (pnIndex === pLeng && i < (sLeng - 1)) {
          // console.log('  111-2', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);
          if (p.slice(-1) === "*" && s.slice(sLeng).split('').every(n => n === p.slice(-2, -1))) {
            return true;
          } else {
            return false;
          }
        }
        // 不完全匹配 - 2.字符不够
        if (i === (sLeng - 1) && pnIndex !== pLeng) {
          // console.log('  111-3', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);
          leng = pLeng - pnIndex;
          if (leng > 1 || (p.slice(-1) !== '.' && p.slice(-1) !== "*")) {
            // console.log('oh no noono');
            // console.log(`    i=${i}`);
            // console.log(`    sLeng=${sLeng}`);
            // console.log(`    pLeng=${pLeng}`);
            // console.log(`    pnIndex=${pnIndex}`);
            // console.log(`    p.slice(-1)=${p.slice(-1)}`);
            return false;
          }
        }
        continue outs;
      } else {
        // console.log('000 end');
        // console.log('   ', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);
        if (isMatch) {
          // 匹配中途不匹配，字符指针归 0
          // console.log(`    snIndex = ${snIndex} pnIndex = ${pnIndex}`);
          snIndex = 0;
          // pnIndex++;
          // console.log(`    snIndex = ${snIndex} pnIndex = ${pnIndex}`);
          continue outs;
        }
      }
    }
  }
  return true;
};

testFn(isMatch, '解法 1')
