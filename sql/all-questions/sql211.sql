-- SQL211 获取当前薪水第二多的员工的emp_no以及其对应的
SELECT
  emp_no,
  salary
FROM
  (
    SELECT
      emp_no,
      salary,
      DENSE_RANK() OVER (
        ORDER BY
          salary DESC
      ) AS dense_ranking
    FROM
      salaries
  ) AS a
WHERE
  dense_ranking = 2
ORDER BY
  emp_no;
