const db = require("../../config/config");
class StoreProductDetailsModel {
  /*-----------------------------------
    // ALL STORE PRODUCT DETAILS MODEL
    ----------------------------------*/
  static all_store_product_details_model(callback) {
    const sql = "SELECT * FROM product_details";
    db.query(sql, callback);
  }
  /*-----------------------------------
    // SINGLE STORE PRODUCT DETAILS MODEL
    ----------------------------------*/
  static single_store_product_details_model(id, callback) {
    const sql = "SELECT * FROM product_details WHERE detail_id=?";
    db.query(sql, callback);
  }
  /*-----------------------------------
    // CREATE STORE PRODUCT DETAILS MODEL
    ----------------------------------*/
  static create_store_product_details_model(data, callback) {
    const sql = "INSERT INTO product_details SET?";
    db.query(sql, data, callback);
  }
  /*-----------------------------------
    // UPDATE STORE PRODUCT DETAILS MODEL
    ----------------------------------*/
  static update_store_product_details_model(data, id, callback) {
    const sql = "UPDATE product_details SET? WHERE detail_id=?";
    db.query(sql, [data, id], callback);
  }
  /*-----------------------------------
    // DELETE STORE PRODUCT DETAILS MODEL
    ----------------------------------*/
  static delete_store_product_details_model(id, callback) {
    const sql = "DELETE FROM product_details WHERE detail_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = StoreProductDetailsModel;
