from typing import List
import math


class Solution:
    # case 01
    @staticmethod
    def longest_common_prefix(strs: List[str]) -> str:
        min_len = min([len(i) for i in strs])
        s = ''
        l = 0

        while l < min_len:
            if len([x for x in strs if strs[0][0:l + 1] in x[0:l + 1]]) == len(strs):
                s = strs[0][0:l + 1]
                l += 1
            else:
                break

        return s


# solution = Solution()
# print(solution.longest_common_prefix(["flower", "flow", "flight"]))
# # 'fl'
# print(solution.longest_common_prefix(["dog", "racecar", "car"]))
# # ''
# print(solution.longest_common_prefix(["rdog", "racecar", "rcar"]))
# # 'r'
# print(solution.longest_common_prefix(["c", "acc", "ccc"]))
# # ''
