-- SQL283 获得积分最多的人(一)
SELECT
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
          grade_info
        GROUP BY
          user_id
      ) AS SU
  ) AS GI ON U.id = GI.user_id
WHERE
  ranking = 1;
