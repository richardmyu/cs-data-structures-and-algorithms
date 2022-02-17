/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([2, 7, 11, 15], 9), [0, 1]);
  assert.deepStrictEqual(fn([3, 2, 4], 6), [1, 2]);
  assert.deepStrictEqual(fn([3, 3], 6), [0, 1]);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
