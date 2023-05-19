import unittest
from case01 import Solution


class TestStringCase(unittest.TestCase):
    def test_longest_substring(self):
        solution = Solution()
        self.assertEqual(solution.lengthOfLongestSubstring("abcabcbb"), 3)
        self.assertEqual(solution.lengthOfLongestSubstring("bbbb"), 1)
        self.assertEqual(solution.lengthOfLongestSubstring("pwwkew"), 3)
        self.assertEqual(solution.lengthOfLongestSubstring(""), 0)
        self.assertEqual(solution.lengthOfLongestSubstring(" "), 1)
        self.assertEqual(solution.lengthOfLongestSubstring(" $%"), 3)
        self.assertEqual(solution.lengthOfLongestSubstring(" $% "), 3)
        self.assertEqual(solution.lengthOfLongestSubstring(" $% *&^%"), 6)
        self.assertEqual(solution.lengthOfLongestSubstring("abcabcd"), 4)


if __name__ == '__main__':
    unittest.main()
