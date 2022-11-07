/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([4, 5, 1, 9], 1), [4, 5, 9]);
  assert.deepStrictEqual(fn([1, 2, 3, 4], 3), [1, 2, 4]);
  assert.deepStrictEqual(fn([0, 1], 0), [1]);
  assert.deepStrictEqual(fn([-3, 5, -99], -3), [5, -99]);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
