const testFn = require('./test');

/**
解法 2

思路

小结
 */

/**
 * @param {array} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  if (!Array.isArray(prices)) {
    return;
  }

  let r = 0;

  for (let i = 1; i < prices.length; i++) {
    let diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      r = r + diff;
    }
  }

  return r;
};

testFn(maxProfit, '解法 2');
