-- SQL277 牛客的课程订单分析(七)
SELECT
  source,
  cnt
FROM
  (
    SELECT
      CASE
        WHEN is_group_buy = 'No' THEN (
          SELECT
            name
          FROM
            client AS C
          WHERE
            C.id = OI.client_id
        )
        ELSE 'GroupBuy'
      END AS source,
      COUNT(*) OVER (
        PARTITION BY client_id
        ORDER BY
          client_id
      ) AS cnt,
      COUNT(*) OVER (
        PARTITION BY user_id
        ORDER BY
          user_id
      ) AS id_cnt
    FROM
      order_info AS OI
    WHERE
      date > '2025-10-15'
      AND status = 'completed'
      AND product_name IN ('C++', 'Java', 'Python')
  ) AS FOI
WHERE
  id_cnt >= 2
GROUP BY
  source
ORDER BY
  source;
