# -*- coding: utf-8 -*-

import unittest
from case01 import lengthOfLongestSubstring as fn


class TestStringCase(unittest.TestCase):
    def test_longest_substring(self):
        self.assertEqual(fn("abcabcbb"), 3)
        self.assertEqual(fn("bbbb"), 1)
        self.assertEqual(fn("pwwkew"), 3)
        self.assertEqual(fn(""), 0)
        self.assertEqual(fn(" "), 1)
        self.assertEqual(fn(" $%"), 3)
        self.assertEqual(fn(" $% "), 3)
        self.assertEqual(fn(" $% *&^%"), 6)
        self.assertEqual(fn("abcabcd"), 4)


if __name__ == '__main__':
    unittest.main()
