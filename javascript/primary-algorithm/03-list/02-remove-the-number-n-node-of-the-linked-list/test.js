/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([1, 2, 3, 4, 5], 2), [1, 2, 3, 5]);
  assert.deepStrictEqual(fn([1, 2, 3, 4, 5], 3), [1, 2, 4, 5]);
  assert.deepStrictEqual(fn([1, 2, 3, 4, 5], 4), [1, 3, 4, 5]);
  assert.deepStrictEqual(fn([1, 2, 3, 4, 5], 5), [2, 3, 4, 5]);
  assert.deepStrictEqual(fn([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(fn([1, 2, 3, 4, 5, 6, 7, 8], 3), [1, 2, 3, 4, 5, 7, 8]);
  assert.deepStrictEqual(fn([1], 1), []);
  assert.deepStrictEqual(fn([1, 2,], 1), [1]);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
