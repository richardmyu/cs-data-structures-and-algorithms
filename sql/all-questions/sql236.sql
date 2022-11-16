-- SQL236 删除emp_no重复的记录 ， 只保留最小的id对应的记录 。
DELETE FROM
  titles_test
WHERE
  id NOT IN (
    SELECT
      id
    FROM
      (
        SELECT
          MIN(id) AS id
        FROM
          titles_test
        GROUP BY
          emp_no
      ) AS a
  );
