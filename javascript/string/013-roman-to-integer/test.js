/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn("III"), 3);
  assert.deepStrictEqual(fn("IV"), 4);
  assert.deepStrictEqual(fn("IX"), 9);
  assert.deepStrictEqual(fn("xIX"), 19);
  assert.deepStrictEqual(fn("LVIII"), 58);
  assert.deepStrictEqual(fn("CDXLIV"), 444);
  assert.deepStrictEqual(fn("MCMXCIV"), 1994);
  console.log("all cases pass the test");
  console.log("--- END ---");
}

module.exports = testFn;
