/*
175. 组合两个表

表1: Person

+-------------+---------+
| 列名         | 类型     |
+-------------+---------+
| PersonId    | int     |
| FirstName   | varchar |
| LastName    | varchar |
+-------------+---------+
PersonId 是上表主键

表2: Address

+-------------+---------+
| 列名         | 类型    |
+-------------+---------+
| AddressId   | int     |
| PersonId    | int     |
| City        | varchar |
| State       | varchar |
+-------------+---------+
AddressId 是上表主键
 

编写一个 SQL 查询，满足条件：无论 person 是否有地址信息，都需要基于上述两表提供 person 的以下信息：

FirstName, LastName, City, State

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combine-two-tables
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
-- {"headers":{"Person":["personId","lastName","firstName"],
--             "Address":["addressId","personId","city","state"]},
-- "rows":{"Person":[[1,"Wang","Allen"],[2,"Alice","Bob"]],
--         "Address":[[1,2,"New York City","New York"],[2,3,"Leetcode","California"]]}}
/**
解法 1
  432ms, 37.47%

思路
  无论 person 是否有地址信息，都要有 FirstName, LastName, City, State
  --> 1.以 Person 为主表
  --> 2.外联结

小结
  1.使用了双循环，时间复杂度比较大；
  2.开辟了一个数组和一个字符串空间，内存消耗也大；
 */
SELECT P.FirstName, P.LastName, A.City, A.State
  FROM Address AS A RIGHT OUTER JOIN Person AS P
  ON P.PersonId = A.PersonId;
