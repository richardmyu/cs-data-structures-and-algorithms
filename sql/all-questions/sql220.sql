-- SQL220 汇总各个部门当前员工的title类型的分配数目
SELECT
  DTC.dept_no,
  D.dept_name,
  DTC.title,
  DTC.count
FROM
  departments AS D
  INNER JOIN (
    SELECT
      DE.dept_no,
      T.title,
      COUNT(*) AS count
    FROM
      dept_emp AS DE
      INNER JOIN titles AS T ON DE.emp_no = T.emp_no
    GROUP BY
      dept_no,
      title
    ORDER BY
      dept_no,
      title
  ) AS DTC ON D.dept_no = DTC.dept_no;
