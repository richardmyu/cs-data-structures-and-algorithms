-- 题目 纠错4
-- 关键字 组合查询
SELECT
  cust_name,
  cust_contact,
  cust_email
FROM
  Customers
WHERE
  cust_state = 'MI'
UNION
SELECT
  cust_name,
  cust_contact,
  cust_email
FROM
  Customers
WHERE
  cust_state = 'IL'
ORDER BY
  cust_name;
