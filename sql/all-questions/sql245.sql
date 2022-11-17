-- SQL245 查找字符串中逗号出现的次数
SELECT
  id,
  LENGTH(REGEXP_REPLACE(string, '[^,]+', '')) AS cnt
FROM
  strings;
