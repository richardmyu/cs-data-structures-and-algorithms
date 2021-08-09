/***
 *  test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  // assert.deepStrictEqual(fn("", "a"), false);
  // assert.deepStrictEqual(fn("", "."), true);
  // assert.deepStrictEqual(fn("", ".*"), true);
  // assert.deepStrictEqual(fn("aa", "a"), false);
  // assert.deepStrictEqual(fn("aa", "a*"), true);
  // assert.deepStrictEqual(fn("aa", ".*"), true);
  // assert.deepStrictEqual(fn("aa", ".."), true);
  // assert.deepStrictEqual(fn("aab", "c*a*b"), true);
  assert.deepStrictEqual(fn("mississippi", "mis*is*p*."), false);
  console.log("all cases pass the test");
  console.log("--- END ---");
}

module.exports = testFn;
