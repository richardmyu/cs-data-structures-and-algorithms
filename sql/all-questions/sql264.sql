-- SQL264 牛客每个人最近的登录日期(五)
-- 3.计算二日存率
SELECT
  date,
  ROUND(COUNT(sec_c) / COUNT(*), 3) AS p
FROM
  (
    -- 2.判断每日新用户第二天是否登录，登录为 1，否则为 NULL
    SELECT
      NL.date,
      CASE
        WHEN new_user_id IN (
          SELECT
            user_id
          FROM
            login
          WHERE
            date = DATE_ADD(NL.date, INTERVAL 1 DAY)
        ) THEN 1
        ELSE NULL
      END AS sec_c
    FROM
      (
        -- 1.获取每日新用户，没有也要记
        SELECT
          date,
          0 AS new_user_id
        FROM
          login
        WHERE
          date NOT IN (
            SELECT
              date
            FROM
              login AS L
            WHERE
              date IN (
                SELECT
                  MIN(date)
                FROM
                  login
              )
              OR user_id NOT IN (
                SELECT
                  user_id
                FROM
                  login
                WHERE
                  date < L.date
              )
          )
        UNION
        SELECT
          date,
          user_id AS new_user_id
        FROM
          login AS L
        WHERE
          date IN (
            SELECT
              MIN(date)
            FROM
              login
          )
          OR user_id NOT IN (
            SELECT
              user_id
            FROM
              login
            WHERE
              date < L.date
          )
      ) AS NL
  ) AS NNL
GROUP BY
  date
ORDER BY
  date;
