-- SQL209 查找employees表emp_no与last_name的员工信息
SELECT
  emp_no,
  birth_date,
  first_name,
  last_name,
  gender,
  hire_date
FROM
  employees
WHERE
  emp_no % 2 <> 0
  AND last_name <> 'Mary'
ORDER BY
  hire_date DESC;
