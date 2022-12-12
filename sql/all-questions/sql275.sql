-- SQL275 牛客的课程订单分析(五)
-- case 1
CREATE VIEW rank_order_info (user_id, date, ranking, cnt) AS
SELECT
  user_id,
  date,
  ranking,
  cnt
FROM
  (
    SELECT
      user_id,
      date,
      DENSE_RANK() OVER (
        PARTITION BY user_id
        ORDER BY
          date
      ) ranking,
      COUNT(date) OVER (
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
  ) AS origin_ranking
WHERE
  cnt >= 2;

SELECT
  FR.user_id,
  FR.first_buy_date,
  SR.second_buy_date,
  SR.cnt
FROM
  (
    SELECT
      user_id,
      date AS first_buy_date
    FROM
      rank_order_info
    WHERE
      ranking = 1
  ) AS FR
  INNER JOIN (
    SELECT
      user_id,
      date AS second_buy_date,
      cnt
    FROM
      rank_order_info
    WHERE
      ranking = 2
  ) AS SR ON FR.user_id = SR.user_id
ORDER BY
  user_id;

-- case 2
SELECT
  FR.user_id,
  FR.first_buy_date,
  SR.second_buy_date,
  SR.cnt
FROM
  (
    SELECT
      user_id,
      date AS first_buy_date
    FROM
      (
        SELECT
          user_id,
          date,
          ranking,
          cnt
        FROM
          (
            SELECT
              user_id,
              date,
              DENSE_RANK() OVER (
                PARTITION BY user_id
                ORDER BY
                  date
              ) ranking,
              COUNT(date) OVER (
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
          ) AS origin_ranking
        WHERE
          cnt >= 2
      ) AS a
    WHERE
      ranking = 1
  ) AS FR
  INNER JOIN (
    SELECT
      user_id,
      date AS second_buy_date,
      cnt
    FROM
      (
        SELECT
          user_id,
          date,
          ranking,
          cnt
        FROM
          (
            SELECT
              user_id,
              date,
              DENSE_RANK() OVER (
                PARTITION BY user_id
                ORDER BY
                  date
              ) ranking,
              COUNT(date) OVER (
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
          ) AS origin_ranking
        WHERE
          cnt >= 2
      ) AS b
    WHERE
      ranking = 2
  ) AS SR ON FR.user_id = SR.user_id
ORDER BY
  user_id;
