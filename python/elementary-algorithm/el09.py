from typing import List


class Solution:
    # case 01
    # @staticmethod
    # def two_sum(nums: List[int], target: int) -> List[int]:
    #     for i in nums:
    #         idx = nums.index(i)
    #         for j in nums[idx + 1:]:
    #             if i + j == target:
    #                 return [idx, nums[idx + 1:].index(j) + idx + 1]

    # case 02
    @staticmethod
    def two_sum(nums: List[int], target: int) -> List[int]:
        diff = []
        for i in nums:
            diff.append((i, nums.index(i), target - i))

        for (i, idx, j) in diff:
            if j in (nums[0:idx] + nums[idx + 1:]):
                if i == j:
                    return [idx, nums[idx + 1:].index(j) + idx + 1]
                else:
                    return [idx, nums.index(j)]


solution = Solution()
print(solution.two_sum([2, 7, 11, 15], 9))
# [0, 1]
print(solution.two_sum([3, 2, 4], 6))
# [1, 2]
print(solution.two_sum([3, 3], 6))
# [0, 1]
print(solution.two_sum([3, 4, 5, 6, 3], 6))
# [0, 4]
print(solution.two_sum([3, 4, 5, 6, 3], 11))
# [2, 3]
