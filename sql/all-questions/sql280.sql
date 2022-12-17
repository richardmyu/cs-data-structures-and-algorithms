-- SQL280 实习广场投递简历分析(三)
SELECT
  job,
  SUBSTRING(
    date
    FROM
      1 FOR 7
  ) AS first_year_mon,
  SUM(num) AS first_year_cnt,
  SUBSTRING(
    DATE_ADD(date, INTERVAL 1 YEAR)
    FROM
      1 FOR 7
  ) AS second_year_mon,
  (
    SELECT
      SUM(num)
    FROM
      resume_info
    WHERE
      SUBSTRING(
        date
        FROM
          1 FOR 7
      ) = second_year_mon
      AND job = FR.job
  ) AS second_year_cnt
FROM
  resume_info AS FR
WHERE
  EXTRACT(
    YEAR
    FROM
      date
  ) = '2025'
GROUP BY
  job,
  first_year_mon,
  second_year_mon,
  second_year_cnt
ORDER BY
  first_year_mon DESC,
  job DESC;
