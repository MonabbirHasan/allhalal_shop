const db = require("../../config/config");
class StoreProductOrderItemModel {
  /*-----------------------------------
    // ALL STORE ORDER ITEM MODEL
    ----------------------------------*/
  static all_store_product_order_item_model(callback) {
    const sql = "SELECT * FROM product_order_item";
    db.query(sql, callback);
  }
  /*-----------------------------------
    // SINGLE STORE ORDER ITEM MODEL
    ----------------------------------*/
  static create_store_product_order_item_model(id, callback) {
    const sql = `SELECT * FROM product_order_item WHERE product_order_item_id=?`;
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
    db.query(sql, callback);
  }
  /*-----------------------------------
    // CREATE STORE ORDER ITEM MODEL
    ----------------------------------*/
  static create_store_product_order_item_model(data, callback) {
    const sql = "INSERT INTO product_order_item SET?";
    db.query(sql, data, callback);
  }
  /*-----------------------------------
    // UPDATE STORE ORDER ITEM MODEL
    ----------------------------------*/
  static update_store_product_order_item_model(data, id, callback) {
    const sql = "UPDATE product_order_item SET? WHERE product_order_item_id=?";
    db.query(sql, [data, id], callback);
  }
  /*-----------------------------------
    // DELETE STORE ORDER ITEM MODEL
    ----------------------------------*/
  static delete_store_product_order_item_model(id, callback) {
    const sql = "DELETE FROM product_order_item WHERE product_order_item_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = StoreProductOrderItemModel;
