-- SQL287 网易云音乐推荐(网易校招笔试真题)
SELECT
  music_name
FROM
  (
    SELECT
      DISTINCT M.music_name,
      M.id
    FROM
      follow AS F
      INNER JOIN music_likes AS ML ON F.follower_id = ML.user_id
      INNER JOIN music AS M ON ML.music_id = M.id
    WHERE
      F.user_id = 1
      AND ML.music_id NOT IN (
        SELECT
          music_id
        FROM
          music_likes
        WHERE
          user_id = 1
      )
  ) AS a
ORDER BY
  id;
