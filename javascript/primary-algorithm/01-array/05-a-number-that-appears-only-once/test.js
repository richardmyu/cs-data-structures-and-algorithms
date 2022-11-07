/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([2, 2, 1]), 1);
  assert.deepStrictEqual(fn([4, 1, 2, 1, 2]), 4);
  assert.deepStrictEqual(fn([1, 0, 1]), 0);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
