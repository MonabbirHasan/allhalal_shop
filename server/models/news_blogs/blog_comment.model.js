const db = require("../../config/config");
class BlogCommentModel {
  //=========================
  //ALL BLOGS COMMENT MODEL
  //=========================
  static all_blog_comment_model(callback) {
    const sql = `SELECT * FROM blog_comments`;
    db.query(sql, callback);
  }
  //===========================
  //FIND BLOGS COMMENT MODEL
  //===========================
  static find_blog_comment_model(id, callback) {
    const sql = `SELECT c.blog_comment_id,c.blog_comment_author,c.blog_comment_content,c.blog_comment_post_id,c.blog_comment_is_reply,c.blog_comment_date,c.status,u.user_id,u.username,u.email,u.phone,u.is_online,u.is_active FROM blog_comments AS c JOIN users AS u ON c.blog_comment_author=u.user_id WHERE blog_comment_post_id=? ORDER BY create_at ASC`;
    db.query(sql, [id], callback);
    const sql2 = `WITH RECURSIVE CommentTree AS (
    -- Select the root comments (parent comments with no parent, i.e., blog_comment_is_reply = 0)
    SELECT 
        b.blog_comment_id,
        b.blog_comment_author,
        b.blog_comment_content,
        b.blog_comment_is_reply,
        0 AS depth,
        b.blog_comment_id AS root_id,
        u.username AS username
    FROM 
        blog_comments AS b
    JOIN 
        users AS u ON b.blog_comment_author = u.user_id
    WHERE 
        b.blog_comment_is_reply = 0
    
    UNION ALL
    
    -- Recursively select child comments (replies)
    SELECT 
        c.blog_comment_id,
        c.blog_comment_author,
        c.blog_comment_content,
        c.blog_comment_is_reply,
        ct.depth + 1 AS depth,
        ct.root_id,
        u.username AS username
    FROM 
        blog_comments AS c
    JOIN 
        CommentTree AS ct ON c.blog_comment_is_reply = ct.blog_comment_id
    JOIN 
        users AS u ON c.blog_comment_author = u.user_id
)
SELECT 
    ct.blog_comment_id,
    ct.blog_comment_author,
    ct.blog_comment_content,
    ct.blog_comment_is_reply,
    ct.depth,
    ct.root_id,
    ct.username
FROM 
    CommentTree AS ct
ORDER BY 
    ct.root_id,   -- Order by the root comment id first to group the comments under their parent
    ct.depth,     -- Then order by the depth to ensure parents are listed before children
    ct.blog_comment_id`;
  }
  //===========================
  //SINGLE BLOGS COMMENT MODEL
  //===========================
  static single_blog_comment_model(id, callback) {
    const sql = `SELECT * FROM blog_comments WHERE blog_comment_id=?`;
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  //===========================
  //CREATE BLOGS COMMENT MODEL
  //===========================
  static create_blog_comment_model(data, callback) {
    const sql = "INSERT INTO blog_comments SET?";
    db.query(sql, data, callback);
  }
  //===========================
  //UPDATE BLOGS COMMENT MODEL
  //===========================
  static update_blog_comment_model(data, id, callback) {
    const sql = "UPDATE blog_comments SET? WHERE blog_comment_id=?";
    db.query(sql, [data, id], callback);
  }
  //==========================
  //DELETE BLOGS COMMENT MODEL
  //==========================
  static delete_blog_comment_model(id, callback) {
    const sql = "DELETE FROM blog_comments WHERE blog_comment_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = BlogCommentModel;
