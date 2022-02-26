/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  // assert.deepStrictEqual(fn(1), '1');
  // assert.deepStrictEqual(fn(2), '11');
  assert.deepStrictEqual(fn(3), '21');
  // assert.deepStrictEqual(fn(4), '1211');
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
