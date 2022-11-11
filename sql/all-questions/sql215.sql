-- SQL215 查找在职员工自入职以来的薪水涨幅情况
SELECT
  E.emp_no,
  (MAXS.last_salary - MINS.first_salary) AS growth
FROM
  employees AS E
  INNER JOIN (
    SELECT
      FS.emp_no,
      salary AS first_salary
    FROM
      salaries AS FS
    WHERE
      from_date =(
        SELECT
          MIN(from_date)
        FROM
          salaries
        WHERE
          emp_no = FS.emp_no
      )
  ) AS MINS ON E.emp_no = MINS.emp_no
  INNER JOIN (
    SELECT
      emp_no,
      salary AS last_salary
    FROM
      salaries AS FS
    WHERE
      to_date = '9999-01-01'
  ) AS MAXS ON E.emp_no = MAXS.emp_no
ORDER BY
  growth;
