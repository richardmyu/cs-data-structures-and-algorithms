from typing import List
import math


class Solution:
    # case 01
    @staticmethod
    def str_str(haystack: str, needle: str) -> int:
        idx = -1
        for i, val in enumerate(haystack):
            if haystack[i:i + len(needle)] == needle:
                idx = i
                return idx
        return idx


# solution = Solution()
# print(solution.str_str(haystack="sadbutsad", needle="sad"))
# # 0
# print(solution.str_str(haystack="sabutsad", needle="sad"))
# # 5
# print(solution.str_str(haystack="leetcode", needle="leeto"))
# # -1
