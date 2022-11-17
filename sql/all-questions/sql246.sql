-- SQL246 获取employees中的first_name
SELECT
  first_name
FROM
  employees
ORDER BY
  SUBSTRING(
    first_name
    FROM
      -2
  );
