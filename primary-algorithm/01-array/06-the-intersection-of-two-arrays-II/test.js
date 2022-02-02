/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([1, 2, 2, 1], [2, 2]), [2, 2]);
  assert.deepStrictEqual(fn([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
