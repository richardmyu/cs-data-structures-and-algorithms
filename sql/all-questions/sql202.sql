-- SQL202 找出所有员工当前薪水salary情况
-- CASE 1
SELECT
  DISTINCT salary
FROM
  salaries
ORDER BY
  salary DESC;

-- CASE 2
SELECT
  salary
FROM
  salaries
GROUP BY
  salary
ORDER BY
  salary DESC;

-- CASE 3
-- ...
SELECT
  salary
FROM
  (
    SELECT
      salary,
      RANK() OVER (
        ORDER BY
          salary
      ) AS rank_salary
    FROM
      salaries
  ) AS a
GROUP BY
  salary
ORDER BY
  salary DESC;
