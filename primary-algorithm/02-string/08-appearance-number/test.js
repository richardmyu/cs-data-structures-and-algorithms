/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn(1), '1');
  assert.deepStrictEqual(fn(2), '11');
  assert.deepStrictEqual(fn(3), '21');
  assert.deepStrictEqual(fn(4), '1211');
  assert.deepStrictEqual(fn(5), '111221');
  assert.deepStrictEqual(fn(6), '312211');
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
