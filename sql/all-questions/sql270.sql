-- SQL270 考试分数(五)
SELECT
  G.id,
  G.job,
  G.score,
  G.t_rank
FROM
  (
    SELECT
      id,
      job,
      score,
      ROW_NUMBER() OVER (
        PARTITION BY job
        ORDER BY
          score DESC
      ) AS t_rank
    FROM
      grade
  ) AS G
  INNER JOIN (
    SELECT
      job,
      FLOOR((MAX(ranking) + 1) / 2) AS 'st',
      CEILING((MAX(ranking) + 1) / 2) AS 'en'
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
  ) AS RLL ON G.job = RLL.job
WHERE
  t_rank <= RLL.en
  AND t_rank >= RLL.st
ORDER BY
  id;
