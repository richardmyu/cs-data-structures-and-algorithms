class Solution:
    # case 01
    @staticmethod
    def is_anagram(s: str, t: str) -> bool:
        s_l = list(s)
        s_l.sort()
        t_l = list(t)
        t_l.sort()

        if s_l == t_l:
            return True
        else:
            return False


# solution = Solution()
# print(solution.is_anagram("anagram", "nagaram"))
# # True
# print(solution.is_anagram("rat", "car"))
# # False
# print(solution.is_anagram("anagram", "Nagaram"))
# # False