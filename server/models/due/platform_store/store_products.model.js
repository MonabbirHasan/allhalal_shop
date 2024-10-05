const db = require("../../config/config");
class StoreProductsModel {
  /*---------------------------
    // ALL PRODUCTS MODEL
    ---------------------------*/
  static all_store_products_model(callback) {
    const sql = "SELECT * FROM store_products";
    db.query(sql, callback);
  }
  /*---------------------------
    // SINGLE PRODUCTS MODEL
    ---------------------------*/
  static single_store_products_model(id, callback) {
    const sql = "SELECT * FROM store_products WHERE store_product_id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  /*---------------------------
    // CREATE PRODUCTS MODEL
    ---------------------------*/
  static create_store_products_model(data, callback) {
    const sql = "INSERT INTO store_products";
    db.query(sql, data, callback);
  }
  /*---------------------------
    // UPDATE PRODUCTS MODEL
    ---------------------------*/
  static update_store_products_model(data, id, callback) {
    const sql = "UPDATE store_products SET? WHERE store_product_id=?";
    db.query(sql, [data, id], callback);
  }
  /*---------------------------
    // DELETE PRODUCTS MODEL
    ---------------------------*/
  static delete_store_products_model(callback) {
    const sql = "DELETE FROM store_products WHERE store_product_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = StoreProductsModel;
