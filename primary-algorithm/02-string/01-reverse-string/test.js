/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn(["h", "e", "l", "l", "o"]), ["o", "l", "l", "e", "h"]);
  assert.deepStrictEqual(fn(["H", "a", "n", "n", "a", "h"]), ["h", "a", "n", "n", "a", "H"]);
  assert.deepStrictEqual(fn(["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"]), ["a", "m", "a", "n", "a", "P", " ", ":", "l", "a", "n", "a", "c", " ", "a", " ", ",", "n", "a", "l", "p", " ", "a", " ", ",", "n", "a", "m", " ", "A"]);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
