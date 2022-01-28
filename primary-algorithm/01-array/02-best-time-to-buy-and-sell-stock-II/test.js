/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn,msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn([7,1,5,3,6,4]), 7);
  assert.deepStrictEqual(fn([1,2,3,4,5]), 4);
  assert.deepStrictEqual(fn([7,6,4,3,1]), 0);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
