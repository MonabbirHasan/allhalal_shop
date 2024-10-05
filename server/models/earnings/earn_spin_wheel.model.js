const db = require("../../config/config");
class EarnSpinWheelModel {
  /*-----------------------------
// ALL EARNING SPIN WHEEL MODEL
-------------------------------*/
  static all_earn_spin_wheel_model(callback) {
    const sql = "SELECT * FROM earn_spin_wheel";
    db.query(sql, callback);
  }
  /*-----------------------------
// SINGLE EARNING SPIN WHEEL MODEL
-------------------------------*/
  static single_earn_spin_wheel_model(id, callback) {
    const sql = "SELECT * FROM earn_spin_wheel WHERE earn_sw_id=?";
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
// USER SPIN SPIN WHEEL MODEL
-------------------------------*/
  static user_earn_spin_wheel_model(today, data, callback) {
    const spinQuery = `SELECT COUNT(*) as spinCount FROM earn_spin_wheel WHERE earn_sw_user_id = ? AND DATE(earn_sw_date) = ?`;

    db.query(spinQuery, [data.earn_sw_user_id, today], (err, result) => {
      if (err) return callback(err, null);

      const spinCount = result[0].spinCount;

      // Check if the user has already spun 3 times today
      if (spinCount >= 3) {
        return callback(null, {
          message: "You have reached the daily spin limit.",
        });
      }
      // Insert the new spin record into the database
      const insertQuery = `INSERT INTO earn_spin_wheel SET?`;
      db.query(insertQuery, [data, 3], (err, result) => {
        if (err) return callback(err, null);
        const spinsLeft = 3 - (spinCount + 1);
        return callback(null, {
          message: "Spin successful!",
          spin_result: 3,
          spins_left: spinsLeft,
        });
      });
    });
  }
  /*-----------------------------
// CREATE EARNING SPIN WHEEL MODEL
-------------------------------*/
  static create_earn_spin_wheel_model(data, callback) {
    const sql = "INSERT INTO earn_spin_wheel SET? ";
    db.query(sql, data, callback);
  }
  /*-----------------------------
// UPDATE EARNING SPIN WHEEL MODEL
-------------------------------*/
  static update_earn_spin_wheel_model(data, id, callback) {
    const sql = "UPDATE earn_spin_wheel SET? WHERE earn_sw_id=? ";
    db.query(sql, [data, id], callback);
  }
  /*-----------------------------
// DELETE EARNING SPIN WHEEL MODEL
-------------------------------*/
  static delete_earn_spin_wheel_model(id, callback) {
    const sql = "DELETE FROM earn_spin_wheel WHERE earn_sw_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = EarnSpinWheelModel;
