import unittest
from case01 import Solution


class TestCase(unittest.TestCase):
    def test_two_sum(self):
        solution = Solution()
        self.assertEqual(solution.sum([2, 7, 11, 15], 9), [0, 1])
        self.assertEqual(solution.sum([2, 11, 7, 15], 9), [0, 2])
        self.assertEqual(solution.sum([2, 11, 15, 7], 9), [0, 3])
        self.assertEqual(solution.sum([3, 2, 4], 6), [1, 2])
        self.assertEqual(solution.sum([3, 3], 6), [0, 1])


if __name__ == '__main__':
    unittest.main()
