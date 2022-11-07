/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([1, 2, 3, 1]), true);
  assert.deepStrictEqual(fn([1, 2, 3, 4]), false);
  assert.deepStrictEqual(fn([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
