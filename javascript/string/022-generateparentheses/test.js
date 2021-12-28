/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn(1), ["()"]);
  assert.deepStrictEqual(fn(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
  console.log("all cases pass the test");
  console.log("--- END ---");
}

module.exports = testFn;
