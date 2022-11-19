-- SQL261 牛客每个人最近的登录日期(二)
SELECT
  U.name AS u_n,
  C.name AS c_n,
  date
FROM
  login AS L
  INNER JOIN user AS U ON L.user_id = U.id
  INNER JOIN client AS C ON L.client_id = C.id
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
  u_n;
