/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn('anagram', 'nagaram'), true);
  assert.deepStrictEqual(fn('rat', 'car'), false);
  assert.deepStrictEqual(fn('a', 'ab'), false);
  assert.deepStrictEqual(fn('aacc', 'ccac'), false);
  assert.deepStrictEqual(fn('\u2260', '\u2260'), true);
  assert.deepStrictEqual(fn('\u226022', '22\u2260'), true);
  assert.deepStrictEqual(fn('\u2260', '\u2260\u00BF'), false);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
