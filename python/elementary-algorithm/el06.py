from typing import List


class Solution:
    # case 01
    @staticmethod
    def intersect(nums1: List[int], nums2: List[int]) -> List[int]:
        res = []
        min_nums = []
        max_nums = []

        if len(nums1) <= len(nums2):
            min_nums = nums1[:]
            max_nums = nums2[:]
        else:
            min_nums = nums2[:]
            max_nums = nums1[:]

        for i in min_nums[:]:
            if i in max_nums:
                res.append(i)
                min_nums.remove(i)
                max_nums.remove(i)

        return res


solution = Solution()
print(solution.intersect([1, 2, 2, 1], [2, 2]))
# [2, 2]
print(solution.intersect([4, 9, 5], [9, 4, 9, 8, 4]))
# [4, 9]
print(solution.intersect([4, 9, 5], [9, 4, 9, 8, 4, 5, 5]))
# [4, 9, 5]
print(solution.intersect([4, 9, 5, 8], [9, 4, 9, 8, 4]))
# [4, 8, 9]
print(solution.intersect([4, 9, 5, 4, 9], [9, 4, 9, 8, 4]))
# [4, 4, 9, 9]
print(solution.intersect([3, 1, 2], [1, 1]))
# [1]
print(solution.intersect([3, 1, 2, 1, 2], [1, 1, 2, 1, 1]))
# [1, 2, 1]
