import unittest
from el01 import Solution as Solution01
from el02 import Solution as Solution02
from el03 import Solution as Solution03
from el04 import Solution as Solution04
from el05 import Solution as Solution05
from el06 import Solution as Solution06
from el07 import Solution as Solution07
from el08 import Solution as Solution08
from el09 import Solution as Solution09
from el10 import Solution as Solution10
from el11 import Solution as Solution11


class TestCase(unittest.TestCase):
    def test_remove_duplicates(self):
        sol = Solution01()
        self.assertEqual(sol.remove_duplicates([1, 1, 2]), 2)
        self.assertEqual(sol.remove_duplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5)
        self.assertEqual(sol.remove_duplicates(
            [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2,
             2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0,
             1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3,
             3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5)

    def test_max_profit(self):
        sol = Solution02()
        self.assertEqual(sol.max_profit([7, 1, 5, 3, 6, 4]), 7)
        self.assertEqual(sol.max_profit([1, 2, 3, 4, 5]), 4)
        self.assertEqual(sol.max_profit([7, 6, 4, 3, 1]), 0)

    def test_rotate(self):
        sol = Solution03()
        self.assertEqual(sol.rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4])
        self.assertEqual(sol.rotate([-1, -100, 3, 99], 2), [3, 99, -1, -100])

    def test_contains_duplicate(self):
        sol = Solution04()
        self.assertEqual(sol.contains_duplicate([1, 2, 3, 1]), True)
        self.assertEqual(sol.contains_duplicate([1, 2, 3, 4]), False)
        self.assertEqual(sol.contains_duplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), True)

    def test_single_number(self):
        sol = Solution05()
        self.assertEqual(sol.single_number([2, 2, 1]), 1)
        self.assertEqual(sol.single_number([4, 1, 2, 1, 2]), 4)
        self.assertEqual(sol.single_number([1]), 1)
        self.assertEqual(sol.single_number(
            [463, 191, -915, -438, 420, -135, -431, 611, 695, -605, 469, 917, 301, 70, 209, -66, 956, 7, 245, 147, 104,
             633,
             -218, -879, -894, 208, -37, -344, -252, -684, 728, -943, 858, -557, 217, -655, -91, -308, 699, -152, -702,
             916,
             -867, 447, 29, -207, 56, -149, 909, 980, 508, -747, -389, -718, 814, -790, 803, 299, 443, 932, -814, 495,
             274, 88,
             -22, 373, -324, 144, -144, 421, -499, -178, -582, -124, 741, 526, 215, -538, -912, 400, 425, -693, -767,
             862, -746,
             462, 762, 148, 463, 191, -915, -438, 420, -135, -431, 611, 695, -605, 469, 917, 301, 70, 209, -66, 956, 7,
             245,
             147, 104, 633, -218, -879, -894, 208, -37, -344, -252, -684, 728, -943, 858, -557, 217, -655, -91, -308,
             699, -152,
             -702, 916, -867, 447, 29, -207, 56, -149, 909, 980, 508, -747, -389, -718, 814, -790, 803, 299, 443, 932,
             -814,
             495, 274, 88, -22, 373, -324, 144, -144, 421, -499, -178, -582, -124, 741, 526, 215, -538, -912, 400, 425,
             -693,
             -767, 862, -746, 462, 762, 148, -3]), -3)

    def test_intersect(self):
        sol = Solution06()
        self.assertEqual(sol.intersect([1, 2, 2, 1], [2, 2]), [2, 2])
        self.assertEqual(sol.intersect([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9])
        self.assertEqual(sol.intersect([4, 9, 5], [9, 4, 9, 8, 4, 5, 5]), [4, 5, 9])
        self.assertEqual(sol.intersect([4, 9, 5, 8], [9, 4, 9, 8, 4]), [4, 8, 9])
        self.assertEqual(sol.intersect([4, 9, 5, 4, 9], [9, 4, 9, 8, 4]), [4, 4, 9, 9])
        self.assertEqual(sol.intersect([3, 1, 2], [1, 1]), [1])
        self.assertEqual(sol.intersect([3, 1, 2, 1, 2], [1, 1, 2, 1, 1]), [1, 1, 2])

    def test_plus_one(self):
        sol = Solution07()
        self.assertEqual(sol.plus_one([1, 2, 3]), [1, 2, 4])
        self.assertEqual(sol.plus_one([1, 2, 9]), [1, 3, 0])
        self.assertEqual(sol.plus_one([1, 2, 9, 9, 9, 9]), [1, 3, 0, 0, 0, 0])
        self.assertEqual(sol.plus_one([4, 3, 2, 1]), [4, 3, 2, 2])
        self.assertEqual(sol.plus_one([0]), [1])
        self.assertEqual(sol.plus_one([9]), [1, 0])
        self.assertEqual(sol.plus_one([9, 9]), [1, 0, 0])

    def test_move_zeroes(self):
        sol = Solution08()
        self.assertEqual(sol.move_zeroes([0]), [0])
        self.assertEqual(sol.move_zeroes([0, 0, 1]), [1, 0, 0])
        self.assertEqual(sol.move_zeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0])
        self.assertEqual(sol.move_zeroes([0, 1, 4, 0, 3, 12]), [1, 4, 3, 12, 0, 0])

    def test_two_sum(self):
        sol = Solution09()
        self.assertEqual(sol.two_sum([2, 7, 11, 15], 9), [0, 1])
        self.assertEqual(sol.two_sum([3, 2, 4], 6), [1, 2])
        self.assertEqual(sol.two_sum([3, 3], 6), [0, 1])
        self.assertEqual(sol.two_sum([3, 4, 5, 6, 3], 6), [0, 4])
        self.assertEqual(sol.two_sum([3, 4, 5, 6, 3], 11), [2, 3])

    def test_is_valid_sudoku(self):
        sol = Solution10()
        self.assertEqual(sol.is_valid_sudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."]
                                                 , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
                                                 , [".", "9", "8", ".", ".", ".", ".", "6", "."]
                                                 , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
                                                 , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
                                                 , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
                                                 , [".", "6", ".", ".", ".", ".", "2", "8", "."]
                                                 , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
                                                 , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]), True)
        self.assertEqual(sol.is_valid_sudoku([["8", "3", ".", ".", "7", ".", ".", ".", "."]
                                                 , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
                                                 , [".", "9", "8", ".", ".", ".", ".", "6", "."]
                                                 , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
                                                 , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
                                                 , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
                                                 , [".", "6", ".", ".", ".", ".", "2", "8", "."]
                                                 , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
                                                 , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]), False)
        self.assertEqual(sol.is_valid_sudoku([["9", "3", ".", ".", "7", ".", ".", ".", "."]
                                                 , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
                                                 , [".", "9", "8", ".", ".", ".", ".", "6", "."]
                                                 , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
                                                 , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
                                                 , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
                                                 , [".", "6", ".", ".", ".", ".", "2", "8", "."]
                                                 , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
                                                 , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]), False)

    def test_rotate(self):
        sol = Solution11()
        self.assertEqual(sol.rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[7, 4, 1], [8, 5, 2], [9, 6, 3]])
        self.assertEqual(sol.rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]),
                         [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]])


if __name__ == '__main__':
    unittest.main()
