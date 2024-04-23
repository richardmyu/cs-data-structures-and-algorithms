"""
1.以同一个子字符分割字符，获得多个可能是回文的子串
2.构造回文函数进行判断，
3.获取最长回文子串
"""


class Solution_1:
    def longest_palindrome(self, s: str) -> str:
        s_len = len(s)
        subs = ''
        list = []

        if s_len == 0:
            return ''

        if s_len == 1:
            return s

        for index, value in enumerate(s):
            next_index = index + 1

            while True:
                next_index = s.find(value, next_index)
                if next_index > 0:
                    list.append(s[index : next_index + 1])
                    next_index = next_index + 1
                else:
                    break

        if len(list) == 0:
            return s[0]

        for item in list:
            if self.isPalindrome(item):
                if len(subs) < len(item):
                    subs = item

        if subs in list:
            return subs
        else:
            return list[0][0]

    def isPalindrome(self, s: str) -> bool:
        if len(s) == 0 or len(s) == 1:
            return True

        for index, value in enumerate(s):
            if index <= int(len(s) / 2) and value != s[len(s) - 1 - index]:
                return False

        return True


solution1 = Solution1()
print(solution1.longest_palindrome(""))  # ''
print(solution1.longest_palindrome(" "))  # ' '
print(solution1.longest_palindrome("abc"))  # 'a'
print(solution1.longest_palindrome("abcda"))  # 'a'
print(solution1.longest_palindrome("babad"))  # 'bab'
