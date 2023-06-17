import unittest
from str_01 import Solution as Solution01
from str_02 import Solution as Solution02
from str_03 import Solution as Solution03
from str_04 import Solution as Solution04
from str_05 import Solution as Solution05
from str_06 import Solution as Solution06


class TestCase(unittest.TestCase):
    def test_reverse_string(self):
        sol = Solution01()
        self.assertEqual(sol.reverse_string(["h", "e", "l", "l", "o"]), ["o", "l", "l", "e", "h"])
        self.assertEqual(sol.reverse_string(["H", "a", "n", "n", "a", "h"]), ["h", "a", "n", "n", "a", "H"])

    def test_reverse(self):
        sol = Solution02()
        self.assertEqual(sol.reverse(12), 21)
        self.assertEqual(sol.reverse(123), 321)
        self.assertEqual(sol.reverse(-123), -321)
        self.assertEqual(sol.reverse(120), 21)
        self.assertEqual(sol.reverse(-120), -21)
        self.assertEqual(sol.reverse(0), 0)

    def test_first_uniq_char(self):
        sol = Solution03()
        self.assertEqual(sol.first_uniq_char("leetcode"), 0)
        self.assertEqual(sol.first_uniq_char("loveleetcode"), 2)
        self.assertEqual(sol.first_uniq_char("aabb"), -1)

    def test_is_anagram(self):
        sol = Solution04()
        self.assertEqual(sol.is_anagram("anagram", "nagaram"), True)
        self.assertEqual(sol.is_anagram("rat", "car"), False)
        self.assertEqual(sol.is_anagram("anagram", "Nagaram"), False)

    def test_is_palindrome(self):
        sol = Solution05()
        self.assertEqual(sol.is_palindrome("A man, a plan, a canal: Panama"), True)
        self.assertEqual(sol.is_palindrome("race a car"), False)
        self.assertEqual(sol.is_palindrome(""), True)

    def test_my_atoi(self):
        sol = Solution06()
        self.assertEqual(sol.my_atoi(""), 0)
        self.assertEqual(sol.my_atoi("+"), 0)
        self.assertEqual(sol.my_atoi("42"), 42)
        self.assertEqual(sol.my_atoi("2147483648"), 2147483647)
        self.assertEqual(sol.my_atoi("-91283472332"), -2147483648)
        self.assertEqual(sol.my_atoi("  -42"), -42)
        self.assertEqual(sol.my_atoi("4193 with words"), 4193)
        self.assertEqual(sol.my_atoi("with words 4193"), 0)
        self.assertEqual(sol.my_atoi("41.93 with words"), 41)


if __name__ == '__main__':
    unittest.main()
