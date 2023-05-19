import unittest
from case01 import Solution1
from case02 import Solution2


class TestStringCase(unittest.TestCase):
    def test_longest_palindrome_1(self):
        solution1 = Solution1()
        self.assertEqual(solution1.longestPalindrome(""), "")
        self.assertEqual(solution1.longestPalindrome(" "), " ")
        self.assertEqual(solution1.longestPalindrome("abc"), "a")
        self.assertEqual(solution1.longestPalindrome("abcda"), "a")
        self.assertEqual(solution1.longestPalindrome("babad"), "bab")
        self.assertEqual(solution1.longestPalindrome(" "), "bb")
        self.assertEqual(solution1.longestPalindrome("abcacba"), "abcacba")
        self.assertEqual(solution1.longestPalindrome("abbcabba"), "abba")
        self.assertEqual(solution1.longestPalindrome("abcdasdfghjkldcba"), "a")
        self.assertEqual(
            solution1.longestPalindrome(
                "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa"
            ),
            "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa",
        )

    def test_longest_palindrome_2(self):
        solution2 = Solution2()
        self.assertEqual(solution2.longestPalindrome(""), "")
        self.assertEqual(solution2.longestPalindrome(" "), " ")
        self.assertEqual(solution2.longestPalindrome("abc"), "a")
        self.assertEqual(solution2.longestPalindrome("abcda"), "a")
        self.assertEqual(solution2.longestPalindrome("babad"), "bab")
        self.assertEqual(solution2.longestPalindrome("cbbd"), "bb")
        self.assertEqual(solution2.longestPalindrome("abcacba"), "abcacba")
        self.assertEqual(solution2.longestPalindrome("abbcabba"), "abba")
        self.assertEqual(solution2.longestPalindrome("abcdasdfghjkldcba"), "a")
        self.assertEqual(
            solution2.longestPalindrome(
                "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa"
            ),
            "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa",
        )


if __name__ == '__main__':
    unittest.main()
