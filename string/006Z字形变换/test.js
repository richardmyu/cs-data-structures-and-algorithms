/***
 *  test
 */
const assert = require('assert').strict;

const cv = (fn) => {
  console.log("--- is palindromeStr ---");
  assert.deepStrictEqual(fn("PAYPALISHIRING", "3"), "PAHNAPLSIIGYIR");
  assert.deepStrictEqual(fn("PAYPALISHIRING", "4"), "PINALSIGYAHRPI");
  assert.deepStrictEqual(fn("A", "1"), "A");
  console.log("--- END ---");
}

module.exports = cv;
