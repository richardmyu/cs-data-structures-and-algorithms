from typing import List


class Solution:
    # case 01 pop + insert
    # @staticmethod
    # def rotate(self, nums: List[int], k: int) -> None:
    #     for i in range(k):
    #         nums.insert(0, nums.pop(-1))
    #
    #     return nums

    # case 02 切片
    # @staticmethod
    # def rotate(nums: List[int], k: int) -> None:
    #     nums = nums[-k:] + nums[0:(k + 1)]
    #
    #     return nums

    # case 03 索引替换
    @staticmethod
    def rotate(nums: List[int], k: int) -> None:
        for i, val in enumerate(nums[:]):
            if i + k < len(nums):
                nums[i + k] = val
            else:
                nums[i + k - len(nums)] = val

        return nums


# solution = Solution()
# print(solution.rotate([1, 2, 3, 4, 5, 6, 7], 3))
# [5, 6, 7, 1, 2, 3, 4]
# print(solution.rotate([-1, -100, 3, 99], 2))
# [3, 99, -1, -100]
