-- SQL233 针对上面的salaries表emp_no字段创建索引idx_emp_no
-- EXPLAIN
SELECT
  *
FROM
  salaries FORCE INDEX (idx_emp_no)
WHERE
  emp_no = '10005';
