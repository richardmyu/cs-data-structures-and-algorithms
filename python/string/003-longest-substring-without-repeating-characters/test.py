# -*- coding: utf-8 -*-

import unittest
from case01 import length_of_longest_substring


class TestStringCase(unittest.TestCase):
    def test_longest_substring(self):
        self.assertEqual(length_of_longest_substring("abcabcbb"), 3)
        self.assertEqual(length_of_longest_substring("bbbb"), 1)
        self.assertEqual(length_of_longest_substring("pwwkew"), 3)
        self.assertEqual(length_of_longest_substring(""), 0)
        self.assertEqual(length_of_longest_substring(" "), 1)
        self.assertEqual(length_of_longest_substring(" $%"), 3)
        self.assertEqual(length_of_longest_substring(" $% "), 3)
        self.assertEqual(length_of_longest_substring(" $% *&^%"), 6)
        self.assertEqual(length_of_longest_substring("abcabcd"), 4)


if __name__ == '__main__':
    unittest.main()
