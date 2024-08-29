const db = require("../../config/config");
class BlogViewMode {
  //===========================
  //ALL BLOGS VIEWS MODEL
  //===========================
  static all_blog_view_model(callback) {
    const sql = "SELECT * FROM blog_views";
    db.query(sql, callback);
  }
  //===========================
  //SINGLE BLOGS VIEWS MODEL
  //===========================
  static single_blog_view_model(id, callback) {
    const sql = "SELECT * FROM blog_views WHERE blog_view_id=?";
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
  //CREATE BLOGS VIEWS MODEL
  //===========================
  static create_blog_view_model(data, callback) {
    const sql = "INSERT INTO blog_views SET?";
    db.query(sql, data, callback);
  }
  //===========================
  //UPDATE BLOGS VIEWS MODEL
  //===========================
  static update_blog_view_model(data, id, callback) {
    const sql = "UPDATE blog_views SET? WHERE blog_view_id=?";
    db.query(sql, [data, id], callback);
  }
  //===========================
  //DELETE BLOGS VIEWS MODEL
  //===========================
  static delete_blog_view_model(id, callback) {
    const sql = "DELETE FROM blog_views WHERE blog_view_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports=BlogViewMode;
