-- SQL263 牛客每个人最近的登录日期(四)
SELECT
  date,
  0 AS new
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
  COUNT(*) AS new
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
GROUP BY
  date
ORDER BY
  date;
