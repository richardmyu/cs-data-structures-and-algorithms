-- SQL268 考试分数(三)
SELECT
  id,
  name,
  score
FROM
  (
    SELECT
      G.id,
      L.name,
      G.score,
      DENSE_RANK() OVER (
        PARTITION BY L.name
        ORDER BY
          G.score DESC
      ) AS ranking
    FROM
      grade AS G
      INNER JOIN language AS L ON G.language_id = L.id
  ) AS RANK_GL
WHERE
  ranking <= 2
ORDER BY
  name,
  score DESC,
  id;
