-- SQL234 在last_update后面新增加一列名字为create_date
ALTER TABLE
  actor
ADD
  COLUMN (
    create_date datetime NOT NULL DEFAULT '2020-10-01 00:00:00'
  );
