const testFn = require("./test");

/**
解法 1

思路
  1.生成全序组合；C(n,m)=n!/(m!(n-m)!)
  2.过滤；

小结
 */

// TODO: 卡了
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  if (n < 1 || n > 8) {
    return false;
  }
  let a = ['(', ')'];
  let r = ['', ''];
  if (n === 1) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        r.push(a[i] + a[j]);
      }
    }
  }
  if (n === 2) {
    for (let x = 0; x < 2; x++) {
      for (let y = 0; y < 2; y++) {
        for (let z = 0; z < 2; z++) {
          r.push(a[x] + a[y] + a[z]);
        }
      }
    }
  }
  r = r.map(item => {
    if (isValid(item)) {
      return item;
    } else {
      return '';
    }
  });
  for (let i = 0; i < r.length; i++) {
    if (r[i].length === 0) {
      r.splice(i, 1);
      i--;
    }
    if (r.indexOf(r[i]) !== r.lastIndexOf(r[i])) {
      r.splice(i, 1);
      i--;
    }
  }
  return r;
};

const isValid = function (s) {
  if (s.length < 1 || s.length % 2) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' && s[i + 1] === ')') {
      s = s.replace('()', '');
      i -= 2;
    }
    if (s[i] === '[' && s[i + 1] === ']') {
      s = s.replace('[]', '');
      i -= 2;
    }
    if (s[i] === '{' && s[i + 1] === '}') {
      s = s.replace('{}', '');
      i -= 2;
    }
  }
  return s.length === 0;
};

const squareParentheses = function (n) {
  // console.log('----', n);
  let a = ['(', ')'];
  if (n === 0) {
    // console.log('===',[a[0] + a[1], a[1] + a[0]]);
    return [a[0] + a[1], a[1] + a[0]];
  }
  if (n > 0) {
    return squareParentheses(n - 1);
  }
}

console.log(squareParentheses(0));
console.log(squareParentheses(1));

// testFn(generateParenthesis, "解法 1");
