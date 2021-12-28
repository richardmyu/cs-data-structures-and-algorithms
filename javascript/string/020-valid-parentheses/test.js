/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn("()"), true);
  assert.deepStrictEqual(fn("(]"), false);
  assert.deepStrictEqual(fn("()[]{}"), true);
  assert.deepStrictEqual(fn("([)]"), false);
  assert.deepStrictEqual(fn("{[]}"), true);
  assert.deepStrictEqual(fn("({[([])]})"), true);
  assert.deepStrictEqual(fn("([]{})"), true);
  console.log("all cases pass the test");
  console.log("--- END ---");
}

module.exports = testFn;
