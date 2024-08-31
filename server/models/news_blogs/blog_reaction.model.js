// SELECT
//     comment_id,
//     SUM(CASE WHEN reaction_type = 'like' THEN 1 ELSE 0 END) AS likes,
//     SUM(CASE WHEN reaction_type = 'dislike' THEN 1 ELSE 0 END) AS dislikes
// FROM reactions
// WHERE comment_id = 1
// GROUP BY comment_id;
const db = require("../../config/config");
class BlogReactionModel {
  //=========================
  //ALL REACTION MODEL
  //=========================
  static all_reaction_model(callback) {
    const sql = `SELECT * FROM blog_reactions`;
    db.query(sql, callback);
  }
  //=========================
  //SINGLE REACTION MODEL
  //=========================
  static single_reaction_model(id, callback) {
    const sql = `SELECT * FROM blog_reactions WHERE reaction_id=?`;
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  //=========================
  //CREATE REACTION MODEL
  //=========================
  static create_reaction_model(data, callback) {
    const sql = `INSERT INTO blog_reactions SET?`;
    db.query(sql, data, callback);
  }
  //=========================
  //UPDATE REACTION MODEL
  //=========================
  static update_reaction_model(data, id, callback) {
    const sql = `UPDATE blog_reactions SET? WHERE comment_id =?`;
    db.query(sql, [data, id], callback);
  }
  //=========================
  //DELETE REACTION MODEL
  //=========================
  static delete_reaction_model(id, callback) {
    const sql = `DELETE FROM blog_reactions WHERE reaction_id=?`;
    db.query(sql, [id], callback);
  }
}
module.exports = BlogReactionModel;
