-- SQL254 统计salary的累计和running_total
SELECT
  emp_no,
  salary,
  SUM(salary) OVER (
    ORDER BY
      emp_no
  ) AS running_total
FROM
  salaries
WHERE
  to_date = '9999-01-01';
