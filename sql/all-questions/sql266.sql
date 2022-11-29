-- SQL266 考试分数(一)
SELECT
  job,
  ROUND(AVG(score), 3) AS avg
FROM
  grade
GROUP BY
  job
ORDER BY
  avg DESC;
