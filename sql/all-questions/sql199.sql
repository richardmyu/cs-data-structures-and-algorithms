-- SQL199 查找所有员工的last_name和first_name以及对应部门编号dept_no
SELECT
  E.last_name,
  E.first_name,
  CASE
    WHEN DE.dept_no IS NULL THEN NULL
    ELSE DE.dept_no
  END AS dept_no
FROM
  employees AS E
  INNER JOIN dept_emp AS DE ON E.emp_no = DE.emp_no
UNION
SELECT
  last_name,
  first_name,
  NULL AS dept_no
FROM
  employees
WHERE
  emp_no NOT IN (
    SELECT
      emp_no
    FROM
      dept_emp
  );
