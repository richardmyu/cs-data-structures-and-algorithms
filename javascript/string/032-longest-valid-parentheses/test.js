/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn('(()'), 2);
  assert.deepStrictEqual(fn(')()())'), 4);
  assert.deepStrictEqual(fn(''), 0);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
