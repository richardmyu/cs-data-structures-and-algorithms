-- SQL217 对所有员工的薪水按照salary降序进行1 - N的排名
SELECT
  emp_no,
  salary,
  DENSE_RANK () OVER (
    ORDER BY
      salary DESC
  ) AS t_rank
FROM
  salaries
ORDER BY
  salary DESC,
  emp_no;
