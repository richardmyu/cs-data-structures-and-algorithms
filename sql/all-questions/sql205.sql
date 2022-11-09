-- SQL205 获取所有员工当前的manager
SELECT
  DE.emp_no,
  (DM.emp_no) AS manager
FROM
  dept_emp AS DE
  INNER JOIN dept_manager AS DM ON DE.dept_no = DM.dept_no
WHERE
  DE.emp_no NOT IN (
    SELECT
      emp_no
    FROM
      dept_manager
  );
