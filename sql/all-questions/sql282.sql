-- SQL282 最差是第几名(二)
-- TODO: 当某一数的正序和逆序累计均大于整个序列的数字个数的一半即为中位数
SELECT
  grade
FROM
  (
    SELECT
      grade,
      (
        SELECT
          SUM(number)
        FROM
          class_grade
      ) AS total,
      SUM(number) over(
        ORDER BY
          grade
      ) a,
      SUM(number) over(
        ORDER BY
          grade desc
      ) b
    FROM
      class_grade
  ) AS t
WHERE
  (a >= (total / 2))
  AND (b >= (total / 2))
ORDER BY
  grade;

-- TEST
drop table if exists class_grade;

CREATE TABLE class_grade (
  grade varchar(32) NOT NULL,
  number int(4) NOT NULL
);

INSERT INTO
  class_grade
VALUES
  ('A', 2),
  ('C', 4),
  ('B', 4),
  ('D', 2);

drop table if exists class_grade;

CREATE TABLE class_grade (
  grade varchar(32) NOT NULL,
  number int(4) NOT NULL
);

INSERT INTO
  class_grade
VALUES
  ('A', 9),
  ('C', 1),
  ('B', 1),
  ('D', 1);

drop table if exists class_grade;

CREATE TABLE class_grade (
  grade varchar(32) NOT NULL,
  number int(4) NOT NULL
);

INSERT INTO
  class_grade
VALUES
  ('A', 2),
  ('C', 2),
  ('B', 2),
  ('D', 1);
