from typing import List
import copy


class Solution:
    @staticmethod
    def rotate(matrix: List[List[int]]) -> None:
        deep_copy_matrix = copy.deepcopy(matrix)
        deep_copy_matrix.reverse()

        for i in range(len(matrix)):
            for j, val in enumerate(deep_copy_matrix):
                matrix[i][j] = val[i]

        return matrix


# solution = Solution()
# print(solution.rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
# # [[7, 4, 1],[8, 5, 2],[9, 6, 3]]
# print(solution.rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]))
# # [[15, 13, 2, 5],[14, 3, 4, 1],[12, 6, 8, 9],[16, 7, 10, 11]]
