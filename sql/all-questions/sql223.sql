-- SQL223 使用join查询方式找出没有分类的电影id以及名称
-- CASE 1
SELECT
  film_id,
  title
FROM
  film
WHERE
  film_id NOT IN (
    SELECT
      film_id
    FROM
      film_category
  );

-- CASE 2
SELECT
  F.film_id,
  F.title
FROM
  film AS F
  LEFT OUTER JOIN film_category AS FC ON F.film_id = FC.film_id
WHERE
  category_id IS NULL;
