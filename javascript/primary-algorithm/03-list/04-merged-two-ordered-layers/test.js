/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([1, 2, 4], [1, 3, 4]), [1, 1, 2, 3, 4, 4]);
  assert.deepStrictEqual(fn([], []), []);
  assert.deepStrictEqual(fn([], [0]), [0]);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
