/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn(123), 321);
  assert.deepStrictEqual(fn(-123), -321);
  assert.deepStrictEqual(fn(120), 21);
  assert.deepStrictEqual(fn(0), 0);
  assert.deepStrictEqual(fn(1534236469), 0);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
