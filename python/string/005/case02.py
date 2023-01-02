# -*- coding: utf-8 -*-
# 基于 case01 改造，第一次匹配从最大长度开始，
# 避免过多的小匹配而影响性能
def longestPalindrome(s):
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
    if (len(s) == 0 or len(s) == 1):
        return True
    # mid = 0
    # if s % 2 == 0:
    #     mid = len(s) / 2
    # else:
    #     mid = int(len(s) / 2)
    # left_str = s[0:mid]
    # right_str = s[mid:]
    # print(mid, left_str, right_str)
    # for index, value in enumerate(left_str):
    #     if (index <= int(len(left_str) / 2)
    #             and value != left_str[len(left_str) - 1 - index]
    #             and value != right_str[len(right_str) - 1 - index]):
    #         return False
    # return True


print(longestPalindrome('aba'))
# print(longestPalindrome('abcd'))
# print(longestPalindrome('abcba'))
# print(longestPalindrome('abcda'))
# print(longestPalindrome('abcacba'))
# print(
#     longestPalindrome(
#         'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa'
#     ))
