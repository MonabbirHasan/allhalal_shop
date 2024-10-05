const db = require("../../config/config");
class ProductReviewModel {
  /*-----------------------------
// ALL PRODUCT REVIEW MODEL
-------------------------------*/
  static all_product_review_model(callback) {
    const sql = "SELECT * FROM review";
    db.query(sql, callback);
  }
  /*-----------------------------
// SINGLE PRODUCT REVIEW MODEL
-------------------------------*/
  static single_product_review_model(id, callback) {
    const sql = "SELECT * FROM review WHERE product_review_id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  /*-----------------------------
// CREATE PRODUCT REVIEW MODEL
-------------------------------*/
  static create_product_review_model(data, callback) {
    const sql = "INSERT INTO product_review SET?";
    db.query(sql, data, callback);
  }
  /*-----------------------------
// UPDATE PRODUCT REVIEW MODEL
-------------------------------*/
  static update_product_review_model(data, id, callback) {
    const sql = "UPDATE product_review SET? WHERE product_review_id=?";
    db.query(sql, [data, id], callback);
  }
  /*-----------------------------
// DELETE PRODUCT REVIEW MODEL
-------------------------------*/
  static delete_product_review_model(id, callback) {
    const sql = "DELETE FROM product_review WHERE product_review_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = ProductReviewModel;
