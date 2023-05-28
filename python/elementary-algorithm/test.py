import unittest
from el01 import Solution as Solution01
from el02 import Solution as Solution02
from el03 import Solution as Solution03
from el04 import Solution as Solution04
from el05 import Solution as Solution05


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


if __name__ == '__main__':
    unittest.main()
