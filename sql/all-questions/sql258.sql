-- SQL258 找到每个人的任务
SELECT
  id,
  name,
  content
FROM
  (
    SELECT
      id,
      name,
      NULL AS content
    FROM
      person
    WHERE
      id NOT IN (
        SELECT
          person_id
        FROM
          task
      )
    UNION
    ALL
    SELECT
      P.id,
      P.name,
      T.content
    FROM
      person AS P
      INNER JOIN task AS T ON P.id = T.person_id
  ) AS a
ORDER BY
  id;
