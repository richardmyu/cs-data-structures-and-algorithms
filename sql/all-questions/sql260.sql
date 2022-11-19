-- SQL260 牛客每个人最近的登录日期(一)
SELECT
  user_id,
  date AS id
FROM
  login AS L
WHERE
  date IN (
    SELECT
      MAX(date)
    FROM
      login AS IL
    WHERE
      L.user_id = IL.user_id
  )
ORDER BY
  user_id;
