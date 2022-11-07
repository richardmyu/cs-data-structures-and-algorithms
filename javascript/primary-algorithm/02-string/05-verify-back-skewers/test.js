/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn('A man, a plan, a canal: Panama'), true);
  assert.deepStrictEqual(fn('race a car'), false);
  assert.deepStrictEqual(fn('race a car'), false);
  assert.deepStrictEqual(fn('10 1'), true);
  assert.deepStrictEqual(fn('10 1o1'), false);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
