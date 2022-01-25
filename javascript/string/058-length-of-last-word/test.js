/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn('Hello World'), 5);
  assert.deepStrictEqual(fn('   fly me   to   the moon  '), 4);
  assert.deepStrictEqual(fn('luffy is still joyboy'), 6);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
