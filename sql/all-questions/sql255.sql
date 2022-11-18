-- SQL255 给出employees表中排名为奇数行的first_name
SELECT
  E.first_name AS first
FROM
  employees AS E
  INNER JOIN (
    SELECT
      first_name,
      ROW_NUMBER() OVER (
        ORDER BY
          first_name
      ) AS row_first
    FROM
      employees
  ) AS A ON E.first_name = A.first_name
WHERE
  A.row_first % 2 = 1;
