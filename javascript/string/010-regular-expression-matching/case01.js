const testFn = require('./test');

/**
解法 1

思路

 */


// TODO: 不完全匹配-2 情况太过复杂：
// 2021/12/25
// 多余一位的情况好量化；
// 而超位过多的，无法量化，
// 无法找到局部匹配和全局匹配的分界
// 全局匹配也好解决，局部匹配。。。
// 对此，暂时没有好的想法
// s: abc
// p: a*b*c*

// TODO:
/**
* @param {string} s
* @param {string} p
* @return {boolean}
*/
var isMatch = function (s, p) {
  var sLeng = s.length,
    pLeng = p.length,
    pIndex = 0,
    sIndex = 0;
  console.log(s, p);
  // 不含 `.` 和 `*`，长度一样再比较字符；
  if (!p.includes('.') && !p.includes('*')) {
    return s.length === p.length ? s === p : false;
  }
  // 错误模式
  if (p[0] === '*' || p.includes('**')) {
    return false;
  }
  if (sLeng === 0 && (p !== '.' && p !== '.*')) {
    return false;
  }

  outs:
  for (let i = sIndex; i < sLeng; i++) {
    for (let j = pIndex; j < pLeng; j++) {
      console.log('000');
      console.log('   ', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);


      // 如果字符相同，或者遇到 `.`、`*`，跳出本轮循环，在外循环中进行下一位比较
      if (s[i] === p[j] || p[j] === '.' || (p[j] === '*' && (s[i] === p[j - 1] || p[j - 1] === '.'))) {

        console.log('  111', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);
        // 不完全匹配（两种类型）
        // 不完全匹配 1.字符多余
        if ((j + 1) === pLeng && (i + 1) < sLeng) {
          console.log('  111-1', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);
          if (p.slice(-1) === '*') {
            if (p.slice(-2, -1) === '.') {
              // (1) `.*` 模式
              return true;
            } else if (s.slice(i + 1).split('').every(n => n === p.slice(-2, -1))) {
              // (2) `[a-z]*` 模式
              return true;
            } else {
              // (3) 不匹配字母 模式
              return false;
            }
          } else {
            return false;
          }
        }
        // 不完全匹配 2.字符不够
        if ((j + 1) < pLeng && (i + 1) === sLeng) {
          console.log('  111-2', `s[${i}]=${s[i]}`, `p[${j}]=${p[j]}`);
          // if (p[j + 1] === '*') {
          //   return isMatch(s, p.slice(j + 2));
          // } else {
          //   return isMatch(s, p.slice(j + 1));
          // }
          // 多出一位
          if (pLeng - j == 2) {
            console.log('---');
            if (p[j] !== '*' && p[j + 1] !== '*') {
              console.log('1');
              return false;
            } else if (p[j] === '*' && (p[j + 1] !== '.' && p[j + 1] !== s[i])) {
              console.log('2');
              return false;
            } else {
              console.log('3');
              return true;
            }
          }
          // 多出几位

        }
        pIndex = j + 1;
        continue outs;
      } else if (s[i] !== p[j] && p[j] !== '*') {
        console.log('  222');
        console.log('   ', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);
        if (s[i] === p[j - 2] && p[j - 1] === '*') {
          console.log('  222-1');
          console.log('   ', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);
          pIndex = j - 1;
          continue outs;
        } else if (p[j + 1] === '*') {
          console.log('  222-2');
          console.log('   ', `s[${i}] = ${s[i]} p[${j}] = ${p[j]}`);
          pIndex = j + 1;
          continue outs;
        }

        return false;
      }
    }
  }
  return true;
};

testFn(isMatch, '解法 1');
