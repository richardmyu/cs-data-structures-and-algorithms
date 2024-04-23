from typing import List


class Solution:
    @staticmethod
    def sum(nums: List[int], target: int) -> List[int]:
        idxi = 0
        idxj = 0

        for i, val in enumerate(nums):
            for j in range(i + 1, len(nums)):
                if val + nums[j] == target:
                    idxi = i
                    idxj = j
                    break
        return [idxi, idxj]


# solution = Solution()
# print(solution.sum([2, 7, 11, 15], 9))
# print(solution.sum([3, 2, 4], 6))
# print(solution.sum([3, 3], 6))
