-- SQL242 将所有获取奖金的员工当前的薪水增加10 %
-- INNER JOIN
UPDATE
  salaries AS S
  INNER JOIN emp_bonus AS EB ON S.emp_no = EB.emp_no
SET
  salary = salary * (1 + 0.1)
WHERE
  to_date = '9999-01-01';

-- 子查询
-- You can 't specify target table ' salaries ' for update in FROM clause
UPDATE
  salaries
SET
  salary = salary * (1 + 0.1)
WHERE
  emp_no IN (
    SELECT
      S.emp_no
    FROM
      salaries AS S
      INNER JOIN emp_bonus AS EB ON S.emp_no = EB.emp_no
    WHERE
      to_date = '9999-01-01'
  );

-- 子查询 正常版
UPDATE
  salaries
SET
  salary = salary * (1 + 0.1)
WHERE
  to_date = '9999-01-01'
  AND emp_no IN (
    SELECT
      emp_no
    FROM
      emp_bonus
  );
