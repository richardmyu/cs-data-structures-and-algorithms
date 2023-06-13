import unittest
from str_01 import Solution as Solution01

class TestCase(unittest.TestCase):
    def test_reverse_string(self):
        sol = Solution01()
        self.assertEqual(sol.reverse_string(["h", "e", "l", "l", "o"]), ["o", "l", "l", "e", "h"])
        self.assertEqual(sol.reverse_string(["H", "a", "n", "n", "a", "h"]), ["h", "a", "n", "n", "a", "H"])

if __name__ == '__main__':
    unittest.main()
