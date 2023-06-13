from typing import List


class Solution:
    # case 01
    # 新建列表，存储唯一值
    # @staticmethod
    # def contains_duplicate(nums: List[int]) -> bool:
    #     ary = []
    #
    #     for i in nums:
    #         if i not in ary:
    #             ary.append(i)
    #
    #     if len(ary) == len(nums):
    #         return False
    #     else:
    #         return True

    # case 02
    # set
    @staticmethod
    def contains_duplicate(nums: List[int]) -> bool:
        return len(set(nums)) != len(nums)


# solution = Solution()
# print(solution.contains_duplicate([1, 2, 3, 1]))
# # true
# print(solution.contains_duplicate([1, 2, 3, 4]))
# # false
# print(solution.contains_duplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
# # true
