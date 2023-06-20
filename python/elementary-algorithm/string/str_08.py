class Solution:
    # case 01
    @staticmethod
    def count_and_say(n: int) -> str:
        res = ''
        if n == 1:
            res = '1'
            return res
        else:
            tem = Solution.count_and_say(n - 1)
            i = 0
            s = ''
            count = 0

            while i < len(tem):
                s = tem[i]

                while i < len(tem) and tem[i] == s:
                    i += 1
                    count += 1
                res = res + str(count) + str(s)
                count = 0

            return res


# solution = Solution()
# print(solution.count_and_say(1))
# # '1'
# print(solution.count_and_say(2))
# # '11'
# print(solution.count_and_say(3))
# # '21'
# print(solution.count_and_say(4))
# # '1211'
# print(solution.count_and_say(5))
# # '111221'
# print(solution.count_and_say(6))
# # '312211'
