-- SQL219 获取员工其当前的薪水比其 manager 当前薪水还高的相关信息
SELECT
  EME.emp_no,
  EME.manager_no,
  S.salary AS emp_salary,
  EMM.manager_salary
FROM
  salaries AS S
  INNER JOIN (
    SELECT
      DE.emp_no,
      DM.emp_no AS manager_no
    FROM
      dept_emp AS DE
      INNER JOIN dept_manager AS DM ON DE.dept_no = DM.dept_no
      AND DE.emp_no <> DM.emp_no
  ) AS EME ON S.emp_no = EME.emp_no
  INNER JOIN (
    SELECT
      EM.emp_no,
      EM.manager_no,
      S.salary AS manager_salary
    FROM
      salaries AS S
      INNER JOIN (
        SELECT
          DE.emp_no,
          DM.emp_no AS manager_no
        FROM
          dept_emp AS DE
          INNER JOIN dept_manager AS DM ON DE.dept_no = DM.dept_no
          AND DE.emp_no <> DM.emp_no
      ) AS EM ON S.emp_no = EM.manager_no
  ) AS EMM ON S.emp_no = EMM.emp_no
WHERE
  S.salary > EMM.manager_salary;

-- 视图法
CREATE VIEW EM_info (emp_no, manager_no) AS
SELECT
  DE.emp_no,
  DM.emp_no AS manager_no
FROM
  dept_emp AS DE
  INNER JOIN dept_manager AS DM ON DE.dept_no = DM.dept_no
  AND DE.emp_no <> DM.emp_no;

SELECT
  EME.emp_no,
  EME.manager_no,
  S.salary AS emp_salary,
  EMM.manager_salary
FROM
  salaries AS S
  INNER JOIN EM_info AS EME ON S.emp_no = EME.emp_no
  INNER JOIN (
    SELECT
      EM.emp_no,
      EM.manager_no,
      S.salary AS manager_salary
    FROM
      salaries AS S
      INNER JOIN EM_info AS EM ON S.emp_no = EM.manager_no
  ) AS EMM ON S.emp_no = EMM.emp_no
WHERE
  S.salary > EMM.manager_salary;
