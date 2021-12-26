/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn,msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn(["flower", "flow", "flight"]), "fl");
  assert.deepStrictEqual(fn(["dog", "racecar", "car"]), "");
  assert.deepStrictEqual(fn(["car", "cir"]), "c");
  assert.deepStrictEqual(fn(["dog", "dogg", "doggg"]), "dog");
  console.log("all cases pass the test");
  console.log("--- END ---");
}

module.exports = testFn;
