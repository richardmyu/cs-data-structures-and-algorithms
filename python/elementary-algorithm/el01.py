from typing import List


class Solution:
    # case 1
    # 新建列表，存储不重复元素
    @staticmethod
    def remove_duplicates(nums: List[int]) -> int:
        ary = []

        for i in nums[:]:
            if i not in ary:
                ary.append(i)
            else:
                nums.remove(i)

        return len(nums)

