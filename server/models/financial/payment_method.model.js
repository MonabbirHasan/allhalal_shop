const db = require("../../config/config");
class PaymentMethodModel {
  /*--------------------------------
// ALL PAYMENT METHOD MODEL
----------------------------------*/
  static all_payment_method_model(callback) {
    const sql = "SELECT * FROM payment_method";
    db.query(sql, callback);
  }
  /*--------------------------------
// SINGLE PAYMENT METHOD MODEL
----------------------------------*/
  static single_payment_method_model(id, callback) {
    const sql = "SELECT * FROM payment_method WHERE payment_method_id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  /*--------------------------------
// CREATE PAYMENT METHOD MODEL
----------------------------------*/
  static create_payment_method_model(data, callback) {
    const sql = "INSERT INTO payment_method SET?";
    db.query(sql, data, callback);
  }
  /*--------------------------------
// UPDATE PAYMENT METHOD MODEL
----------------------------------*/
  static update_payment_method_model(data, id, callback) {
    const sql = "UPDATE payment_method SET? WHERE payment_method_id=?";
    db.query(sql, [data, id], callback);
  }
  /*--------------------------------
// DELETE PAYMENT METHOD MODEL
----------------------------------*/
  static delete_payment_method_model(id, callback) {
    const sql = "DELETE FROM payment_method WHERE payment_method_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = PaymentMethodModel;
