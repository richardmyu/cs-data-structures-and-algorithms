/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  // assert.deepStrictEqual(fn([1, 2, 3]), [1, 2, 4]);
  // assert.deepStrictEqual(fn([4, 3, 2, 1]), [4, 3, 2, 2]);
  // assert.deepStrictEqual(fn([0]), [1]);
  // assert.deepStrictEqual(fn([9]), [1, 0]);
  // assert.deepStrictEqual(fn([9, 9]), [1, 0, 0]);
  assert.deepStrictEqual(fn([9, 8, 9]), [9, 9, 0]);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
