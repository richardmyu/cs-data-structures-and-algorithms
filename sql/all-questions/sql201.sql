-- SQL201 查找薪水记录超过15条的员工号emp_no以及其对应的记录次数t
SELECT
  emp_no,
  COUNT(*) AS t
FROM
  salaries
GROUP BY
  emp_no
HAVING
  t >= 15;
