/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0]);
  assert.deepStrictEqual(fn([0]), [0]);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
