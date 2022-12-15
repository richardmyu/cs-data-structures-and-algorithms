-- SQL278 实习广场投递简历分析(一)
SELECT
  job,
  SUM(num) AS cnt
FROM
  resume_info
WHERE
  date BETWEEN '2025-01-01'
  AND '2025-12-31'
GROUP BY
  job
ORDER BY
  cnt DESC;
