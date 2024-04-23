import unittest
from case01 import Solution


class TestStringCase(unittest.TestCase):
    def test_longest_substring(self):
        solution = Solution()
        self.assertEqual(solution.length_substring("abcabcbb"), 3)
        self.assertEqual(solution.length_substring("bbbb"), 1)
        self.assertEqual(solution.length_substring("pwwkew"), 3)
        self.assertEqual(solution.length_substring(""), 0)
        self.assertEqual(solution.length_substring(" "), 1)
        self.assertEqual(solution.length_substring(" $%"), 3)
        self.assertEqual(solution.length_substring(" $% "), 3)
        self.assertEqual(solution.length_substring(" $% *&^%"), 6)
        self.assertEqual(solution.length_substring("abcabcd"), 4)


if __name__ == '__main__':
    unittest.main()
