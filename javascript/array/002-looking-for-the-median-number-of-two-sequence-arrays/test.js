/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([1, 3], [2]), 2);
  assert.deepStrictEqual(fn([1, 2], [3, 4]), 2.5);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
