-- SQL276 牛客的课程订单分析(六)
SELECT
  OED.id,
  OED.is_group_buy,
  CASE
    WHEN is_group_buy = 'No' THEN (
      SELECT
        name
      FROM
        client AS C
      WHERE
        C.id = OED.client_id
    )
    ELSE NULL
  END AS client_name
FROM
  (
    SELECT
      id,
      is_group_buy,
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
  OED.cnt >= 2
ORDER BY
  OED.id;
