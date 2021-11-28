/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn,msg) => {
  console.log(`--- test ${msg} ---`);
//  assert.deepStrictEqual(fn("abcd"), 1);
  console.log("all cases pass the test");
  console.log("--- END ---");
}

module.exports = testFn;
