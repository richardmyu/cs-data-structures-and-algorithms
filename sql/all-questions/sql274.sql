-- SQL274 牛客的课程订单分析(四)
SELECT
  user_id,
  MIN(date) AS first_buy_date,
  COUNT(date) AS cnt
FROM
  (
    SELECT
      user_id,
      date
    FROM
      order_info
    WHERE
      date > '2025-10-15'
      AND status = 'completed'
      AND product_name IN ('C++', 'Java', 'Python')
  ) AS OO
GROUP BY
  user_id
HAVING
  cnt >= 2
ORDER BY
  user_id;
