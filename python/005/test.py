import unittest
from case01 import Solution_1
from case02 import Solution_2


class TestStringCase(unittest.TestCase):
    def test_longest_palindrome_1(self):
        solution1 = Solution1()
        self.assertEqual(solution1.longest_palindrome(""), "")
        self.assertEqual(solution1.longest_palindrome(" "), " ")
        self.assertEqual(solution1.longest_palindrome("abc"), "a")
        self.assertEqual(solution1.longest_palindrome("abcda"), "a")
        self.assertEqual(solution1.longest_palindrome("babad"), "bab")
        self.assertEqual(solution1.longest_palindrome(" "), "bb")
        self.assertEqual(solution1.longest_palindrome("abcacba"), "abcacba")
        self.assertEqual(solution1.longest_palindrome("abbcabba"), "abba")
        self.assertEqual(solution1.longest_palindrome("abcdasdfghjkldcba"), "a")
        self.assertEqual(
            solution1.longest_palindrome(
                "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa"
            ),
            "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa",
        )

    def test_longest_palindrome_2(self):
        solution2 = Solution2()
        self.assertEqual(solution2.longest_palindrome(""), "")
        self.assertEqual(solution2.longest_palindrome(" "), " ")
        self.assertEqual(solution2.longest_palindrome("abc"), "a")
        self.assertEqual(solution2.longest_palindrome("abcda"), "a")
        self.assertEqual(solution2.longest_palindrome("babad"), "bab")
        self.assertEqual(solution2.longest_palindrome("cbbd"), "bb")
        self.assertEqual(solution2.longest_palindrome("abcacba"), "abcacba")
        self.assertEqual(solution2.longest_palindrome("abbcabba"), "abba")
        self.assertEqual(solution2.longest_palindrome("abcdasdfghjkldcba"), "a")
        self.assertEqual(
            solution2.longest_palindrome(
                "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa"
            ),
            "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa",
        )


if __name__ == '__main__':
    unittest.main()
