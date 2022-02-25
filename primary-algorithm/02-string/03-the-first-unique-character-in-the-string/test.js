/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn('leetcode'), 0);
  assert.deepStrictEqual(fn('loveleetcode'), 2);
  assert.deepStrictEqual(fn('aabb'), -1);
  console.log('all cases pass the test');
  console.log('--- END ---');
};

module.exports = testFn;
