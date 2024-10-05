const db = require("../../config/config");
class ProductShippingModel {
  /*-----------------------------
// ALL PRODUCT SHIPPING MODEL
-------------------------------*/
  static all_product_shipping_model(callback) {
    const sql = "SELECT * FROM product_shipping";
    db.query(sql, callback);
  }
  /*------------------------------
// SINGLE PRODUCT SHIPPING MODEL
--------------------------------*/
  static single_product_shipping_model(id, callback) {
    const sql = "SELECT * FROM product_shipping WHERE product_shipping_id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  /*------------------------------
// CREATE PRODUCT SHIPPING MODEL
--------------------------------*/
  static create_product_shipping_model(data, callback) {
    const sql = "INSERT INTO product_shipping SET?";
    db.query(sql, data, callback);
  }
  /*------------------------------
// UPDATE PRODUCT SHIPPING MODEL
-------------------------------*/
  static update_product_shipping_model(data, id, callback) {
    const sql = "UPDATE product_shipping SET? WHERE product_shipping_id=? ";
    db.query(sql, data, callback);
  }
  /*-----------------------------
// DELETE PRODUCT SHIPPING MODEL
-------------------------------*/
  static delete_product_shipping_model(id, callback) {
    const sql = "DELETE FROM product_shipping WHERE product_shipping_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = ProductShippingModel;
