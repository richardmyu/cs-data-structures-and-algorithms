-- SQL195 查找最晚入职员工的所有信息
-- case 1
-- 最简单，但可能会遗漏
-- 最晚可能不止一个吧
SELECT
  *
FROM
  employees
ORDER BY
  hire_date DESC
LIMIT
  1;

-- case 2
SELECT
  emp_no,
  birth_date,
  first_name,
  last_name,
  gender,
  hire_date
FROM
  (
    SELECT
      emp_no,
      birth_date,
      first_name,
      last_name,
      gender,
      hire_date,
      DENSE_RANK() OVER (
        ORDER BY
          hire_date DESC
      ) AS hire_ranking
    FROM
      employees
  ) AS a
WHERE
  hire_ranking = 1;
