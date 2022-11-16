-- SQL237 将所有to_date为9999 -01 -01 的全部更新为NULL
UPDATE
  titles_test
SET
  to_date = NULL,
  from_date = '2001-01-01'
WHERE
  to_date = '9999-01-01';
