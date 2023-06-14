from typing import List


class Solution:
    @staticmethod
    def reverse_string(s: List[str]) -> None:
        # case 01
        length = len(s)

        for i in range(int(len(s) / 2)):
            s[i], s[length - 1 - i] = s[length - 1 - i], s[i]

        return s


# solution = Solution()
# print(solution.reverse_string(["h", "e", "l", "l", "o"]))
# # ["o", "l", "l", "e", "h"]
# print(solution.reverse_string(["H", "a", "n", "n", "a", "h"]))
# # ["h", "a", "n", "n", "a", "H"]
