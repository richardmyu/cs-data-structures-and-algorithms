const testFn = require('./test');

/**
解法 1

思路

小结
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  if (!Array.isArray(prices)) {
    return;
  }
  let r = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] && (prices[i] < prices[i + 1])) {
      r = r + prices[i + 1] - prices[i];
    } else {
      continue;
    }
  }
  return r;
};

testFn(maxProfit, '解法 1');
