-- SQL265 牛客每个人最近的登录日期(六)
SELECT
  u_n,
  date,
  (
    SELECT
      SUM(PN.number)
    FROM
      passing_number AS PN
      INNER JOIN user AS U ON PN.user_id = U.id
    WHERE
      DAYS.date >= PN.date
      AND DAYS.u_n = U.name
  ) AS ps_num
FROM
  (
    SELECT
      U.name AS u_n,
      PN.date,
      SUM(PN.number) AS day_num
    FROM
      passing_number AS PN
      INNER JOIN user AS U ON PN.user_id = U.id
    GROUP BY
      u_n,
      date
  ) AS DAYS
ORDER BY
  date,
  u_n;
