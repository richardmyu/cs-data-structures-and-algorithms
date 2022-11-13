-- SQL212  获取当前薪水第二多的员工的 emp_no 以及其对应的薪水 salary
SELECT
  E.emp_no,
  SE.salary,
  E.last_name,
  E.first_name
FROM
  employees AS E
  INNER JOIN (
    SELECT
      emp_no,
      salary
    FROM
      salaries
    WHERE
      salary =(
        SELECT
          MAX(salary)
        FROM
          (
            SELECT
              emp_no,
              salary
            FROM
              salaries
            WHERE
              salary < (
                SELECT
                  MAX(salary)
                FROM
                  salaries
              )
          ) AS DRE
      )
  ) AS SE ON E.emp_no = SE.emp_no;

-- SELECT
--   E.emp_no,
--   SE.salary,
--   E.last_name,
--   E.first_name
-- FROM
--   employees AS E
--   INNER JOIN (
--     SELECT
--       emp_no,
--       salary
--     FROM
--       (
--         SELECT
--           emp_no,
--           salary,
--           DENSE_RANK() OVER (
--             ORDER BY
--               salary DESC
--           ) AS dense_ranking
--         FROM
--           salaries
--       ) AS DRE
--     WHERE
--       dense_ranking = 2
--   ) AS SE ON E.emp_no = SE.emp_no;
