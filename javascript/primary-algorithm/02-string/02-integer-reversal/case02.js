const testFn = require('./test');

/**
解法 2

思路

小结
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let r = [];
  let n = 0;
  let is_minus = false;
  let leng = 0;

  if (x < 0) {
    r = String(x).slice(1).split('');
    is_minus = true;
  } else {
    r = String(x).split('');
  }

  leng = r.length;

  if (leng % 2 === 0) {
    for (let i = 0; i < (Math.floor(leng / 2)); i++) {
      let a = r[i];
      let b = r[leng - 1 - i];
      r[i] = b;
      r[leng - 1 - i] = a;
    }
  } else {
    for (let i = 0; i <= (Math.floor(leng / 2)); i++) {
      let a = r[i];
      let b = r[leng - 1 - i];
      r[i] = b;
      r[leng - 1 - i] = a;
    }
  }

  n = is_minus ? -1 * Number(r.join('')) : Number(r.join(''));
  n = n > (Math.pow(2, 31) - 1) ? 0 : n;
  n = n < (Math.pow(-2, 31)) ? 0 : n;

  return n;
};

testFn(reverse, '解法 2');
