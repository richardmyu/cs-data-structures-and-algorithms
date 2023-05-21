from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        for i in range(len(nums)):
            print('--i ', i, nums[0:i])
            if nums[i] in nums[0:i]:
                print('-- before ', nums)
                nums.remove(nums[i])
                print('-- after ', nums)

        return len(nums)


solution = Solution()
# print(solution.removeDuplicates([1, 1, 2]))
print(solution.removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
