const testFn = require('./test');

/**
解法 1

思路

小结
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  if (a === '0' || b === '0') {
    return String(Number(a) + Number(b));
  }
  let max_n = a.length >= b.length ? a : b;
  let min_n = a.length < b.length ? a : b;
  max_n = max_n.split('').reverse();
  min_n = min_n.split('').reverse();
  let r = '';
  let is_carry = false;

  for (let i = 0; i < max_n.length; i++) {
    let is_end = i === (max_n.length - 1);
    if (min_n[i]) {
      if (is_carry) {
        if (is_end) {
          r += '11';
        } else {
          if (max_n[i] === '0' && min_n[i] === '0') {
            is_carry = false;
            r += '1';
          } else if (max_n[i] === '1' && min_n[i] === '0') {
            is_carry = true;
            r += '0';
          } else if (max_n[i] === '0' && min_n[i] === '1') {
            is_carry = true;
            r += '0';
          } else {
            is_carry = true;
            r += '1';
          }
        }
      } else {
        if (is_end) {
          r += '01';
        } else {
          if (max_n[i] === '0' && min_n[i] === '0') {
            is_carry = false;
            r += '0';
          } else if (max_n[i] === '1' && min_n[i] === '0') {
            is_carry = false;
            r += '1';
          } else if (max_n[i] === '0' && min_n[i] === '1') {
            is_carry = false;
            r += '1';
          } else {
            is_carry = true;
            r += '0';
          }
        }
      }
    } else {
      if (is_carry) {
        if (is_end) {
          r += '01';
        } else {
          if (max_n[i] === '0') {
            is_carry = false;
            r += '1';
          } else {
            is_carry = true;
            r += '0';
          }
        }
      } else {
        is_carry = false;
        r += max_n[i];
      }
    }
  }
  return r.split('').reverse().join('');
};

testFn(addBinary, '解法 1');
