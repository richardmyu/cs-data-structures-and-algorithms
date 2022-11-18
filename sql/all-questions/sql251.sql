-- SQL251 使用含有关键字exists查找未分配具体部门的员工的所有信息
SELECT
  *
FROM
  employees AS E
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      dept_emp AS DE
    WHERE
      DE.dept_no IS NOT NULL
      AND E.emp_no = DE.emp_no
  );
