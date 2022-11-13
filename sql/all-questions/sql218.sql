-- SQL218 获取所有非manager员工当前的薪水情况
SELECT
  DE.dept_no,
  DE.emp_no,
  S.salary
FROM
  dept_emp AS DE
  INNER JOIN salaries AS S ON DE.emp_no = S.emp_no
WHERE
  DE.emp_no NOT IN (
    SELECT
      emp_no
    FROM
      dept_manager
  );
