/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn('0', '0'), '0');
  assert.deepStrictEqual(fn('11', '1'), '100');
  assert.deepStrictEqual(fn('101', '1'), '110');
  assert.deepStrictEqual(fn('1010', '1011'), '10101');
  assert.deepStrictEqual(fn('111111111111111111111111', '1'), '1000000000000000000000000');
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
