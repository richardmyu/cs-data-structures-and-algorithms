-- SQL224 使用子查询的方式找出属于Action分类的所有电影对应的title,description
SELECT
  F.title,
  F.description
FROM
  film AS F
  INNER JOIN film_category AS FC ON F.film_id = FC.film_id
  INNER JOIN category AS C ON FC.category_id = C.category_id
WHERE
  C.name = 'Action';
