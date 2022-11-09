-- SQL206 获取每个部门中当前员工薪水最高的相关信息
-- 难点：
-- 使用 GROUP BY，则 emp_no 无法通过分组；
-- 使用 窗口函数，则缺乏汇总功能，无法剔除同一部门的其他人
-- 使用窗口函数获取必要信息，同时添加 rank 信息，用以在下一轮筛选
SELECT
  dept_no,
  emp_no,
  maxSalary
FROM
  (
    SELECT
      DE.dept_no,
      DE.emp_no,
      (S.salary) AS maxSalary,
      DENSE_RANK () OVER (
        PARTITION BY dept_no
        ORDER BY
          salary DESC
      ) AS rank_salary
    FROM
      dept_emp AS DE
      INNER JOIN salaries AS S ON DE.emp_no = S.emp_no
  ) AS a
WHERE
  rank_salary = 1;
