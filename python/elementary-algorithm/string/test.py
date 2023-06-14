import unittest
from str_01 import Solution as Solution01
from str_02 import Solution as Solution02


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


if __name__ == '__main__':
    unittest.main()
