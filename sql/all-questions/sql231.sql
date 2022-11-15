-- SQL231 对first_name创建唯一索引uniq_idx_firstname
/*
 * ALTER TABLE table ADD
 */
-- 唯一索引
ALTER TABLE
  actor
ADD
  UNIQUE uniq_idx_firstname (first_name);

-- 普通索引
ALTER TABLE
  actor
ADD
  INDEX idx_lastname (last_name);

/*
 * CREATE [] INDEX
 */
-- 唯一索引
CREATE UNIQUE INDEX uniq_idx_firstname ON actor(first_name);

-- or
ALTER TABLE
  actor
ADD
  CONSTRAINT uniq_idx_firstname UNIQUE KEY (first_name);

-- 普通索引
CREATE INDEX idx_lastname ON actor (last_name);
