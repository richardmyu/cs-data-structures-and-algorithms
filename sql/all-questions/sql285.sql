-- SQL285 获得积分最多的人(三)
SELECT
  U.id,
  U.name,
  GI.grade_num
FROM
  user AS U
  INNER JOIN (
    SELECT
      user_id,
      grade_num,
      DENSE_RANK() OVER(
        ORDER BY
          grade_num DESC
      ) AS ranking
    FROM
      (
        SELECT
          user_id,
          SUM(grade_num) AS grade_num
        FROM
          (
            SELECT
              user_id,
              CASE
                WHEN type = 'add' THEN grade_num
                ELSE 0 - grade_num
              END AS grade_num
            FROM
              grade_info
          ) AS a
        GROUP BY
          user_id
      ) AS SU
  ) AS GI ON U.id = GI.user_id
WHERE
  ranking = 1
ORDER BY
  id;
