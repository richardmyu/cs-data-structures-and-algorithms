/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn(["h", "e", "l", "l", "o"]), ["o", "l", "l", "e", "h"]);
  assert.deepStrictEqual(fn(["H", "a", "n", "n", "a", "h"]), ["h", "a", "n", "n", "a", "H"]);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
