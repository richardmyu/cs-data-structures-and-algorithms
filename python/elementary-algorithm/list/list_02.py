from typing import List


class Solution:
    @staticmethod
    def max_profit(prices: List[int]) -> int:
        total = 0

        for i in range(len(prices) - 1):
            if prices[i] < prices[i + 1]:
                total = total + prices[i] - prices[i + 1]

        return -total if total < 0 else 0

# solution = Solution()
# print(solution.max_profit([7, 1, 5, 3, 6, 4]))
