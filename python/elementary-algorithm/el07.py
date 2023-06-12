from typing import List


class Solution:
    # case 01
    @staticmethod
    def plus_one(digits: List[int]) -> List[int]:
        if digits[-1] + 1 <= 9:
            digits[-1] = digits[-1] + 1
            return digits
        else:
            if len(digits) == 1:
                return [1, 0]
            else:
                return Solution.plus_one(digits[0:-1]) + [0]


# solution = Solution()
# print(solution.plus_one([1, 2, 3]))
# # [1, 2, 4]
# print(solution.plus_one([1, 2, 9]))
# # [1, 3, 0]
# print(solution.plus_one([1, 2, 9, 9, 9, 9]))
# # [1, 3, 0, 0, 0, 0]
# print(solution.plus_one([4, 3, 2, 1]))
# # [4, 3, 2, 2]
# print(solution.plus_one([0]))
# # [1]
# print(solution.plus_one([9]))
# # [1, 0]
# print(solution.plus_one([9, 9]))
# # [1, 0, 0]
