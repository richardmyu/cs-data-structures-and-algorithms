import unittest
from case01 import Solution


class TestCase(unittest.TestCase):
    def test_solution(self):
        solution = Solution()
        self.assertEqual(solution.addTwoNumbers(l1=[2, 4, 3], l2=[5, 6, 4]), [7, 0, 8])


if __name__ == '__main__':
    unittest.main()
