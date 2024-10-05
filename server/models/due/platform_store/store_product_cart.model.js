const db = require("../../config/config");
class ProductCartModel {
  /*--------------------------------
// ALL PRODUCT CART MODEL
----------------------------------*/
  static all_product_cart_model(callback) {
    const sql = "SELECT * FROM product_cart";
    db.quary(sql, callback);
  }
  /*--------------------------------
// SINGLE PRODUCT CART MODEL
----------------------------------*/
  static single_product_cart_model(id, callback) {
    const sql = "SELECT * FROM product_cart WHERE product_cart_id=?";
    db.quary(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  /*--------------------------------
// CREATE PRODUCT CART MODEL
----------------------------------*/
  static create_product_cart_model(data, callback) {
    const sql = "INSERT INTO product_cart SET?";
    db.quary(sql, data, callback);
  }
  /*--------------------------------
// UDPATE PRODUCT CART MODEL
----------------------------------*/
  static update_product_cart_model(data, id, callback) {
    const sql = "UPDATE product_cart SET? WHERE product_cart_id=?";
    db.quary(sql, [data, id], callback);
  }
  /*--------------------------------
// DELETE PRODUCT CART MODEL
----------------------------------*/
  static delete_product_cart_model(id, callback) {
    const sql = "DELETE FROM product_cart WHERE product_cart_id=?";
    db.quary(sql, [id], callback);
  }
}
module.exports = ProductCartModel;
