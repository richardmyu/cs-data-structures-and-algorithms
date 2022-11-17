-- SQL244 将employees表中的所有员工的last_name和first_name通过引号连接起来 。
SELECT
  CONCAT(last_name, "'", first_name) AS name
FROM
  employees;
