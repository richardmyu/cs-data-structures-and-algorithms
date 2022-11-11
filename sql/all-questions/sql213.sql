-- SQL213 查找所有员工的last_name和first_name以及对应的dept_name
SELECT
  last_name,
  first_name,
  dept_name
FROM
  employees AS E
  INNER JOIN dept_emp AS DE ON E.emp_no = DE.emp_no
  INNER JOIN departments AS D ON DE.dept_no = D.dept_no
UNION
SELECT
  last_name,
  first_name,
  (NULL) AS dept_name
FROM
  employees
WHERE
  emp_no NOT IN (
    SELECT
      emp_no
    FROM
      dept_emp
  );
