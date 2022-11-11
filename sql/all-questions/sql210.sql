-- SQL210 统计出当前各个title类型对应的员工当前薪水对应的平均工资
SELECT
  T.title,
  avg(S.salary)
FROM
  titles AS T
  INNER JOIN salaries AS S ON T.emp_no = S.emp_no
GROUP BY
  title
ORDER BY
  avg(S.salary);
