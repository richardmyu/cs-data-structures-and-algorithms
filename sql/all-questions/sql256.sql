-- SQL256 出现三次以上相同积分的情况
SELECT
  number
FROM
  grade
GROUP BY
  number
HAVING
  COUNT(*) >= 3;
