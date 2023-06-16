import unittest
from str_01 import Solution as Solution01
from str_02 import Solution as Solution02
from str_03 import Solution as Solution03


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


if __name__ == '__main__':
    unittest.main()
