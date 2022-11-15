-- SQL232 针对actor表创建视图actor_name_view
CREATE VIEW actor_name_view (first_name_v, last_name_v) AS
SELECT
  first_name AS first_name_v,
  last_name AS last_name_v
FROM
  actor;

SELECT
  *
FROM
  actor_name_view;
