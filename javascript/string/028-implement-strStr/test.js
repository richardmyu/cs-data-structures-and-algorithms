/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn('hello', 'll'), 2);
  assert.deepStrictEqual(fn('lhello', 'll'), 3);
  assert.deepStrictEqual(fn('aaaaa', 'bba'), -1);
  assert.deepStrictEqual(fn('', ''), 0);
  assert.deepStrictEqual(fn('', 'a'), -1);
  assert.deepStrictEqual(fn('a', 'a'), 0);
  assert.deepStrictEqual(fn('abc', 'c'), 2);
  assert.deepStrictEqual(fn('aaa', 'a'), 0);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
