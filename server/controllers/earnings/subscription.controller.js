const SubscriptionModel = require("../../models/earnings/subscription.model");
const { v4: uuidv4 } = require("uuid");
class SubscriptionController {
  /*-----------------------------
// ALL SUBSCRIPTION MODEL
-------------------------------*/
  static all_earn_subscription(req, res) {
    try {
      SubscriptionModel.all_earn_subscription_model((err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get earn subcription" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// SINGLE SUBSCRIPTION MODEL
-------------------------------*/
  static single_earn_subscription(req, res) {
    try {
      const { id } = req.params;
      SubscriptionModel.single_earn_subscription_model(id, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to get single earn subcription" });
        }
        res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// CREATE SUBSCRIPTION MODEL
-------------------------------*/
  static create_earn_subscription(req, res) {
    try {
      const data = {
        earn_sub_id: uuidv4(),
        earn_sub_name: req.body.earn_sub_name,
        earn_sub_price: req.body.earn_sub_price,
        earn_sub_task_limit: req.body.earn_sub_task_limit,
        earn_sub_ads_limit: req.body.earn_sub_ads_limit,
        earn_sub_spin_limit: req.body.earn_sub_spin_limit,
        earn_sub_validity_days: req.body.earn_sub_validity_days,
        earn_sub_status: req.body.earn_sub_status,
      };
      SubscriptionModel.create_earn_subscription_model(data, (err, result) => {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json({ message: "failed to create earn subcription" });
        }
        res.status(201).json({
          message: "earn subscription create success",
          id: data.earn_sub_id,
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// UPDATE SUBSCRIPTION MODEL
-------------------------------*/
  static update_earn_subscription(req, res) {
    try {
      const data = {
        earn_sub_name: req.body.earn_sub_name,
        earn_sub_price: req.body.earn_sub_price,
        earn_sub_task_limit: req.body.earn_sub_task_limit,
        earn_sub_ads_limit: req.body.earn_sub_ads_limit,
        earn_sub_spin_limit: req.body.earn_sub_spin_limit,
        earn_sub_validity_days: req.body.earn_sub_validity_days,
        earn_sub_status: req.body.earn_sub_status,
      };
      const { id } = req.params;
      SubscriptionModel.update_earn_subscription_model(
        data,
        id,
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "failed to update earn subcription" });
          }
          if (result.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "earn subcription not found" });
          }
          res.status(200).json({
            message: "earn subscription update success",
          });
        }
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  /*-----------------------------
// DELETE SUBSCRIPTION MODEL
-------------------------------*/
  static delete_earn_subscription(req, res) {
    try {
      const { id } = req.params;
      SubscriptionModel.delete_earn_subscription_model(id, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "failed to delete earn subcription" });
        }
        if (result.affectedRows === 0) {
          return res
            .status(404)
            .json({ message: "earn subcription not found" });
        }
        res.status(200).json({
          message: "earn subscription delete success",
        });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
module.exports = SubscriptionController;
