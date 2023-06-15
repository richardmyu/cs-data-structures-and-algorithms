from typing import List


class Solution:
    @staticmethod
    def first_uniq_char(s: str) -> int:
        idx = -1
        for i in s:
            if s.index(i) + s[::-1].index(i) == len(s) - 1:
                idx = s.index(i)
                break

        return idx


solution = Solution()
print(solution.first_uniq_char("leetcode"))
# 0
print(solution.first_uniq_char("loveleetcode"))
# 2
print(solution.first_uniq_char("aabb"))
# -1
