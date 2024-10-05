const db = require("../config/config");
class FundModel {
  //=================
  // ALL FUND MODEL
  //=================
  static all_fund_model(callback) {
    try {
      const sql = `SELECT * FROM user_funds`;
      db.query(sql, callback);
    } catch (error) {
      console.log(error);
      // callback(error, null);
    }
  }
  //==================
  // SINGLE FUND MODEL
  //==================
  static single_fund_model(id, callback) {
    try {
      const sql = "SELECT * FROM user_funds WHERE user_id=?";
      db.query(sql, [id], (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          const msg = results[0];
          callback(null, msg);
        }
      });
    } catch (error) {
      callback(null, error);
    }
  }
  //========================
  // SINGLE USER FUND MODEL
  //========================
  // static user_fund_model(id, callback) {
  //   try {
  //     const sql = "SELECT * FROM user_funds WHERE user_id=?";
  //     db.query(sql, [id], (err, results) => {
  //       if (err) {
  //         callback(err, null);
  //       } else {
  //         const msg = results[0];
  //         callback(null, msg);
  //       }
  //     });
  //   } catch (error) {
  //     callback(null, error);
  //   }
  // }
  //==================
  // CREATE FUND MODEL
  //==================
  static create_fund_model(data, callback) {
    try {
      // CHECK USER user_funds IS ALREADY AVAILABLE OR NOT
      const checkSql = `SELECT COUNT(*) AS count FROM user_funds WHERE user_id = ?`;
      db.query(checkSql, [data.user_id], (error, result) => {
        if (error) {
          callback(error, null);
          return;
        }
        if (result[0].count > 0) {
          const updateSql = `UPDATE user_funds SET fund_balance = fund_balance+? WHERE user_id =?`;
          db.query(updateSql, [data.fund_balance, data.user_id], callback);
        } else {
          const insertSql = `INSERT INTO user_funds (fund_id, user_id, fund_balance) VALUES (?, ?, ?)`;
          db.query(
            insertSql,
            [data.fund_id, data.user_id, data.fund_balance],
            callback
          );
        }
      });
    } catch (error) {
      console.log(error);
      // callback(error, null);
    }
  }
  //==================
  // UPDATE FUND MODEL
  //==================
  static update_fund_model(id, data, callback) {
    try {
      const sql = `UPDATE user_funds SET? WHERE fund_id='${id}'`;
      db.query(sql, [data, id], callback);
    } catch (error) {
      // console.log(error);
    }
  }
  //======================
  // SUBSTRACT FUND MODEL
  //======================

  static substract_fund_model(data, callback) {
    try {
      const selectSql = "SELECT fund_balance FROM user_funds WHERE user_id = ?";
      db.query(selectSql, [data.user_id], (err, results) => {
        if (err) {
          console.error("Error during SELECT query:", err);
          return callback(err, null);
        }

        if (results.length === 0) {
          console.error("User not found for user_id:", data.user_id);
          return callback("User not found", null);
        }

        const fund_balance = parseFloat(results[0].fund_balance);
        const requested_balance = parseFloat(data.fund_balance);
        // console.log("Fetched fund balance:", fund_balance);
        // console.log("Requested fund balance to subtract:", requested_balance);

        if (requested_balance > fund_balance) {
          console.error(
            "Insufficient balance. Available:",
            fund_balance,
            "Requested:",
            requested_balance
          );
          return callback("Insufficient balance", 404);
        }

        const updateSql =
          "UPDATE user_funds SET fund_balance = fund_balance - ? WHERE user_id = ?";
        db.query(
          updateSql,
          [requested_balance, data.user_id],
          (err, results) => {
            if (err) {
              console.error("Error during UPDATE query:", err);
              return callback(err, null);
            }
            // console.log(
            //   "Fund balance updated successfully for user_id:",
            //   data.user_id
            // );
            callback(null, results);
          }
        );
      });
    } catch (error) {
      console.error("Error in substract_fund_model:", error);
      callback(error, null);
    }
  }
  //=====================
  // ADDITION FUND MODEL
  //=====================
  static addition_fund_model(data, callback) {
    try {
      const sql = `UPDATE user_funds SET fund_balance=fund_balance+${data.fund_balance} WHERE user_id='${data.user_id}'`;
      db.query(sql, callback);
    } catch (error) {
      console.log(error);
      callback(error, null);
    }
  }
  //===================
  // DELETE FUND MODEL
  //===================
  static delete_fund_model(id, callback) {
    try {
      const sql = `DELETE FROM user_funds WHERE fund_id=?`;
      db.query(sql, [id], callback);
    } catch (error) {
      callback(error, null);
    }
  }
}
module.exports = FundModel;
