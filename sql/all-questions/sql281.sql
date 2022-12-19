-- SQL281 最差是第几名(一)
SELECT
  grade,
  SUM(number) OVER (
    ORDER BY
      grade
  ) AS t_rank
FROM
  (
    SELECT
      grade,
      number
    FROM
      class_grade
    ORDER BY
      grade
  ) AS OC
ORDER BY
  grade;
