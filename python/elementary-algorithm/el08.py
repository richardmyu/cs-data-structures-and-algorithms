from typing import List


class Solution:
    @staticmethod
    def move_zeroes(nums: List[int]) -> None:
        for i in nums:
            if i == 0:
                nums.remove(i)
                nums.append(0)
        return nums


solution = Solution()
print(solution.move_zeroes([0]))
# [0]
print(solution.move_zeroes([0, 0, 1]))
# [1, 0, 0]
print(solution.move_zeroes([0, 1, 0, 3, 12]))
# [1, 3, 12, 0, 0]
print(solution.move_zeroes([0, 1, 4, 0, 3, 12]))
# [1, 4, 3, 12, 0, 0]
