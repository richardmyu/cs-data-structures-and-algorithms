"""
基于 case01 改造，第一次匹配从最大长度开始，
避免过多的小匹配而影响性能
"""


class Solution2:
    def longestPalindrome(self, s):
        s_len = len(s)
        subs = ''
        has_palindrome = False

        if s_len == 0:
            return ''

        if s_len == 1:
            return s

        for index, value in enumerate(s):
            # 从倒数第一位开始匹配
            start_index = -1

            while (s_len - 1 + start_index) > index:
                next_index = s.find(value, start_index)

                if next_index > 0:
                    str = s[index:start_index]

                    if isPalindrome(str):
                        has_palindrome = True

                        if len(subs) < len(str):
                            subs = str

                start_index = start_index - 1
                # print(start_index, index)

        if has_palindrome:
            return subs
        else:
            return s


def isPalindrome(s):
    if len(s) == 0 or len(s) == 1:
        return True
