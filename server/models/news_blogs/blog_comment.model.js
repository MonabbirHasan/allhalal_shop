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
    const sql = `SELECT 
      c.blog_comment_id,
      c.blog_comment_author,
      c.blog_comment_content,
      c.blog_comment_post_id,
      c.blog_comment_is_reply,
      c.blog_comment_date,
      c.status,
      u.user_id,
      u.username,
      u.email,
      u.phone,
      u.is_online,
      u.is_active,
      br.reaction_id,
      COUNT(br.reaction_id) AS reaction_count
  FROM 
      blog_comments AS c
  JOIN 
      users AS u ON c.blog_comment_author = u.user_id
  LEFT JOIN 
      blog_reactions AS br ON c.blog_comment_id = br.comment_id
  WHERE 
      c.blog_comment_post_id = ?
  GROUP BY 
      c.blog_comment_id, 
      c.blog_comment_author, 
      c.blog_comment_content, 
      c.blog_comment_post_id, 
      c.blog_comment_is_reply, 
      c.blog_comment_date, 
      c.status, 
      u.user_id, 
      u.username, 
      u.email, 
      u.phone, 
      u.is_online, 
      u.is_active
  ORDER BY 
      c.blog_comment_date ASC`;


      const sql2 = `SELECT 
      c.blog_comment_id,
      c.blog_comment_author,
      c.blog_comment_content,
      c.blog_comment_post_id,
      c.blog_comment_is_reply,
      c.blog_comment_date,
      c.status,
      u.user_id,
      u.username,
      u.email,
      u.phone,
      u.is_online,
      u.is_active,
      br.reaction_id,
      COUNT(br.reaction_id) AS reaction_count
  FROM 
      blog_comments AS c
  JOIN 
      users AS u ON c.blog_comment_author = u.user_id
  LEFT JOIN 
      blog_reactions AS br ON c.blog_comment_id = br.comment_id
  WHERE 
      c.blog_comment_post_id = ? 
  GROUP BY 
      c.blog_comment_id, 
      c.blog_comment_author, 
      c.blog_comment_content, 
      c.blog_comment_post_id, 
      c.blog_comment_is_reply, 
      c.blog_comment_date, 
      c.status, 
      u.user_id, 
      u.username, 
      u.email, 
      u.phone, 
      u.is_online, 
      u.is_active
  ORDER BY 
      c.blog_comment_date ASC`;

    db.query(sql, [id], callback);
    
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
