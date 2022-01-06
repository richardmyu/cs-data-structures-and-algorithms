/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  // assert.deepStrictEqual(fn("barfoothefoobarman", ['foo', 'bar']), [0, 9]);
  // assert.deepStrictEqual(fn("barfoothefoobaman", ['foo', 'bar']), [0]);
  assert.deepStrictEqual(fn("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]), []);
  // assert.deepStrictEqual(fn("barfoofoobarthefoobarman", ["bar", "foo", "the"]), [6, 9, 12]);
  console.log("all cases pass the test");
  console.log("--- END ---");
}

module.exports = testFn;
