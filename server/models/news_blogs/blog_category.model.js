const db = require("../../config/config");
class BlogCategoryModel {
  //=========================
  //ALL CATEGORY MODEL
  //=========================
  static all_category_model(callback) {
    const sql = `SELECT * FROM blog_category`;
    db.query(sql, callback);
  }
  //=========================
  //SINGLE CATEGORY MODEL
  //=========================
  static single_category_model(id, callback) {
    const sql = `SELECT * FROM blog_category WHERE blog_category_id =?`;
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
  //CREATE CATEGORY MODEL
  //=========================
  static create_category_model(data, callback) {
    const sql = "INSERT INTO blog_category SET?";
    db.query(sql, data, callback);
  }
  //=========================
  //UPDATE CATEGORY MODEL
  //=========================
  static update_category_model(data, id, callback) {
    const sql = "UPDATE blog_category SET? WHERE blog_category_id =?";
    db.query(sql, [data, id], callback);
  }
  //=========================
  //DELETE CATEGORY MODEL
  //=========================
  static delete_category_model(id, callback) {
    const sql = "DELETE FROM blog_category WHERE blog_category_id =?";
    db.query(sql, [id], callback);
  }
}
module.exports = BlogCategoryModel;
