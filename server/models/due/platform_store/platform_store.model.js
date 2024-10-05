const db = require("../../config/config");
class PlatformStoreModel {
  /*---------------------------
    // ALL PLATFORM STORE MODEL
    ---------------------------*/
  static all_platform_store_model(callback) {
    const sql = "SELECT * FROM platform_store";
    db.query(sql, callback);
  }
  /*------------------------------
    // SINGLE PLATFORM STORE MODEL
    -----------------------------*/
  static single_platform_store_model(id, callback) {
    const sql = "SELECT * FROM platform_store WHERE platform_store_id=?";
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
    // CREATE PLATFORM STORE MODEL
    ------------------------------*/
  static create_platform_store_model(data, callback) {
    const sql = "INSERT INTO platform_store SET?";
    db.query(sql, data, callback);
  }
  /*------------------------------
    // UPDATE PLATFORM STORE MODEL
    ------------------------------*/
  static update_platform_store_model(data, id, callback) {
    const sql = "UPDATE platform_store SET? WHERE platform_store_id=?";
    db.query(sql, [data, id], callback);
  }
  /*------------------------------
    // DELETE PLATFORM STORE MODEL
    ------------------------------*/
  static delete_platform_store_model(id, callback) {
    const sql = "DELETE FROM platform_store WHERE platform_store_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = PlatformStoreModel;
