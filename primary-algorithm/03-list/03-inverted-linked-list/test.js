/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  assert.deepStrictEqual(fn([1, 2, 3]), [3, 2, 1]);
  assert.deepStrictEqual(fn([1]), [1]);
  assert.deepStrictEqual(fn([]), []);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
