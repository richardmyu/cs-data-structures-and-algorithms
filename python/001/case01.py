from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in nums:
            idxi = nums.index(i) + 1
            for j in nums[idxi:]:
                idxj = nums.index(j)
                if i + j == target:
                    return [idxi - 1, idxj]
            print('-' * 12)


solution = Solution()

print(solution.twoSum([2, 7, 11, 15], 9))
print(solution.twoSum([3, 2, 4], 6))
print(solution.twoSum([3, 3], 6))
