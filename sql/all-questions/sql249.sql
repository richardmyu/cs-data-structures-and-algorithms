-- SQL249 分页查询employees表 ， 每5行一页 ， 返回第2页的数据
SELECT
  *
FROM
  employees
LIMIT
  5, 5;
