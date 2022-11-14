-- SQL230 创建一个actor_name表
CREATE TABLE actor_name (
  first_name varchar(45) NOT NULL,
  last_name varchar(45) NOT NULL
);

INSERT INTO
  actor_name(first_name, last_name)
SELECT
  first_name,
  last_name
FROM
  actor;

SELECT
  *
FROM
  actor_name;
