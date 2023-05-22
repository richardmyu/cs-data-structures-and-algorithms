import unittest
from el01 import Solution as Solution01


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


if __name__ == '__main__':
    unittest.main()
