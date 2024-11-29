# !/usr/bin/env python
# coding= utf-8
"""
@Project         : cs-data-structures-and-algorithms
@File            : A0001.py
@Author          : yum <richardminyu@foxmail.com>
@Date            : 2024/11/29 21:58
@Description     : 1. 两数之和

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

你可以按任意顺序返回答案。



示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]


提示：

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案


进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？
"""

from typing import List


def twoSum(nums: List[int], target: int) -> List[int]:
    for n in nums:
        res = target - n
        n_index = nums.index(n)
        if res in nums[:n] + nums[n:]:
            res_index = nums.index(res)
            print([n_index, res_index])


if __name__ == "__main__":
    print("------ test begin -----")
    twoSum([2, 7, 11, 15], 9)  # [0, 1]
    twoSum([3, 2, 4], 6)  # [1, 2]
    twoSum([3, 3], 6)  # [0, 1]
    twoSum([2, 7, 11, 15], 10)  # error
    print("------ test end -----")
