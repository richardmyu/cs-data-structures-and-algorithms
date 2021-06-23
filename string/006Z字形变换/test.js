/***
 *  test
 */
const assert = require('assert').strict;

const cv = (fn) => {
  console.log("--- is convert ---");
  assert.deepStrictEqual(fn("PAYPALISHIRING", "3"), "PAHNAPLSIIGYIR");
  // assert.deepStrictEqual(fn("PAYPALISHIRING", "4"), "PINALSIGYAHRPI");
  // assert.deepStrictEqual(fn("PAYPALISHIRING", "6"), "PRAIIYHNPSGAIL");
  // assert.deepStrictEqual(fn("PAYPALISHIRING", "8"), "PAGYNPIARLIIHS");
  // assert.deepStrictEqual(fn("PAYPALISHIRING", "10"), "PAYPALGINSIHRI");
  // assert.deepStrictEqual(fn("PAYPALISHIRING", "13"), "PAYPALISHIRIGN");
  // assert.deepStrictEqual(fn("A", "1"), "A");
  console.log("--- END ---");
}

module.exports = cv;
