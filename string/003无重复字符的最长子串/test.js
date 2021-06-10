/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn,msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn("abcabcbb"), 3);
  // assert.deepStrictEqual(fn("bbbb"), 1);
  // assert.deepStrictEqual(fn("pwwkew"), 3);
  // assert.deepStrictEqual(fn(""), 0);
  // assert.deepStrictEqual(fn(" "), 1);
  // assert.deepStrictEqual(fn(" $%"), 3);
  // assert.deepStrictEqual(fn(" $% "), 3);
  // assert.deepStrictEqual(fn(" $% *&^%"), 6);
  console.log("--- END ---");
}

module.exports = testFn;
