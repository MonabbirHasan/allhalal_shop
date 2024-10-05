const EarnUserSubscriptionModel = require("../../models/earnings/user_subscription.model");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
class EarnUserSubscriptionController {
  /*-----------------------------
// ALL USER SUBSCRIPTION
-------------------------------*/
  static all_user_earn_subscription(req, res) {
    try {
      EarnUserSubscriptionModel.all_user_earn_subscription_model(
        (err, data) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to get user subscription", err });
          }
          res.status(200).json(data);
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-------------------------------
 // SINGLE USER SUBSCRIPTION
 ---------------------------------*/
  static single_user_earn_subscription(req, res) {
    try {
      const { id } = req.params;
      EarnUserSubscriptionModel.single_user_earn_subscription_model(
        id,
        (err, data) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to get single user subscription", err });
          }
          res.status(200).json(data);
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-------------------------------
 // PURCHASES USER SUBSCRIPTION
 ---------------------------------*/
  static purchase_subscription(req, res) {
    const data = {
      earn_user_sub_id: uuidv4(),
      earn_user_sub_user_id: req.body.earn_user_sub_user_id,
      earn_user_sub_sub_id: req.body.earn_user_sub_sub_id,
      earn_user_sub_start_date: new Date().toISOString(),
      earn_user_sub_tasks_completed_today: 0,
      earn_user_sub_last_task_date: new Date().toISOString(),
      earn_user_sub_status: req.body.earn_user_sub_status,
    };
    EarnUserSubscriptionModel.purchase_subscription_model(
      data,
      (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to purchase subscription", err });
        }
        res
          .status(200)
          .json({ message: "subscription purchase success", data: result });
      }
    );
  }
  /*-----------------------------
  // CREATE USER SUBSCRIPTION
  -------------------------------*/
  static create_user_earn_subscription(req, res) {
    try {
      const data = {
        earn_user_sub_id: uuidv4(),
        earn_user_sub_user_id: req.body.earn_user_sub_user_id,
        earn_user_sub_sub_id: req.body.earn_user_sub_sub_id,
        earn_user_sub_start_date: req.body.earn_user_sub_start_date,
        earn_user_sub_end_date: req.body.earn_user_sub_end_date,
        earn_user_sub_tasks_completed_today:
          req.body.earn_user_sub_tasks_completed_today,
        earn_user_sub_last_task_date: req.body.earn_user_sub_last_task_date,
        earn_user_sub_status: req.body.earn_user_sub_status,
      };

      EarnUserSubscriptionModel.create_user_earn_subscription_model(
        data,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to create user subscription", err });
          }
          res.status(201).json({
            message: "user subscription create success",
            id: data.earn_user_sub_id,
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
  // UPDATE USER SUBSCRIPTION
  -------------------------------*/
  static update_user_earn_subscription(req, res) {
    try {
      const data = {
        earn_user_sub_user_id: req.body.earn_user_sub_user_id,
        earn_user_sub_sub_id: req.body.earn_user_sub_sub_id,
        earn_user_sub_start_date: req.body.earn_user_sub_start_date,
        earn_user_sub_end_date: req.body.earn_user_sub_end_date,
        earn_user_sub_tasks_completed_today:
          req.body.earn_user_sub_tasks_completed_today,
        earn_user_sub_last_task_date: req.body.earn_user_sub_last_task_date,
        earn_user_sub_status: req.body.earn_user_sub_status,
      };
      const { id } = req.params;
      EarnUserSubscriptionModel.update_user_earn_subscription_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update user subscription", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: " user subscription not found" });
          }
          res.status(200).json({
            message: "user subscription update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// DELETE USER SUBSCRIPTION
-------------------------------*/
  static delete_user_earn_subscription(req, res) {
    try {
      const { id } = req.params;
      EarnUserSubscriptionModel.delete_user_earn_subscription_model(
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to delete user subscription", err });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: " user subscription not found" });
          }
          res.status(200).json({
            message: "user subscription delete success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = EarnUserSubscriptionController;
