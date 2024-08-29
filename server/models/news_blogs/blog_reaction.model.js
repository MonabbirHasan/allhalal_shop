// SELECT 
//     comment_id,
//     SUM(CASE WHEN reaction_type = 'like' THEN 1 ELSE 0 END) AS likes,
//     SUM(CASE WHEN reaction_type = 'dislike' THEN 1 ELSE 0 END) AS dislikes
// FROM reactions
// WHERE comment_id = 1
// GROUP BY comment_id;
