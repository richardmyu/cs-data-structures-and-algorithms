-- SQL238 将id = 5 以及emp_no = 10001 的行数据替换成id = 5 以及emp_no = 10005
UPDATE
  titles_test
SET
  emp_no = REPLACE(emp_no, 10001, 10005)
WHERE
  id = 5;
