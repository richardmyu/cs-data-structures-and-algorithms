-- SQL247 按照dept_no进行汇总
SELECT
  dept_no,
  GROUP_CONCAT(emp_no) AS employees
FROM
  dept_emp
GROUP BY
  dept_no;
