-- SQL235 构造一个触发器audit_log
CREATE TRIGGER audit_log
AFTER
INSERT
  ON employees_test FOR EACH ROW BEGIN
INSERT INTO
  audit
VALUES
  (NEW.id, NEW.name)
END;
