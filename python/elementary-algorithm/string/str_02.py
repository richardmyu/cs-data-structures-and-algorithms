import math


class Solution:
    @staticmethod
    def reverse(x: int) -> int:
        is_negative = False

        if x < 0:
            is_negative = True
            x = int(math.fabs(x))
        l = len(str(x))
        res = 0

        for i in range(l):
            res += int(x % 10 * math.pow(10, l - 1 - i))
            x = int(x / 10)

        if is_negative:
            res = int(0 - res)

        if res > (math.pow(2, 31) - 1) or res < math.pow(-2, 31):
            return 0
        else:
            return res


# solution = Solution()
# print(solution.reverse(12))
# # 21
# print(solution.reverse(123))
# # 321
# print(solution.reverse(-123))
# # -321
# print(solution.reverse(120))
# # 21
# print(solution.reverse(-120))
# # -21
# print(solution.reverse(0))
# # 0
