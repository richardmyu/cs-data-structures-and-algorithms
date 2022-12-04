-- SQL271 牛客的课程订单分析(一)
SELECT
  id,
  user_id,
  product_name,
  status,
  client_id,
  date
FROM
  order_info
WHERE
  date > '2025-10-15'
  AND status = 'completed'
  AND product_name IN ('C++', 'Java', 'Python')
ORDER BY
  id;
