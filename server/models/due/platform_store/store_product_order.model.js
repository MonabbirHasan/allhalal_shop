const db = require("../../config/config");
class StoreProductOrderModel {
  /*-----------------------------------
    // ALL STORE PRODUCT ORDER MODEL
    ----------------------------------*/
  static all_store_product_order_model(callback) {
    const sql = "SELECT * FROM product_orders";
    db.query(sql, callback);
  }
  /*-----------------------------------
    // SINGLE STORE PRODUCT ORDER MODEL
    ----------------------------------*/
  static single_store_product_order_model(id, callback) {
    const sql = "SELECT * FROM product_orders WHERE product_order_id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  /*-----------------------------------
    // CREATE STORE PRODUCT ORDER MODEL
    ----------------------------------*/
  static create_store_product_order_model(data, callback) {
    const sql = "INSERT INTO product_orders SET?";
    db.query(sql, data, callback);
  }
  /*-----------------------------------
    // UPDATE STORE PRODUCT ORDER MODEL
    ----------------------------------*/
  static update_store_product_order_model(data, id, callback) {
    const sql = "UPDATE product_orders SET? WHERE product_order_id=?";
    db.query(sql, [data, id], callback);
  }
  /*-----------------------------------
  // DELETE STORE PRODUCT ORDER MODEL
  ----------------------------------*/
  static delete_store_product_order_model(id, callback) {
    const sql = "DELETE FROM product_orders WHERE product_order_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = StoreProductOrderModel;
