-- SQL267 考试分数(二)
SELECT
  id,
  job,
  score
FROM
  grade AS G
WHERE
  score > (
    SELECT
      AVG(score)
    FROM
      grade AS ING
    WHERE
      job = G.job
  )
ORDER BY
  id;
