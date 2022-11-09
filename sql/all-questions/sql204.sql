-- SQL204 获取所有非manager的员工emp_no
SELECT
  emp_no
FROM
  employees
WHERE
  emp_no NOT IN (
    SELECT
      emp_no
    FROM
      dept_manager
  );
