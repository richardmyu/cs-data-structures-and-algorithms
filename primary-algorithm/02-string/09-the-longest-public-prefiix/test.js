/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn(['flower', 'flow', 'flight']), 'fl');
  assert.deepStrictEqual(fn(['flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight', 'flower', 'flow', 'flight']), 'fl');
  assert.deepStrictEqual(fn(['dog', 'racecar', 'car']), '');
  assert.deepStrictEqual(fn(['', 'racecar', 'car']), '');
  assert.deepStrictEqual(fn(['cir', 'car']), 'c');
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
