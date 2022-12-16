-- SQL279 实习广场投递简历分析(二)
SELECT
  job,
  SUBSTRING(
    date
    FROM
      1 FOR 7
  ) AS mon,
  SUM(num) AS cnt
FROM
  resume_info
WHERE
  EXTRACT(
    YEAR
    FROM
      date
  ) = '2025'
GROUP BY
  job,
  mon
ORDER BY
  mon DESC,
  cnt DESC;
