-- SQL227 创建一个actor表 ， 包含如下列信息
CREATE TABLE actor (
  actor_id smallint(5) NOT NULL,
  first_name varchar(45) NOT NULL,
  last_name varchar(45) NOT NULL,
  last_update date NOT NULL,
  PRIMARY KEY (actor_id)
);
