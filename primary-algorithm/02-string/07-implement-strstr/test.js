/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn('hello', 'll'), 2);
  assert.deepStrictEqual(fn('helo', 'll'), -1);
  assert.deepStrictEqual(fn('hlhello', 'll'), 4);
  assert.deepStrictEqual(fn('aaaaa', 'bba'), -1);
  assert.deepStrictEqual(fn('', ''), 0);
  assert.deepStrictEqual(fn('bb', ''), 0);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
