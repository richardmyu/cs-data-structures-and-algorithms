-- SQL286 商品交易(网易校招笔试真题)
SELECT
  G.id,
  G.name,
  G.weight,
  OT.total
FROM
  goods AS G
  INNER JOIN (
    SELECT
      goods_id,
      SUM(count) AS total
    FROM
      trans
    GROUP BY
      goods_id
  ) AS OT ON G.id = OT.goods_id
WHERE
  total > 20
  AND weight < 50
ORDER BY
  id;
