/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn(3), "III");
  assert.deepStrictEqual(fn(4), "IV");
  assert.deepStrictEqual(fn(9), "IX");
  assert.deepStrictEqual(fn(19), "XIX");
  assert.deepStrictEqual(fn(58), "LVIII");
  assert.deepStrictEqual(fn(444), "CDXLIV");
  assert.deepStrictEqual(fn(1994), "MCMXCIV");
  console.log("all cases pass the test");
  console.log("--- END ---");
}

module.exports = testFn;
