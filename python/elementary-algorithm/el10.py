from typing import List


class Solution:
    # case 01
    def is_valid_sudoku(self, board: List[List[str]]) -> bool:
        s = []

        for i in range(9):
            # 横
            a_x = []
            a_x = list(filter(lambda _: _ != '.', board[i]))

            if len(a_x) != len(set(a_x)):
                return False

            # 纵
            b_x = []
            for j in range(9):
                if board[j][i] != '.':
                    b_x.append(board[j][i])

            if len(b_x) != len(set(b_x)):
                return False

        # 小九宫格
        z_x = []
        for x in range(9):
            for y in range(9):
                z_x = []
                if x < 3 and y < 3 and board[x][y] != '.':
                    z_x.append(board[x][y])

                print('==', z_x)
                if len(z_x) != len(set(z_x)):
                    return False

                z_x = []
                if x < 3 and 3 <= y < 6:
                    z_x.append(board[x][y])

                if len(z_x) != len(set(z_x)):
                    return False

                z_x = []
                if x < 3 and 6 <= y:
                    z_x.append(board[x][y])

                if len(z_x) != len(set(z_x)):
                    return False

                z_x = []
                if 3 <= x < 6 and y < 3:
                    z_x.append(board[x][y])

                if len(z_x) != len(set(z_x)):
                    return False

                z_x = []
                if 3 <= x < 6 and (3 <= y < 6):
                    z_x.append(board[x][y])

                if len(z_x) != len(set(z_x)):
                    return False

                z_x = []
                if 6 <= x and 6 <= y:
                    z_x.append(board[x][y])

                if len(z_x) != len(set(z_x)):
                    return False

                z_x = []
                if x < 3 and y < 3:
                    z_x.append(board[x][y])

                if len(z_x) != len(set(z_x)):
                    return False

                z_x = []
                if 3 <= x < 6 and (3 <= y < 6):
                    z_x.append(board[x][y])

                if len(z_x) != len(set(z_x)):
                    return False

                z_x = []
                if 6 <= x and 6 <= y:
                    z_x.append(board[x][y])

                if len(z_x) != len(set(z_x)):
                    return False

        print('---' * 6)

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
