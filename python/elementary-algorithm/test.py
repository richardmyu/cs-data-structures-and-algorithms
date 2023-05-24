import unittest
from el01 import Solution as Solution01
from el02 import Solution as Solution02


class TestCase(unittest.TestCase):
    def test_remove_duplicates(self):
        sol01 = Solution01()
        self.assertEqual(sol01.remove_duplicates([1, 1, 2]), 2)
        self.assertEqual(sol01.remove_duplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5)
        self.assertEqual(sol01.remove_duplicates(
            [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2,
             2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0,
             1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3,
             3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5)

    def test_max_profit(self):
        sol02 = Solution02()
        self.assertEqual(sol02.max_profit([7, 1, 5, 3, 6, 4]), 7)
        self.assertEqual(sol02.max_profit([1, 2, 3, 4, 5]), 4)
        self.assertEqual(sol02.max_profit([7, 6, 4, 3, 1]), 0)


if __name__ == '__main__':
    unittest.main()
