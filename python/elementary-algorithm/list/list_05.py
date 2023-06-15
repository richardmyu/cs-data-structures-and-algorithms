from typing import List


class Solution:
    # case 01
    @staticmethod
    def single_number(nums: List[int]) -> int:
        res = 0

        if len(nums) == 1:
            return nums[0]

        nums.sort()

        if nums[0] != nums[1]:
            res = nums[0]
        if nums[-1] != nums[-2]:
            res = nums[-1]

        for i in range(1, len(nums) - 1):
            if nums[i - 1] != nums[i] and nums[i] != nums[i + 1]:
                res = nums[i]

        return res


# solution = Solution()
# print(solution.single_number([2, 2, 1]))
# # 1
# print(solution.single_number([4, 1, 2, 1, 2]))
# # 4
# print(solution.single_number([1]))
# # 1
# print(solution.single_number(
#     [463, 191, -915, -438, 420, -135, -431, 611, 695, -605, 469, 917, 301, 70, 209, -66, 956, 7, 245, 147, 104, 633,
#      -218, -879, -894, 208, -37, -344, -252, -684, 728, -943, 858, -557, 217, -655, -91, -308, 699, -152, -702, 916,
#      -867, 447, 29, -207, 56, -149, 909, 980, 508, -747, -389, -718, 814, -790, 803, 299, 443, 932, -814, 495, 274, 88,
#      -22, 373, -324, 144, -144, 421, -499, -178, -582, -124, 741, 526, 215, -538, -912, 400, 425, -693, -767, 862, -746,
#      462, 762, 148, 463, 191, -915, -438, 420, -135, -431, 611, 695, -605, 469, 917, 301, 70, 209, -66, 956, 7, 245,
#      147, 104, 633, -218, -879, -894, 208, -37, -344, -252, -684, 728, -943, 858, -557, 217, -655, -91, -308, 699, -152,
#      -702, 916, -867, 447, 29, -207, 56, -149, 909, 980, 508, -747, -389, -718, 814, -790, 803, 299, 443, 932, -814,
#      495, 274, 88, -22, 373, -324, 144, -144, 421, -499, -178, -582, -124, 741, 526, 215, -538, -912, 400, 425, -693,
#      -767, 862, -746, 462, 762, 148, -3]
# ))
# # -3