/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  // assert.deepStrictEqual(fn([1, 2, 2, 1], [2, 2]), [2, 2]);
  // assert.deepStrictEqual(fn([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
  // assert.deepStrictEqual(fn([3, 1, 2], [1, 1]), [1]);
  assert.deepStrictEqual(fn([43, 85, 49, 2, 83, 2, 39, 99, 15, 70, 39, 27, 71, 3, 88, 5, 19, 5, 68, 34, 7, 41, 84, 2, 13, 85, 12, 54, 7, 9, 13, 19, 92], [10, 8, 53, 63, 58, 83, 26, 10, 58, 3, 61, 56, 55, 38, 81, 29, 69, 55, 86, 23, 91, 44, 9, 98, 41, 48, 41, 16, 42, 72, 6, 4, 2, 81, 42, 84, 4, 13]), [2, 83, 3, 41, 84, 13, 9]);
  console.log('all cases pass the test');
  console.log('--- END ---');
};



module.exports = testFn;
