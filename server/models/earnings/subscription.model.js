const db = require("../../config/config");
class SubscriptionModel {
  /*-----------------------------
// ALL SUBSCRIPTION MODEL
-------------------------------*/
  static all_earn_subscription_model(callback) {
    const sql = "SELECT * FROM earn_subscription ORDER BY earn_sub_price ASC";
    db.query(sql, callback);
  }
  /*-----------------------------
// SINGLE SUBSCRIPTION MODEL
-------------------------------*/
  static single_earn_subscription_model(id, callback) {
    const sql = "SELECT * FROM earn_subscription WHERE earn_sub_id=?";
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
// CREATE SUBSCRIPTION MODEL
-------------------------------*/
  static create_earn_subscription_model(data, callback) {
    const sql = "INSERT INTO earn_subscription SET?";
    db.query(sql, data, callback);
  }
  /*-----------------------------
// UPDATE SUBSCRIPTION MODEL
-------------------------------*/
  static update_earn_subscription_model(data, id, callback) {
    const sql = `INSERT INTO earn_subscription SET? WHERE earn_sub_id=?`;
    db.query(sql, [data, id], callback);
  }
  /*-----------------------------
// DELETE SUBSCRIPTION MODEL
-------------------------------*/
  static delete_earn_subscription_model(id, callback) {
    const sql = "DELETE FROM earn_subscription WHERE earn_sub_id=? ";
    db.query(sql, [id], callback);
  }
}
module.exports = SubscriptionModel;
