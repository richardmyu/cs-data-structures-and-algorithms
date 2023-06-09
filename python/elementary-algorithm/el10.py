from typing import List


class Solution:
    # case 01
    @staticmethod
    def is_valid_sudoku(board: List[List[str]]) -> bool:
        for i in range(9):
            # 横
            a_x = []
            a_x = list(filter(lambda _: _ != '.', board[i]))

            if len(a_x) != len(list(set(a_x))):
                return False

            # 纵
            b_x = []
            for j in range(9):
                if board[j][i] != '.':
                    b_x.append(board[j][i])

            if len(b_x) != len(list(set(b_x))):
                return False

        # 小九宫格
        z_x = [[] for i in range(9)]
        for x in range(9):
            for y in range(9):
                if x < 3 and y < 3 and board[x][y] != '.':
                    z_x[0].append(board[x][y])
                elif x < 3 and 3 <= y < 6 and board[x][y] != '.':
                    z_x[1].append(board[x][y])
                elif x < 3 and 6 <= y and board[x][y] != '.':
                    z_x[2].append(board[x][y])
                elif 3 <= x < 6 and y < 3 and board[x][y] != '.':
                    z_x[3].append(board[x][y])
                elif 3 <= x < 6 and 3 <= y < 6 and board[x][y] != '.':
                    z_x[4].append(board[x][y])
                elif 3 <= x < 6 and 6 <= y and board[x][y] != '.':
                    z_x[5].append(board[x][y])
                elif 6 <= x and y < 3 and board[x][y] != '.':
                    z_x[6].append(board[x][y])
                elif 6 <= x and 3 <= y < 6 and board[x][y] != '.':
                    z_x[7].append(board[x][y])
                elif 6 <= x and 6 <= y and board[x][y] != '.':
                    z_x[8].append(board[x][y])

        for ary in z_x:
            if len(ary) != len(list(set(ary))):
                return False

        return True


solution = Solution()
print(solution.is_valid_sudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."]
                                   , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
                                   , [".", "9", "8", ".", ".", ".", ".", "6", "."]
                                   , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
                                   , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
                                   , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
                                   , [".", "6", ".", ".", ".", ".", "2", "8", "."]
                                   , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
                                   , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))
# true
print(solution.is_valid_sudoku([["8", "3", ".", ".", "7", ".", ".", ".", "."]
                                   , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
                                   , [".", "9", "8", ".", ".", ".", ".", "6", "."]
                                   , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
                                   , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
                                   , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
                                   , [".", "6", ".", ".", ".", ".", "2", "8", "."]
                                   , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
                                   , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))
# false
print(solution.is_valid_sudoku([["9", "3", ".", ".", "7", ".", ".", ".", "."]
                                   , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
                                   , [".", "9", "8", ".", ".", ".", ".", "6", "."]
                                   , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
                                   , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
                                   , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
                                   , [".", "6", ".", ".", ".", ".", "2", "8", "."]
                                   , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
                                   , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))
# false
