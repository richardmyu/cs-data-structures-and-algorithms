/*
176. 第二高的薪水

编写一个 SQL 查询，获取 Employee 表中第二高的薪水（Salary） 。

+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+

例如上述 Employee 表，SQL查询应该返回 200 作为第二高的薪水。如果不存在第二高的薪水，那么查询应返回 null。

+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/second-highest-salary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
解法 1
  282ms, 5.08%
  0MB, 100%

思路

  --> 1.子查询
  --> 2.两次 MAX，取出第二

小结
  1.使用了双循环，时间复杂度比较大；
  2.针对 N 高情况，无法应对；
 */
SELECT MAX(salary) AS SecondHighestSalary
  FROM Employee
 WHERE salary <> (SELECT MAX(salary)
          FROM Employee);

/**
解法 2
  282ms, 5.08%
  0MB, 100%

思路
  之前不知道 limit，知道后就简单了，一次排序，输出第二行...对 null 处理不对

小结
  1.使用了双循环，时间复杂度比较大；
 */

--  PostgreSQL
SELECT salary AS SecondHighestSalary
  FROM (SELECT salary FROM Employee ORDER BY salary DESC) AS OrderEmployee
  LIMIT 1 OFFSET 1;

-- MySQL
SELECT ifNull((SELECT DISTINCT Salary
                 FROM Employee
                ORDER BY Salary DESC LIMIT 1,1), NULL)
        AS SecondHighestSalary;
