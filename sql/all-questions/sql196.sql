-- SQL196 查找入职员工时间排名倒数第三的员工所有信息
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
  hire_ranking = 3;
