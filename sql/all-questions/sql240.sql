-- SQL240 在audit表上创建外键约束 ， 其emp_no对应employees_test表的主键id
ALTER TABLE
  audit
ADD
  CONSTRAINT FOREIGN KEY (emp_no) REFERENCES employees_test(id);
