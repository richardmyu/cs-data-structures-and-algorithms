/***
 * test
 */
const assert = require('assert').strict;

const testFn = (fn, msg) => {
  console.log(`--- test ${msg} ---`);
  assert.deepStrictEqual(fn('2', '3'), '6');
  assert.deepStrictEqual(fn('9133', '0'), '0');
  // assert.deepStrictEqual(fn("123", "456"), "56088");
  // assert.deepStrictEqual(fn("123", "406"), "49938");
  // assert.deepStrictEqual(fn("123", "40"), "4920");
  // assert.deepStrictEqual(fn("123456789", "987654321"), "121932631112635269");
  // assert.deepStrictEqual(fn('111111111111111111', '222'), '24666666666666666642');
  // assert.deepStrictEqual(fn('111111111111111101', '222'), '24666666666666664422');
  // assert.deepStrictEqual(fn("401716832807512840963", "167141802233061013023557397451289113296441069"), "67143675422804947379429215144664313370120390398055713625298709447");
  console.log('all cases pass the test');
  console.log('--- END ---');
};


module.exports = testFn;
