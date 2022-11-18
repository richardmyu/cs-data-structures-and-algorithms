-- SQL257 刷题通过的题目排名
SELECT
  id,
  number,
  DENSE_RANK() OVER(
    ORDER BY
      number DESC
  ) AS t_rank
FROM
  passing_number
ORDER BY
  number DESC,
  id;
