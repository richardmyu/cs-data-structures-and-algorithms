import math


class Solution:
    # case 01
    @staticmethod
    def my_atoi(s: str) -> int:
        s = s.strip()
        is_negative = False
        res = 0
        res_l = []

        if len(s) == 0:
            return int(res)
        elif s[0] == '-':
            s = s[1:]
            is_negative = True
        elif s[0] == '+':
            s = s[1:]

        if len(s) == 0:
            return res
        elif not s[0].isdigit():
            return int(res)
        else:
            for i in s:
                if i.isdigit():
                    res_l.insert(0, int(i))
                else:
                    break

        for i, val in enumerate(res_l):
            res += val * math.pow(10, i)

        if is_negative:
            res = 0 - int(res)
        else:
            res = int(res)

        if math.pow(-2, 31) > res:
            return int(math.pow(-2, 31))
        elif res > (math.pow(2, 31) - 1):
            return int(math.pow(2, 31) - 1)
        else:
            return res


# solution = Solution()
# print(solution.my_atoi(""))
# # 0
# print(solution.my_atoi("+"))
# # 0
# print(solution.my_atoi("42"))
# # 42
# print(solution.my_atoi("2147483648"))
# # 2147483648
# print(solution.my_atoi("-91283472332"))
# # -2147483648
# print(solution.my_atoi("  -42"))
# # -42
# print(solution.my_atoi("4193 with words"))
# # 4193
# print(solution.my_atoi("with words 4193"))
# # 0
# print(solution.my_atoi("41.93 with words"))
# # 41
