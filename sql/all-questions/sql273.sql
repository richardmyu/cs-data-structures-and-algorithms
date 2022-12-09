-- SQL273 牛客的课程订单分析(三)
SELECT
  id,
  user_id,
  product_name,
  status,
  client_id,
  date
FROM
  (
    SELECT
      id,
      user_id,
      product_name,
      status,
      client_id,
      date,
      COUNT(*) OVER (
        PARTITION BY user_id
        ORDER BY
          user_id
      ) AS cnt
    FROM
      order_info
    WHERE
      date > '2025-10-15'
      AND status = 'completed'
      AND product_name IN ('C++', 'Java', 'Python')
  ) AS OED
WHERE
  cnt >= 2
ORDER BY
  id;
