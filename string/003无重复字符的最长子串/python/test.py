# -*- coding: utf-8 -*-

import unittest
from longest_substring import length_of_longest_substring


class LongestSubstringTestCase(unittest.TestCase):
    """测试 longest_substring.py"""

    def test_longest_substring(self):
        # longest_substring = length_of_longest_substring('adfasdf')
        # self.assertEqual(longest_substring, 4)
        self.assertEqual(length_of_longest_substring("abcabcbb"), 3)
        self.assertEqual(length_of_longest_substring("bbbb"), 1)
        self.assertEqual(length_of_longest_substring("pwwkew"), 3)
        self.assertEqual(length_of_longest_substring(""), 0)
        self.assertEqual(length_of_longest_substring(" "), 1)
        self.assertEqual(length_of_longest_substring(" $%"), 3)
        self.assertEqual(length_of_longest_substring(" $% "), 3)
        self.assertEqual(length_of_longest_substring(" $% *&^%"), 6)
        self.assertEqual(length_of_longest_substring("abcabcd"), 4)


unittest.main()
