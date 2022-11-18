-- SQL253 获取有奖金的员工相关信息
SELECT
  E.emp_no,
  E.first_name,
  E.last_name,
  EB.btype,
  S.salary,
  CASE
    EB.btype
    WHEN 1 THEN S.salary * 0.1
    WHEN 2 THEN S.salary * 0.2
    ELSE S.salary * 0.3
  END AS bonus
FROM
  employees AS E
  INNER JOIN emp_bonus AS EB ON E.emp_no = EB.emp_no
  INNER JOIN salaries AS S ON E.emp_no = S.emp_no
WHERE
  to_date = '9999-01-01';
