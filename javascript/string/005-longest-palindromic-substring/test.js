/***
 *  test
 */
const assert = require('assert').strict;

const isP = (fn) => {
  console.log("--- is palindromeStr ---");
  assert.deepStrictEqual(fn(""), true);
  assert.deepStrictEqual(fn("bb"), true);
  assert.deepStrictEqual(fn("bbc"), false);
  assert.deepStrictEqual(fn("bcb"), true);
  assert.deepStrictEqual(fn("bccb"), true);
  assert.deepStrictEqual(fn("bcbb"), false);
  assert.deepStrictEqual(fn("bcaacb"), true);
  assert.deepStrictEqual(fn("bcaacc"), false);
  assert.deepStrictEqual(fn("bcabacb"), true);
  assert.deepStrictEqual(fn("bcacbacb"), false);
  console.log("all cases pass the test");
  console.log("--- END ---");
}


const longP = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn("babad"), "bab");
  assert.deepStrictEqual(fn("cbbd"), "bb");
  assert.deepStrictEqual(fn("a"), "a");
  assert.deepStrictEqual(fn("ac"), "a");

  assert.deepStrictEqual(fn("cb"), "c");
  assert.deepStrictEqual(fn("bb"), "bb");
  assert.deepStrictEqual(fn("bbc"), "bb");
  assert.deepStrictEqual(fn("bcb"), "bcb");
  assert.deepStrictEqual(fn("bccb"), "bccb");
  assert.deepStrictEqual(fn("bcab"), "b");
  assert.deepStrictEqual(fn("bcbb"), "bcb");
  assert.deepStrictEqual(fn("bcaacb"), "bcaacb");
  assert.deepStrictEqual(fn("bcaacc"), "caac");
  assert.deepStrictEqual(fn("bcabacb"), "bcabacb");
  assert.deepStrictEqual(fn("bcacbacb"), "bcacb");
  assert.deepStrictEqual(fn("abbcacbbabbbaca"), "abbcacbba");

  assert.deepStrictEqual(fn("dbbf"), "bb");
  assert.deepStrictEqual(fn("cdbbfc"), "bb");
  assert.deepStrictEqual(fn("bcdbbfcb"), "bb");
  assert.deepStrictEqual(fn("bccbbfcb"), "bccb");
  assert.deepStrictEqual(fn("abcdbbfcba"), "bb");
  console.log("all cases pass the test");
  console.log("--- END ---");
}

module.exports = {
  isP,
  longP
}
