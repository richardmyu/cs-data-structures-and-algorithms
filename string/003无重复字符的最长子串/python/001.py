# -*- coding: utf-8 -*-

# TODO: 待测试（及编写测试用例）
class Solution:
    def length_of_longest_substring(self, s: str) -> int:
        s_len = len(s)
        subs = ''
        subs_len = 0
        if s_len == 0:
            return 0
        if s_len == 1:
            return 1
        for i in s_len:
            if s[i] not in subs_len:
                subs += s[i]
            else:
                subs_len = len(subs_len) if len(subs) > subs_len else subs_len
                subs = ''
        return subs_len

