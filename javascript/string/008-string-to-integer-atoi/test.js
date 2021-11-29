/***
 *  test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn("42"), 42);
  assert.deepStrictEqual(fn("+42+"), 42);
  assert.deepStrictEqual(fn("+4+2+"), 4);
  assert.deepStrictEqual(fn("4+2+"), 4);
  assert.deepStrictEqual(fn("42+"), 42);
  assert.deepStrictEqual(fn("-42-"), -42);
  assert.deepStrictEqual(fn(".42."), 0.42);
  assert.deepStrictEqual(fn("24.42."), 24.42);
  assert.deepStrictEqual(fn("    -42"), -42);
  assert.deepStrictEqual(fn("4193 with words"), 4193);
  assert.deepStrictEqual(fn("words and 987"), 0);
  assert.deepStrictEqual(fn("-91283472332"), -2147483648);
  assert.deepStrictEqual(fn("  -115579378e25"), -115579378);
  assert.deepStrictEqual(fn("+-12"), 0);
  console.log("all cases pass the test");
  console.log("--- END ---");
}

module.exports = testFn;
