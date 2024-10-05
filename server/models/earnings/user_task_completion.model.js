const db = require("../../config/config");
class UserTaskCompletionModel {
  /*------------------------------
// ALL USER TASK COMPLETION MODEL
----------------------------------*/
  static all_user_task_completion_model(callback) {
    const sql = "SELECT * FROM earn_user_task_completion";
    db.query(sql, callback);
  }
  /*--------------------------------
  // SINGLE USER TASK COMPLETION MODEL
  ------------------------------------*/
  static single_user_task_completion_model(id, callback) {
    const sql = "SELECT * FROM earn_user_task_completion WHERE earn_utc_id=?";
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
  // CREATE USER TASK COMPLETION MODEL
  ------------------------------------*/
  static create_user_task_completion_model(data, callback) {
    const sql = "INSERT INTO earn_user_task_completion SET?";
    db.query(sql, data, callback);
  }
  /*--------------------------------
  // UPDATE USER TASK COMPLETION MODEL
  ------------------------------------*/
  static update_user_task_completion_model(data, id, callback) {
    const sql = "UPDATE earn_user_task_completion SET? WHERE earn_utc_id=?";
    db.query(sql, [data, id], callback);
  }
  /*---------------------------------
  // DELETE USER TASK COMPLETION MODEL
  -------------------------------------*/
  static delete_user_task_completion_model(id, callback) {
    const sql = "DELETE FROM earn_user_task_completion WHERE earn_utc_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = UserTaskCompletionModel;
