/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4]);
  assert.deepStrictEqual(fn([-1, -100, 3, 99], 2), [3, 99, -1, -100]);
  assert.deepStrictEqual(fn([-1], 2), [-1]);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
