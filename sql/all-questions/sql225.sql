-- SQL226 将employees表的所有员工的last_name和first_name拼接起来作为Name
SELECT
  CONCAT(last_name, ' ', first_name) AS name
FROM
  employees;
