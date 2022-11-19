-- SQL262 牛客每个人最近的登录日期(三)
SELECT
  ROUND(COUNT(sec_date) / COUNT(*), 3) AS p
FROM
  (
    SELECT
      FL.user_id,
      FL.date AS fir_date,
      CASE
        WHEN DATE_ADD(FL.date, INTERVAL 1 DAY) IN (
          SELECT
            date
          FROM
            login AS L
          WHERE
            FL.user_id = L.user_id
        ) THEN DATE_ADD(FL.date, INTERVAL 1 DAY)
        ELSE NULL
      END AS sec_date
    FROM
      (
        SELECT
          user_id,
          date
        FROM
          login AS L
        WHERE
          date IN (
            SELECT
              MIN(date)
            FROM
              login AS IL
            WHERE
              L.user_id = IL.user_id
          )
      ) AS FL
  ) AS ORDERL;

-- 失败的方向
-- SELECT
--   SECL.user_id,
--   SECL.date AS fir_date,
--   DATE_ADD(SECL.date, INTERVAL 1 DAY) AS t_date,
--   CASE
--     WHEN DATE_ADD(SECL.date, INTERVAL 1 DAY) IN (
--       SELECT
--         date
--       FROM
--         login AS L
--       WHERE
--         SECL.user_id = L.user_id
--     ) THEN DATE_ADD(SECL.date, INTERVAL 1 DAY)
--     ELSE NULL
--   END AS sec_date
-- FROM
--   login AS L
--   INNER JOIN (
--     SELECT
--       user_id,
--       date
--     FROM
--       login AS L
--     WHERE
--       date IN (
--         SELECT
--           MIN(date)
--         FROM
--           login AS IL
--         WHERE
--           L.user_id = IL.user_id
--       )
--   ) AS SECL ON L.user_id = SECL.user_id;
