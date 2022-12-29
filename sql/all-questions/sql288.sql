-- SQL288 今天的刷题量(一)
SELECT
  name,
  cnt
FROM
  (
    SELECT
      DISTINCT SJ.name,
      subject_id AS id,
      COUNT(SM.subject_id) OVER (
        PARTITION BY subject_id
        ORDER BY
          subject_id
      ) AS cnt
    FROM
      submission AS SM
      INNER JOIN subject AS SJ ON SM.subject_id = SJ.id
    WHERE
      create_time = '2999-02-22'
  ) AS a
ORDER BY
  cnt DESC,
  id;
