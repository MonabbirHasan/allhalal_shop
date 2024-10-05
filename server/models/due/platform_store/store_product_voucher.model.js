const db = require("../../config/config");
class ProductVoucherModel {
  /*-----------------------------
// ALL PRODUCT VOUCHER MODEL
-------------------------------*/
  static all_product_voucher_model(callback) {
    const sql = "SELECT * FROM product_voucher";
    db.query(sql, callback);
  }
  /*-----------------------------
// SINGLE PRODUCT VOUCHER MODEL
-------------------------------*/
  static single_product_voucher_model(id, callback) {
    const sql = "SELECT * FROM product_voucher WHERE product_voucher_id=?";
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
// CREATE PRODUCT VOUCHER MODEL
-------------------------------*/
  static create_product_voucher_model(data, callback) {
    const sql = "INSERT INTO product_voucher SET?";
    db.query(sql, data, callback);
  }
  /*-----------------------------
// UPDATE PRODUCT VOUCHER MODEL
-------------------------------*/
  static update_product_voucher_model(data, id, callback) {
    const sql = "UPDATE product_voucher SET? WHERE product_voucher_id=?";
    db.query(sql, [data, id], callback);
  }
  /*-----------------------------
// DELETE PRODUCT VOUCHER MODEL
-------------------------------*/
  static delete_product_voucher_model(id, callback) {
    const sql = "DELETE FROM product_voucher WHERE product_voucher_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = ProductVoucherModel;
