-- 查找所有已经分配部门的员工的last_name和first_name以及dept_no
SELECT
  E.last_name,
  E.first_name,
  DE.dept_no
FROM
  employees AS E
  INNER JOIN dept_emp AS DE ON E.emp_no = DE.emp_no
WHERE
  dept_no IS NOT NULL;
