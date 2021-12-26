/***
 *  test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  // assert.deepStrictEqual(fn("", "a"), false);
  // assert.deepStrictEqual(fn("", "."), true);
  // assert.deepStrictEqual(fn("", ".*"), true);
  // assert.deepStrictEqual(fn("aa", "a"), false);
  // assert.deepStrictEqual(fn("aa", "a*"), true);
  // assert.deepStrictEqual(fn("aa", ".*"), true);
  // assert.deepStrictEqual(fn("aa", ".."), true);
  // assert.deepStrictEqual(fn("aa", "*."), false);
  // assert.deepStrictEqual(fn("aa", "a**"), false);
  // assert.deepStrictEqual(fn("aab", "c*a*b"), true);
  // assert.deepStrictEqual(fn("aabb", "c*a*b"), false);
  // assert.deepStrictEqual(fn("aabc", "c*a*b"), false);
  // assert.deepStrictEqual(fn("aab", "c*a*b*"), true);
  // assert.deepStrictEqual(fn("aab", "c*a*bb"), false);
  // assert.deepStrictEqual(fn("aabbb", "a*b*"), true);
  // assert.deepStrictEqual(fn("aabbc", "a*b*"), false);
  // assert.deepStrictEqual(fn("aabbcdg", "a*b*.*"), true);
  // assert.deepStrictEqual(fn("mississippi", "mis*is*p*."), false);
  // assert.deepStrictEqual(fn("aab", "a*c*a*b"), true);
  // assert.deepStrictEqual(fn("abb", "a*c*a*bb"), true);
  // assert.deepStrictEqual(fn("abc", "ac*bc"), true);
  // assert.deepStrictEqual(fn("abc", "a*bc"), true);
  // assert.deepStrictEqual(fn("aab", "a*b*a*b"), true);
  // assert.deepStrictEqual(fn("acb", "a*b*a*b*c*"), true);


  // assert.deepStrictEqual(fn("aa", "a*."), true);
  // assert.deepStrictEqual(fn("missssisssspp", "mis*is*p*."), true);
  assert.deepStrictEqual(fn("aabb", "a*ba*bb"), false);
  // assert.deepStrictEqual(fn("aab", "a*b*a*c"), false);
  // assert.deepStrictEqual(fn("aabb", "a*b*a*b"), false);

  console.log("all cases pass the test");
  console.log("--- END ---");
}

module.exports = testFn;
