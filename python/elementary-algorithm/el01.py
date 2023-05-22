from typing import List


class Solution:
    def remove_duplicates(self, nums: List[int]) -> int:
        ary = []

        for i in nums[:]:
            if i not in ary:
                ary.append(i)
            else:
                nums.remove(i)

        return len(nums)
