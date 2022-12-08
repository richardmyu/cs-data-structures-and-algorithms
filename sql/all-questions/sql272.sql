-- SQL272 牛客的课程订单分析(二)
SELECT
  user_id
FROM
  order_info
WHERE
  date > '2025-10-15'
  AND status = 'completed'
  AND product_name IN ('C++', 'Java', 'Python')
GROUP BY
  user_id
HAVING
  COUNT(*) >= 2
ORDER BY
  user_id;
