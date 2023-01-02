# -*- coding: utf-8 -*-


def lengthOfLongestSubstring(s: str) -> int:
    s_len = len(s)
    subs = ''
    subs_len = 0

    if s_len == 0:
        return 0

    if s_len == 1:
        return 1

    for i in range(s_len):
        if s[i] not in subs:
            subs += s[i]
        else:
            subs_len = len(subs) if len(subs) > subs_len else subs_len
            # subs = ''
            subs = s[s[:i].rindex(s[i]) + 1:i + 1]

    subs_len = len(subs) if len(subs) > subs_len else subs_len

    return subs_len
