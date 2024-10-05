const db = require("../../config/config");
class TransactionModel {
  /*-----------------------------
// ALL TRANSACTIONS MODEL
-------------------------------*/
  static all_transaction_model(callback) {
    const sql = "SELECT * FROM transactions";
    db.quary(sql, callback);
  }
  /*-----------------------------
// SINGLE TRANSACTIONS MODEL
-------------------------------*/
  static single_transaction_model(id, callback) {
    const sql = "SELECT * FROM transactions WHERE transaction_id=?";
    db.quary(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  /*-----------------------------
// CREATE TRANSACTIONS MODEL
-------------------------------*/
  static create_transaction_model(data, callback) {
    const sql = "INSERT INTO transactions SET?";
    db.quary(sql, data, callback);
  }
  /*-----------------------------
// UPDATE TRANSACTIONS MODEL
-------------------------------*/
  static update_transaction_model(data, id, callback) {
    const sql = "INSERT INTO transactions SET? WHERE transaction_id=?";
    db.quary(sql, [data, id], callback);
  }
  /*-----------------------------
// DELETE TRANSACTIONS MODEL
-------------------------------*/
  static delete_transaction_model(id, callback) {
    const sql = "DELETE FROM transactions WHERE transaction_id=?";
    db.quary(sql, [id], callback);
  }
}
module.exports = TransactionModel;
