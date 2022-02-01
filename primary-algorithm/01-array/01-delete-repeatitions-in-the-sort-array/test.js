/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([1, 1]), 1);
  assert.deepStrictEqual(fn([1, 1, 1, 1]), 1);
  assert.deepStrictEqual(fn([1, 1, 2]), 2);
  assert.deepStrictEqual(fn([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
