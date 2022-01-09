/*
177. 第N高的薪水

编写一个 SQL 查询，获取 Employee 表中第 n 高的薪水（Salary）。

+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
例如上述 Employee 表，n = 2 时，应返回第二高的薪水 200。如果不存在第 n 高的薪水，那么查询应返回 null。

+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/nth-highest-salary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
解法 1
  282ms, 5.08%
  0MB, 100%

思路
  基本同 0176 的第二方法，问题在于没写过 SQL 函数，对于参数 N 的处理，是参考评论区的；

小结
 */
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
set N = N - 1;
  RETURN (
      # Write your MySQL query statement below.
      SELECT ifNull((SELECT DISTINCT Salary
                 FROM Employee
                ORDER BY Salary DESC LIMIT N,1), NULL)
        AS SecondHighestSalary
  );
END
