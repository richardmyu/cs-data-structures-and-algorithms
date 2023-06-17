from typing import List
import re


class Solution:
    # case 01
    @staticmethod
    def is_palindrome(s: str) -> bool:
        s = s.lower()
        s = re.sub(r'[^0-9a-z ]+', '', s)
        s_l = [i for i in list(s) if i.strip() != '']
        s_l_r = list(reversed(s_l))

        if s_l == s_l_r:
            return True
        else:
            return False


# solution = Solution()
# print(solution.is_palindrome("A man, a plan, a canal: Panama"))
# # True
# print(solution.is_palindrome("race a car"))
# # False
# print(solution.is_palindrome(" "))
# # True
