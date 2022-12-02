-- SQL269 考试分数(四)
SELECT
  job,
  CEILING(MAX(ranking) / 2) AS start,
  CASE
    WHEN MAX(ranking) % 2 = 0 THEN CEILING(MAX(ranking) / 2) + 1
    ELSE CEILING(MAX(ranking) / 2)
  END AS 'end'
FROM
  (
    SELECT
      job,
      ROW_NUMBER() OVER (
        PARTITION BY job
        ORDER BY
          score DESC
      ) AS ranking
    FROM
      grade
  ) AS RL
GROUP BY
  job
ORDER BY
  job;
