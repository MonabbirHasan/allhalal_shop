const db = require("../../config/config");
class UserCoinModel {
  /*-----------------------------
// ALL USER COINS MODEL
-------------------------------*/
  static all_user_coin_model(callback) {
    const sql = "SELECT * FROM user_coins";
    db.query(sql, callback);
  }
  /*-----------------------------
// SINGLE USER COINS MODEL
-------------------------------*/
  static single_user_coin_model(id, callback) {
    const sql = "SELECT * FROM user_coins WHERE user_coin_id=?";
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
// USER COINS MODEL
-------------------------------*/
  static user_coin_model(id, callback) {
    const sql = "SELECT * FROM user_coins WHERE user_coin_user_id=?";
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
// CREATE USER COINS MODEL
-------------------------------*/
  static create_user_coin_model(data, callback) {
    try {
      // CHECK USER user_funds IS ALREADY AVAILABLE OR NOT
      const checkSql = `SELECT COUNT(*) AS count FROM user_coins WHERE user_coin_user_id = ?`;
      db.query(checkSql, [data.user_coin_user_id], (error, result) => {
        if (error) {
          callback(error, null);
          return;
        }
        if (result[0].count > 0) {
          const updateSql = `UPDATE user_coins SET user_coin = user_coin+? WHERE user_coin_user_id =?`;
          db.query(updateSql, [data.user_coin, data.user_coin_user_id], callback);
        } else {
          const insertSql = `INSERT INTO user_coins (user_coin_id, user_coin_user_id, user_coin,user_coin_status) VALUES (?, ?, ?, ?)`;
          db.query(
            insertSql,
            [data.user_coin_id, data.user_coin_user_id, data.user_coin,data.user_coin_status],
            callback
          );
        }
      });
    } catch (error) {
      console.log(error);
      // callback(error, null);
    }
  }
  /*-----------------------------
// UPDATE USER COINS MODEL
-------------------------------*/
  static update_user_coin_model(data, id, callback) {
    const sql = "UPDATE user_coins SET? WHERE user_coin_id=?";
    db.query(sql, [data, id], callback);
  }
  /*-----------------------------
// DELETE USER COINS MODEL
-------------------------------*/
  static delete_user_coin_model(id, callback) {
    const sql = "DELETE FROM user_coins WHERE user_coin_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = UserCoinModel;
