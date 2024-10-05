const db = require("../../config/config");
class CoinExchangeRateModel {
  /*---------------------------------
// ALL COIN EXHANGE RATE WHEEL MODEL
------------------------------------*/
  static all_coin_exhange_rate_model(callback) {
    const sql = "SELECT * FROM coins_exhange_rate";
    db.query(sql, callback);
  }
  /*---------------------------------
// SINGLE COIN EXHANGE RATE WHEEL MODEL
------------------------------------*/
  static single_coin_exhange_rate_model(id, callback) {
    const sql = "SELECT * FROM coins_exhange_rate WHERE coin_exhange_id=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        const msg = result[0];
        callback(null, msg);
      }
    });
  }
  /*---------------------------------
// CREATE COIN EXHANGE RATE WHEEL MODEL
------------------------------------*/
  static create_coin_exhange_rate_model(data, callback) {
    const sql = "INSERT INTO coins_exhange_rate SET?";
    db.query(sql, data, callback);
  }
  /*---------------------------------
// UPDATE COIN EXHANGE RATE WHEEL MODEL
------------------------------------*/
  static update_coin_exhange_rate_model(data, id, callback) {
    const sql = "UPDATE coins_exhange_rate SET? WHERE coin_exhange_id=?";
    db.query(sql, [data, id], callback);
  }
  /*---------------------------------
// DELETE COIN EXHANGE RATE WHEEL MODEL
------------------------------------*/
  static delete_coin_exhange_rate_model(id, callback) {
    const sql = "DELETE FROM coins_exhange_rate WHERE coin_exhange_id=? ";
    db.query(sql, [id], callback);
  }
}
module.exports = CoinExchangeRateModel;
