-- SQL259 异常的邮件概率
SELECT
  date,
  ROUND(SUM(cnt) / COUNT(*), 3) AS p
FROM
  (
    SELECT
      date,
      CASE
        type
        WHEN 'no_completed' THEN 1
        ELSE 0
      END AS cnt
    FROM
      email
    WHERE
      send_id NOT IN (
        SELECT
          id
        FROM
          user
        WHERE
          is_blacklist = 1
      )
      AND receive_id NOT IN (
        SELECT
          id
        FROM
          user
        WHERE
          is_blacklist = 1
      )
  ) AS SC
GROUP BY
  date;
