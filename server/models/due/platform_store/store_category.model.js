const db = require("../../config/config");
class StoreCategoryModel {
  /*---------------------------
    // ALL STORE CATEGORY MODEL
    ---------------------------*/
  static all_store_category_model(callback) {
    const sql = "SELECT * FROM product_category";
    db.query(sql, callback);
  }
  /*------------------------------
    // SINGLE STORE CATEGORY MODEL
    ------------------------------*/
  static single_store_category_model(id, callback) {
    const sql = "SELECT * FROM product_category WHERE product_category_id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  /*-------------------------------
    // CREATE STORE CATEGORY MODEL
    ------------------------------*/
  static create_store_category_model(data, callback) {
    const sql = "INSERT INTO product_category SET?";
    db.query(sql, data, callback);
  }
  /*------------------------------
    // UPDATE STORE CATEGORY MODEL
    ------------------------------*/
  static update_store_category_model(data, id, callback) {
    const sql = "UPDATE product_category SET? WHERE product_category_id=?";
    db.query(sql, [data, id], callback);
  }
  /*------------------------------
    // DELETE STORE CATEGORY MODEL
    -----------------------------*/
  static delete_store_category_model(id, callback) {
    const sql = "DELETE FROM product_category WHERE product_category_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = StoreCategoryModel;
