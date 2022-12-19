-- SQL282 最差是第几名(二)
-- TODO: fail
SELECT
  OC.grade
FROM
  (
    SELECT
      grade,
      (
        SUM(number) OVER (
          ORDER BY
            grade
        ) - number
      ) AS t_rank,
      SUM(number) OVER (
        ORDER BY
          grade
      ) AS b_rank
    FROM
      class_grade
    ORDER BY
      grade
  ) AS OC
  INNER JOIN (
    SELECT
      grade,
      CASE
        WHEN (
          SELECT
            SUM(number)
          FROM
            class_grade
        ) % 2 <> 0 THEN CEILING(
          (
            SELECT
              SUM(number)
            FROM
              class_grade
          ) / 2
        )
        ELSE (
          (
            SELECT
              SUM(number)
            FROM
              class_grade
          ) / 2
        )
      END AS meidan,
      CASE
        WHEN (
          SELECT
            SUM(number)
          FROM
            class_grade
        ) % 2 = 0 THEN (
          SELECT
            SUM(number)
          FROM
            class_grade
        ) / 2 + 1
        ELSE NULL
      END AS sec_meidan
    FROM
      class_grade
  ) AS MC ON OC.grade = MC.grade
WHERE
  (
    MAX(b_rank) % 2 <> 0
    AND meidan BETWEEN t_rank
    AND b_rank
  )
  OR (
    meidan BETWEEN t_rank
    AND b_rank
    AND sec_meidan BETWEEN t_rank
    AND b_rank
  )
ORDER BY
  grade;
