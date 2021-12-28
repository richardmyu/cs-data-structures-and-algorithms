const testFn = require("./test");

/**
解法 1

思路
  1.生成全序组合；C(n,m)=n!/(m!(n-m)!)
  2.过滤；

小结
 */

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
  if(n===1){
    for(let i=0;i<n;i++){
      r=a
    }
  }
  if(n===2){

  }
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

testFn(generateParenthesis, "解法 1");
