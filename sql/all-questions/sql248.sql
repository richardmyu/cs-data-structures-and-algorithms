-- SQL248 平均工资
SELECT
  AVG(salary) AS avg_salary
FROM
  salaries
WHERE
  to_date = '9999-01-01'
  AND salary <> (
    SELECT
      MAX(salary) AS max_salary
    FROM
      salaries
    WHERE
      to_date = '9999-01-01'
  )
  AND salary <> (
    SELECT
      MIN(salary) AS min_salary
    FROM
      salaries
    WHERE
      to_date = '9999-01-01'
  );

-- CASE 2
SELECT
  (SUM(salary) - MAX(salary) - MIN(salary)) / (COUNT(1) -2) AS avg_salary
FROM
  salaries
WHERE
  to_date = '9999-01-01';
