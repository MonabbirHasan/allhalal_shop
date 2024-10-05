const db = require("../../config/config");
const moment = require("moment");
class EarnUserSubscriptionModel {
  /*-----------------------------
// ALL USER SUBSCRIPTION MODEL
-------------------------------*/
  static all_user_earn_subscription_model(callback) {
    const sql = "SELECT * FROM earn_user_subscription";
    db.query(sql, callback);
  }
  /*-------------------------------
 // PURCHASES USER SUBSCRIPTION MODEL
 ---------------------------------*/
  static purchase_subscription_model(data, callback) {
    const subscriptionQuery = `SELECT earn_sub_task_limit, earn_sub_validity_days FROM earn_subscription WHERE earn_sub_id = ?`;

    db.query(subscriptionQuery, [data.earn_user_sub_sub_id], (err, result) => {
      if (err) {
        return callback(err, null);
      }

      const msg = result[0];
      const endDate = moment()
        .add(msg.earn_sub_validity_days, "days")
        .format("YYYY-MM-DD");

      const insertQuery = `
          INSERT INTO earn_user_subscription 
          (earn_user_sub_id, earn_user_sub_user_id, earn_user_sub_sub_id, earn_user_sub_start_date, earn_user_sub_end_date, earn_user_sub_tasks_completed_today, earn_user_sub_last_task_date, earn_user_sub_status) 
          VALUES (?,?, ?, ?, ?, ?, ?, ?)
      `;

      const queryParams = [
        data.earn_user_sub_id,
        data.earn_user_sub_user_id,
        data.earn_user_sub_sub_id,
        data.earn_user_sub_start_date,
        endDate,
        data.earn_user_sub_tasks_completed_today,
        data.earn_user_sub_last_task_date,
        data.earn_user_sub_status,
      ];

      db.query(insertQuery, queryParams, (err, insertResult) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, msg);
      });
    });
  }
  /*-------------------------------
 //  Check Task Eligibility Before Task Completion
 call this function with desired details when the user is clicked on the task like ads, install app, and more...
 ---------------------------------*/
  static completeTask(data, callback) {
    // Check the user's subscription
    const subscriptionQuery = `
    SELECT us.earn_user_sub_tasks_completed_today, us.earn_user_sub_last_task_date, es.earn_sub_task_limit 
    FROM earn_user_subscription AS us 
    JOIN earn_subscription AS es ON us.earn_user_sub_sub_id  = es.earn_sub_id 
    WHERE us.earn_user_sub_user_id = ? AND us.earn_user_sub_end_date >= CURDATE()
  `;

    db.query(subscriptionQuery, [data.earn_user_sub_user_id], (err, result) => {
      if (err) throw err;

      if (result.length === 0) {
        // return res
        //   .status(400)
        //   .json({ message: "No active subscription found." });
        callback({ message: "No active subscription found." }, null);
      }

      const {
        earn_user_sub_tasks_completed_today,
        earn_user_sub_last_task_date,
        earn_sub_task_limit,
      } = result[0];

      // Check if today's tasks exceed the limit
      const today = moment().format("YYYY-MM-DD");

      if (
        earn_user_sub_last_task_date === today &&
        earn_user_sub_tasks_completed_today >= earn_sub_task_limit
      ) {
        // return res
        //   .status(400)
        //   .json({ message: "You have reached your daily task limit." });
          callback({ message: "You have reached your daily task limit" }, null);
      }

      // Allow task completion if the limit is not reached
      const taskRewardQuery = `SELECT earn_task_reward_coins FROM earn_daily_tasks WHERE earn_task_id = ?`;

      db.query(taskRewardQuery, [data.earn_task_id], (err, result) => {
        if (err) throw err;
        const rewardCoins = result[0].earn_task_reward_coins;

        // Log the task completion in user_task_completion table
        const insertTaskCompletionQuery = `
        INSERT INTO earn_user_task_completion (earn_utc_id ,earn_utc_user_id, earn_utc_task_id , earn_utc_reward_coins,earn_utc_task_status)
        VALUES (?, ?, ?, ?, ?)
      `;

        db.query(
          insertTaskCompletionQuery,
          [
            data.earn_utc_id,
            data.earn_utc_user_id,
            data.earn_utc_task_id,
            rewardCoins,
            data.earn_utc_task_status,
          ],
          (err, result) => {
            if (err) throw err;

            // Update tasks_completed_today in user_subscriptions
            const updateSubscriptionQuery = `
              UPDATE earn_user_subscription 
              SET earn_user_sub_tasks_completed_today = earn_user_sub_tasks_completed_today + 1, earn_user_sub_last_task_date = CURDATE()
              WHERE earn_user_sub_user_id = ?
            `;

            db.query(
              updateSubscriptionQuery,
              [data.earn_user_sub_user_id],
              (err, result) => {
                if (err) throw err;
                res.json({
                  message: "Task completed successfully!",
                  reward: rewardCoins,
                });
              }
            );
          }
        );
      });
    });
  }
  /*-------------------------------
 // SINGLE USER SUBSCRIPTION MODEL
 ---------------------------------*/
  static single_user_earn_subscription_model(id, callback) {
    const sql = "SELECT * FROM earn_user_subscription WHERE earn_user_sub_id=?";
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
  // CREATE USER SUBSCRIPTION MODEL
  -------------------------------*/
  static create_user_earn_subscription_model(data, callback) {
    const sql = "INSERT INTO earn_user_subscription SET?";
    db.query(sql, data, callback);
  }
  /*-----------------------------
  // UPDATE USER SUBSCRIPTION MODEL
  -------------------------------*/
  static update_user_earn_subscription_model(data, id, callback) {
    const sql = "UPDATE earn_user_subscription SET? WHERE earn_user_sub_id=?";
    db.query(sql, [data, id], callback);
  }
  /*-----------------------------
// DELETE USER SUBSCRIPTION MODEL
-------------------------------*/
  static delete_user_earn_subscription_model(id, callback) {
    const sql = "DELETE FROM earn_user_subscription WHERE earn_user_sub_id=?";
    db.query(sql, [id], callback);
  }
}
module.exports = EarnUserSubscriptionModel;
