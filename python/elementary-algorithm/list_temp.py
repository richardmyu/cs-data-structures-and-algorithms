from typing import List
import unittest


def dedup_01(nums: List[int]) -> List[int]:
    """遍历操作在新列表，删除操作在原列表"""
    s = ""
    l = nums[:]

    for i in nums[:]:
        if str(i) not in s:
            s += str(i)
        else:
            l.remove(i)

    l.sort()
    return l


def dedup_02(nums: List[int]) -> List[int]:
    """filter"""
    res = []
    res = filter(dedup_01, nums[:])
    return list(res)


"""
    TestCase
"""


class TestCase(unittest.TestCase):
    def test_dedup_01(self):
        self.assertEqual(dedup_01([1, 1, 2]), [1, 2])
        self.assertEqual(dedup_01([1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), [1, 2])

    def test_dedup_02(self):
        self.assertEqual(dedup_02([1, 1, 2]), [0, 0, 4])
        self.assertEqual(dedup_02([1, 1, 2, 1, 3]), [0, 0, 4, 0, 9])


if __name__ == '__main__':
    unittest.main()
