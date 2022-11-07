-- SQL197 查找当前薪水详情以及部门编号dept_no
SELECT
  S.emp_no,
  S.salary,
  S.from_date,
  S.to_date,
  DM.dept_no
FROM
  salaries AS S
  INNER JOIN dept_manager AS DM ON S.emp_no = DM.emp_no
ORDER BY
  S.emp_no;
