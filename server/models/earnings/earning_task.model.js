const db = require("../../config/config");
class EarningTaskModel {
  /*-----------------------------
// ALL EARNING TASK MODEL
-------------------------------*/
  static all_earning_task_model(callback) {
    const sql = "SELECT * FROM earn_daily_tasks";
    db.query(sql, callback);
  }
  /*-----------------------------
// SINGLE EARNING TASK MODEL
-------------------------------*/
  static single_earning_task_model(id, callback) {
    const sql = "SELECT * FROM earn_daily_tasks WHERE earn_task_id=?";
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
// CREATE EARNING TASK MODEL
-------------------------------*/
  static create_earning_task_model(data, callback) {
    const sql = "INSERT INTO earn_daily_tasks SET?";
    db.query(sql, data, callback);
  }
  /*-----------------------------
// UPDATE EARNING TASK MODEL
-------------------------------*/
  static update_earning_task_model(data, id, callback) {
    const sql = "UPDATE earn_daily_tasks SET? WHERE earn_task_id=?";
    db.query(sql, [data, id], callback);
  }
  /*-----------------------------
// DELETE EARNING TASK MODEL
-------------------------------*/
  static delete_earning_task_model(id, callback) {
    const sql = "DELETE FROM earn_daily_tasks WHERE earn_task_id=? ";
    db.query(sql, [id], callback);
  }
}
module.exports = EarningTaskModel;
