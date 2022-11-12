-- SQL216 统计各个部门的工资记录数
SELECT
  D.dept_no,
  D.dept_name,
  DE.sum
FROM
  departments AS D
  INNER JOIN (
    SELECT
      DE.dept_no,
      COUNT(S.salary) AS sum
    FROM
      dept_emp AS DE
      INNER JOIN salaries AS S ON DE.emp_no = S.emp_no
    GROUP BY
      dept_no
    ORDER BY
      dept_no
  ) AS DE ON D.dept_no = DE.dept_no
ORDER BY
  dept_no;
