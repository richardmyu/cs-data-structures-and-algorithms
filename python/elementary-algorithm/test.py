import unittest
from el01 import Solution as Solution01
from el02 import Solution as Solution02
from el03 import Solution as Solution03
from el04 import Solution as Solution04


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

    def test_rotate(self):
        sol03 = Solution03()
        self.assertEqual(sol03.rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4])
        self.assertEqual(sol03.rotate([-1, -100, 3, 99], 2), [3, 99, -1, -100])

    def test_contains_duplicate(self):
        sol04 = Solution04()
        self.assertEqual(sol04.contains_duplicate([1, 2, 3, 1]), True)
        self.assertEqual(sol04.contains_duplicate([1, 2, 3, 4]), False)
        self.assertEqual(sol04.contains_duplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), True)


if __name__ == '__main__':
    unittest.main()
