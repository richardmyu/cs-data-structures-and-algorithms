from typing import List


class Solution:
    @staticmethod
    def rotate(matrix: List[List[int]]) -> None:
        for i in range(len(matrix)):
            for j in matrix[:]:
                print(i, j, j[i])
                idj = matrix.index(j)
                matrix[idj].append(j[i])
                matrix[idj].pop(i)
                # j.pop(i)
                # j.append(j[i])

        return matrix


solution = Solution()
print(solution.rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
# [[7, 4, 1],[8, 5, 2],[9, 6, 3]]
# print(solution.rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]))
# # [[15, 13, 2, 5],[14, 3, 4, 1],[12, 6, 8, 9],[16, 7, 10, 11]]
